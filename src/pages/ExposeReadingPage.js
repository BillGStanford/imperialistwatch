// src/pages/ExposeReadingPage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  AlertTriangle,
  Share2,
  Download,
  Eye,
  Tag,
  ExternalLink,
  Clock,
} from 'lucide-react';
import { getExposeById, exposeData } from '../data/ExposeData';
import QRCode from 'react-qr-code';
import { jsPDF } from 'jspdf';
import DOMPurify from 'dompurify';

const ExposeReadingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);
  const [relatedCases, setRelatedCases] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const data = getExposeById(id);
    if (!data) {
      setCaseData(null);
      return;
    }

    setCaseData(data);

    // Calculate reading time (average 250 words per minute)
    const wordCount = (data.fullContent || '')
      .replace(/<[^>]*>/g, '')
      .split(/\s+/).length;
    setReadingTime(Math.ceil(wordCount / 250));

    // Get related cases
    const related = exposeData
      .filter(
        (item) =>
          item.id !== id &&
          (item.category === data.category ||
            item.tags.some((tag) => data.tags.includes(tag)))
      )
      .slice(0, 3);
    setRelatedCases(related);
  }, [id]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical':
        return 'border-red-600 text-red-600';
      case 'High':
        return 'border-orange-600 text-orange-600';
      case 'Medium':
        return 'border-yellow-600 text-yellow-600';
      case 'Low':
        return 'border-green-600 text-green-600';
      default:
        return 'border-gray-600 text-gray-600';
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert('Case link copied to clipboard!');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Case link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error copying link:', error);
      alert('Failed to copy link. Please try again.');
    }
  };

  const handleDownloadPDF = async () => {
    if (!caseData || !caseData.fullContent) {
      alert('No content available to generate PDF.');
      return;
    }

    try {
      // Create a new PDF document
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Define margins and styling
      const margin = 15;
      const pageWidth = doc.internal.pageSize.getWidth();
      const contentWidth = (pageWidth - 3 * margin) / 2; // Two-column layout
      const lineHeight = 7;

      // --- Cover Page ---
      doc.setFont('times', 'bold');
      doc.setFontSize(24);
      doc.setTextColor(0, 0, 0);
      doc.text(caseData.title || 'Untitled Case', pageWidth / 2, 30, {
        align: 'center',
      });
      doc.setLineWidth(0.5);
      doc.line(margin, 35, pageWidth - margin, 35); // Horizontal rule

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(14);
      let yPos = 50;
      doc.text(`Case ID: #${caseData.id || 'N/A'}`, pageWidth / 2, yPos, {
        align: 'center',
      });
      yPos += 10;
      doc.text(`Severity: ${caseData.severity || 'N/A'}`, pageWidth / 2, yPos, {
        align: 'center',
      });
      yPos += 10;
      doc.text(`Location: ${caseData.location || 'N/A'}`, pageWidth / 2, yPos, {
        align: 'center',
      });
      yPos += 10;
      doc.text(
        `Published: ${
          caseData.date
            ? new Intl.DateTimeFormat('en-US').format(new Date(caseData.date))
            : 'N/A'
        }`,
        pageWidth / 2,
        yPos,
        { align: 'center' }
      );

      // Footer
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(
        `Generated on ${new Intl.DateTimeFormat('en-US').format(new Date())}`,
        pageWidth / 2,
        270,
        { align: 'center' }
      );

      // --- Content Page(s) ---
      doc.addPage();
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);

      // Strip HTML tags
      const stripHtml = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = DOMPurify.sanitize(html);
        return tmp.textContent || tmp.innerText || '';
      };
      const cleanContent = stripHtml(caseData.fullContent);

      // Two-column layout
      const lines = doc.splitTextToSize(cleanContent, contentWidth);
      let currentY = margin;
      let column = 0;

      lines.forEach((line) => {
        if (currentY > 260) {
          column = column === 0 ? 1 : 0;
          if (column === 0) {
            doc.addPage();
            currentY = margin;
          }
        }
        const xPos = margin + (column * (contentWidth + margin));
        doc.text(line, xPos, currentY);
        currentY += lineHeight;
      });

      // Add page numbers
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, 270, {
          align: 'right',
        });
      }

      // Generate filename
      const cleanTitle = (caseData.title || 'untitled')
        .replace(/[^a-z0-9]/gi, '_')
        .toLowerCase();
      const filename = `case_${caseData.id || 'unknown'}_${cleanTitle}.pdf`;

      // Save the PDF
      doc.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  if (!caseData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center" role="alert">
          <AlertTriangle
            className="mx-auto text-gray-600 mb-4"
            size={48}
            aria-hidden="true"
          />
          <h1 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Case Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested investigation could not be located.
          </p>
          <Link
            to="/expose"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            aria-label="Return to Expose page"
          >
            Return to Expose
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-4 mb-8">
          <nav className="flex items-center justify-between" aria-label="Page navigation">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Go back to Expose page"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span className="font-sans font-medium">Back to Expose</span>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Share case link"
              >
                <Share2 size={16} aria-hidden="true" />
                <span className="font-sans font-medium">Share</span>
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Download case as PDF"
              >
                <Download size={16} aria-hidden="true" />
                <span className="font-sans font-medium">Download PDF</span>
              </button>
            </div>
          </nav>
        </header>

        {/* Article Header */}
        <article className="mb-8">
          <header>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className={`px-3 py-1 border font-sans font-medium text-sm ${getSeverityColor(
                  caseData.severity
                )}`}
                aria-label={`Severity: ${caseData.severity}`}
              >
                {caseData.severity} Threat
              </span>
              <span
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded font-sans font-medium text-sm"
                aria-label={`Category: ${caseData.category}`}
              >
                {caseData.category}
              </span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4 leading-tight">
              {caseData.title || 'Untitled Case'}
            </h1>
            <p className="text-lg text-gray-600 font-sans mb-6">
              {caseData.shortDescription || 'No description available.'}
            </p>
          </header>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 border-t border-b border-gray-200 py-4">
            <div className="flex items-center space-x-2">
              <Calendar className="text-gray-500" size={16} aria-hidden="true" />
              <div>
                <p className="text-sm text-gray-500 font-sans">Published</p>
                <p className="font-sans font-medium text-gray-800">
                  {caseData.date
                    ? new Intl.DateTimeFormat('en-US').format(new Date(caseData.date))
                    : 'N/A'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-gray-500" size={16} aria-hidden="true" />
              <div>
                <p className="text-sm text-gray-500 font-sans">Location</p>
                <p className="font-sans font-medium text-gray-800">{caseData.location || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-gray-500" size={16} aria-hidden="true" />
              <div>
                <p className="text-sm text-gray-500 font-sans">Reading Time</p>
                <p className="font-sans font-medium text-gray-800">{readingTime} min read</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="text-gray-500" size={16} aria-hidden="true" />
              <div>
                <p className="text-sm text-gray-500 font-sans">Case ID</p>
                <p className="font-sans font-medium text-gray-800">#{caseData.id || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {(caseData.tags || []).map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm font-sans"
                aria-label={`Tag: ${tag}`}
              >
                <Tag size={12} aria-hidden="true" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </article>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <section className="lg:col-span-2">
            <div
              className="prose prose-lg font-sans text-gray-800 max-w-none"
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(caseData.fullContent || '') }}
            />
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gray-100 p-6 rounded">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Quick Stats</h3>
              <dl className="space-y-3 font-sans text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Severity:</dt>
                  <dd className="font-medium text-gray-800">{caseData.severity || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category:</dt>
                  <dd className="font-medium text-gray-800">{caseData.category || 'N/A'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Tags:</dt>
                  <dd className="font-medium text-gray-800">{(caseData.tags || []).length}</dd>
                </div>
              </dl>
            </div>

            {/* Related Cases */}
            {relatedCases.length > 0 && (
              <div className="bg-gray-100 p-6 rounded">
                <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Related Cases</h3>
                <div className="space-y-4">
                  {relatedCases.map((related) => (
                    <Link
                      key={related.id}
                      to={`/expose/${related.id}`}
                      className="block p-4 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                      aria-label={`View related case: ${related.title}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-1 border text-xs font-sans font-medium ${getSeverityColor(
                            related.severity
                          )}`}
                        >
                          {related.severity}
                        </span>
                        <ExternalLink
                          size={14}
                          className="text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <h4 className="font-sans font-medium text-gray-800 text-sm mb-2">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-600 font-sans">{related.location}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Action Box */}
            <div className="bg-gray-100 p-6 rounded">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Take Action</h3>
              <div className="space-y-4">
                <button
                  onClick={handleShare}
                  className="w-full bg-blue-600 text-white py-2 rounded font-sans font-medium text-sm hover:bg-blue-700 transition-colors"
                  aria-label="Share this case"
                >
                  Share This Case
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded font-sans font-medium text-sm hover:bg-blue-50 transition-colors"
                  aria-label="Download case as PDF"
                >
                  Download as PDF
                </button>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-2 rounded mb-3">
                      <QRCode
                        value={window.location.href}
                        size={100}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                        aria-label="QR code for sharing this case"
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-sans mb-2">
                      Scan to share this case
                    </p>
                    <button
                      onClick={handleShare}
                      className="text-xs text-blue-600 hover:text-blue-800 font-sans"
                      aria-label="Copy case link"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Call to Action */}
        <section className="bg-gray-100 p-8 rounded mt-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Expose More Investigations
          </h2>
          <p className="text-lg text-gray-600 font-sans mb-6 max-w-2xl mx-auto">
            This is one of many cases. Help us uncover more evidence of systemic issues and
            injustices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/expose"
              className="bg-blue-600 text-white px-6 py-3 rounded font-sans font-medium text-base hover:bg-blue-700 transition-colors"
              aria-label="View all cases"
            >
              View All Cases
            </Link>
            <button
              className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded font-sans font-medium text-base hover:bg-blue-50 transition-colors"
              aria-label="Submit evidence"
            >
              Submit Evidence
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExposeReadingPage;
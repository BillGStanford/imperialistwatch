// src/pages/NewsReadingPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Share2, Download, Copy, QrCode, Facebook, Twitter, ArrowLeft, Tag } from 'lucide-react';
import { getNewsById, getRelatedNews } from '../data/NewsData';

const NewsReadingPage = () => {
  const { id, slug } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [showQR, setShowQR] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const currentUrl = window.location.origin + `/news/${id}/${slug}`;

  useEffect(() => {
    const newsArticle = getNewsById(id);
    if (newsArticle && newsArticle.slug === slug) {
      setNews(newsArticle);
      setRelatedNews(getRelatedNews(newsArticle.id, newsArticle.category));
    } else {
      setNews(null);
    }
  }, [id, slug]);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const qrData = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
        setQrDataUrl(qrData);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    if (currentUrl) {
      generateQR();
    }
  }, [currentUrl]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = `qr-code-${news?.title?.replace(/\s+/g, '-').toLowerCase() || 'article'}.png`;
    link.href = qrDataUrl;
    link.click();
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(news?.title || '')}`, '_blank');
  };

  if (!news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <Link to="/news" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{news.title} | Revolutionary News</title>
        <meta name="description" content={news.description} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.description} />
        <meta property="og:image" content={news.thumbnail} />
        <meta property="og:url" content={currentUrl} />
      </Helmet>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/news" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
              <ArrowLeft size={20} />
              Back to News
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <QrCode size={16} />
                QR Code
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Copy size={16} />
                {copySuccess ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Share this article</h3>
            <div className="text-center mb-4">
              <img src={qrDataUrl} alt="QR Code" className="mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-4">Scan to share this article</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={downloadQR}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Download size={16} />
                Download
              </button>
              <button
                onClick={() => setShowQR(false)}
                className="flex-1 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            {news.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {news.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {news.description}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User size={18} className="text-gray-500" />
              <span className="font-medium text-gray-900">By {news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <span className="text-gray-600">{formatDate(news.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-500" />
              <span className="text-gray-600">{news.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={news.thumbnail} 
            alt={news.title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: news.content }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              fontFamily: 'Georgia, serif'
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Tag size={18} className="text-gray-500" />
            <span className="font-medium text-gray-900">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {news.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Facebook size={16} />
                Facebook
              </button>
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
              >
                <Twitter size={16} />
                Twitter
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Share2 size={16} />
                {copySuccess ? 'Copied!' : 'Share'}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedNews.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedNews.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/news/${relatedArticle.id}/${relatedArticle.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={relatedArticle.thumbnail} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {relatedArticle.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedArticle.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{relatedArticle.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(relatedArticle.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest revolutionary news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsReadingPage;
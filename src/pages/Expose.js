// src/pages/Expose.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, MapPin, AlertTriangle, Eye, ArrowRight } from 'lucide-react';
import { exposeData, getAllCategories } from '../data/ExposeData';

const Expose = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  
  const categories = getAllCategories();
  const severityLevels = ['Critical', 'High', 'Medium', 'Low'];

  const filteredData = exposeData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'all' || item.severity === selectedSeverity;
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critical': return 'bg-red-600';
      case 'High': return 'bg-orange-600';
      case 'Medium': return 'bg-yellow-600';
      case 'Low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-worker-black-950 via-revolutionary-red-950 to-worker-black-950">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black revolutionary-text mb-6">
            EXPOSING CAPITALIST CRIMES
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-revolutionary-red-400">DOCUMENTED EVIDENCE</span> of Western imperialism, corporate exploitation, and capitalist crimes against humanity. 
            The truth they don't want you to see.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Eye className="text-revolutionary-red-600" size={32} />
            <span className="text-revolutionary-red-400 font-bold text-lg">
              {exposeData.length} CASES DOCUMENTED
            </span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="revolutionary-card p-8 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revolutionary-red-600" size={20} />
              <input
                type="text"
                placeholder="Search crimes..."
                className="w-full pl-10 pr-4 py-3 bg-worker-black-900 border border-revolutionary-red-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-revolutionary-red-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revolutionary-red-600" size={20} />
              <select
                className="w-full pl-10 pr-4 py-3 bg-worker-black-900 border border-revolutionary-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-revolutionary-red-600"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Severity Filter */}
            <div className="relative">
              <AlertTriangle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-revolutionary-red-600" size={20} />
              <select
                className="w-full pl-10 pr-4 py-3 bg-worker-black-900 border border-revolutionary-red-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-revolutionary-red-600"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
              >
                <option value="all">All Severity</option>
                {severityLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center">
              <span className="text-revolutionary-red-400 font-bold text-lg">
                {filteredData.length} RESULTS
              </span>
            </div>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredData.map((item) => (
            <div key={item.id} className="revolutionary-card p-8 rounded-lg hover:revolutionary-glow transition-all duration-300 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getSeverityColor(item.severity)}`}>
                      {item.severity}
                    </span>
                    <span className="text-revolutionary-red-400 font-bold text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black revolutionary-text mb-2 group-hover:text-revolutionary-red-400 transition-colors">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-revolutionary-red-900/30 text-revolutionary-red-400 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {item.shortDescription}
              </p>

              {/* Preview Content */}
              <div className="bg-worker-black-900/50 p-4 rounded-lg mb-6 border-l-4 border-revolutionary-red-600">
                <div className="text-gray-300 leading-relaxed">
                  {item.preview.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <Link
                to={`/expose/${item.id}`}
                className="revolutionary-button px-8 py-3 rounded-lg inline-flex items-center space-x-2 group-hover:scale-105 transition-transform"
              >
                <span>READ FULL INVESTIGATION</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="mx-auto text-revolutionary-red-600 mb-4" size={64} />
            <h3 className="text-2xl font-bold text-gray-300 mb-2">NO CASES FOUND</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="revolutionary-card p-12 rounded-lg mt-16 text-center">
          <h2 className="text-4xl font-black revolutionary-text mb-6">
            HAVE EVIDENCE OF CAPITALIST CRIMES?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us expose more imperialist atrocities. Submit documented evidence of corporate crimes, 
            worker exploitation, and Western aggression.
          </p>
          <button className="revolutionary-button px-12 py-4 rounded-lg text-xl font-bold">
            SUBMIT EVIDENCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expose;
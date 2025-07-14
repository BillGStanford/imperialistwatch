// src/pages/News.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Filter, Search, Star, TrendingUp } from 'lucide-react';
import { newsData, categories, getNewsByCategory, getFeaturedNews } from '../data/NewsData';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const filteredNews = getNewsByCategory(selectedCategory)
    .filter(news => 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      } else if (sortBy === 'oldest') {
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      }
      return 0;
    });

  const featuredNews = getFeaturedNews();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-worker-black-950 via-revolutionary-red-950 to-worker-black-950">
      {/* Header Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-black revolutionary-text mb-6">
            Revolutionary News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest developments in workers' rights, labor movements, 
            and the ongoing struggle for economic justice.
          </p>
        </div>
      </div>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <div className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Star className="text-socialist-yellow-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Featured Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}/${news.slug}`}
                  className="group revolutionary-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={news.thumbnail} 
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-revolutionary-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-revolutionary-red-400 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(news.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Section */}
      <div className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="revolutionary-card rounded-xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-worker-black-800 border border-revolutionary-red-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-revolutionary-red-500 focus:ring-2 focus:ring-revolutionary-red-500/20"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-revolutionary-red-500" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-worker-black-800 border border-revolutionary-red-600/30 rounded-lg text-white focus:outline-none focus:border-revolutionary-red-500 focus:ring-2 focus:ring-revolutionary-red-500/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="text-revolutionary-red-500" size={20} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-worker-black-800 border border-revolutionary-red-600/30 rounded-lg text-white focus:outline-none focus:border-revolutionary-red-500 focus:ring-2 focus:ring-revolutionary-red-500/20"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-revolutionary-red-600 text-white revolutionary-glow'
                    : 'bg-worker-black-800 text-gray-300 hover:bg-worker-black-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <Search className="mx-auto text-gray-500 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}/${news.slug}`}
                  className="group revolutionary-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={news.thumbnail} 
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-revolutionary-red-600/90 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-revolutionary-red-400 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(news.publishedAt)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {news.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-worker-black-800 text-gray-400 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Hammer,
  Shield,
  Users,
  Globe,
  TrendingUp,
  AlertTriangle,
  Newspaper,
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', icon: Hammer, external: false },
    { name: 'ABOUT', path: '/about', icon: Shield, external: false },
    { name: 'EXPOSÉ', path: '/expose', icon: Users, external: false },
    { name: 'News', path: '/news', icon: Newspaper, external: false },
    { name: 'Map of Crimes', path: '/map-of-crimes.html', icon: Globe, external: true },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative z-20 bg-worker-black-950/90 backdrop-blur-sm border-b border-revolutionary-red-600/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Hammer
                className="text-revolutionary-red-600 group-hover:text-revolutionary-red-400 transition-colors"
                size={32}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-revolutionary-red-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black revolutionary-text">
                IMPERIALIST<span className="text-revolutionary-red-400">WATCH</span>
              </h1>
              <p className="text-xs text-revolutionary-red-400 font-bold">
                EXPOSING CAPITALIST CRIMES
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 text-gray-300 hover:text-revolutionary-red-400 hover:bg-revolutionary-red-900/30"
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-revolutionary-red-600 text-white revolutionary-glow'
                      : 'text-gray-300 hover:text-revolutionary-red-400 hover:bg-revolutionary-red-900/30'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/expose"
              className="revolutionary-button px-6 py-3 rounded-lg font-bold text-sm flex items-center space-x-2"
            >
              <AlertTriangle size={18} />
              <span>REPORT CRIME</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-revolutionary-red-400 hover:text-revolutionary-red-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-worker-black-950/95 backdrop-blur-sm border-b border-revolutionary-red-600/30">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 text-gray-300 hover:text-revolutionary-red-400 hover:bg-revolutionary-red-900/30"
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-revolutionary-red-600 text-white'
                        : 'text-gray-300 hover:text-revolutionary-red-400 hover:bg-revolutionary-red-900/30'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-revolutionary-red-600/30">
                <Link
                  to="/expose"
                  onClick={() => setIsMenuOpen(false)}
                  className="revolutionary-button w-full px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center space-x-2"
                >
                  <AlertTriangle size={18} />
                  <span>REPORT CRIME</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Hammer, Shield, Users, Globe, Mail, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const revolutionLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EXPOSÉ', path: '/expose' },
    { name: 'NEWS', path: '/news' },
  ];

  return (
    <footer className="bg-worker-black-950/95 backdrop-blur-md border-t border-revolutionary-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="revolutionary-glow p-2 rounded-full bg-revolutionary-red-600/20">
                <Hammer className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <div className="text-2xl font-black revolutionary-text">
                IMPERIALIST<span className="text-revolutionary-red-500">WATCH</span>
              </div>
            </div>
            <p className="text-white/80 font-semibold mb-6 max-w-md leading-relaxed">
              <strong>Documenting capitalist crimes, empowering workers, and building revolutionary consciousness worldwide. The struggle for economic justice continues.</strong>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-revolutionary-red-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-revolutionary-red-400 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-revolutionary-red-400 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-revolutionary-red-400 transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Revolution Links (from Navbar) */}
          <div>
            <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wide">
              REVOLUTION
            </h3>
            <ul className="space-y-2">
              {revolutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-revolutionary-red-400 font-semibold transition-colors duration-300 uppercase text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Simplified Resources */}
          <div>
            <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wide">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-revolutionary-red-400 font-semibold transition-colors duration-300 uppercase text-sm">
                  Manifestos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-revolutionary-red-400 font-semibold transition-colors duration-300 uppercase text-sm">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-revolutionary-red-600/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 font-semibold mb-4 md:mb-0">
              <span className="text-revolutionary-red-400 font-black">SOLIDARITY FOREVER</span> • 
              Workers of the world, unite! • 
              <span className="text-revolutionary-red-400 font-black">POWER TO THE PEOPLE</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="revolutionary-glow p-2 rounded-full bg-revolutionary-red-600/20">
                <Shield className="h-5 w-5 text-revolutionary-red-500" />
              </div>
              <div className="revolutionary-glow p-2 rounded-full bg-revolutionary-red-600/20">
                <Users className="h-5 w-5 text-revolutionary-red-500" />
              </div>
              <div className="revolutionary-glow p-2 rounded-full bg-revolutionary-red-600/20">
                <Globe className="h-5 w-5 text-revolutionary-red-500" />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/50 font-semibold text-sm">
              © 2024 ImperialistWatch. <strong>THE REVOLUTION CONTINUES.</strong> All power to the working class.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

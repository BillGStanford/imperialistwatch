import React from 'react';
import { Hammer, Shield, Users, Globe, TrendingUp, AlertTriangle, BookOpen, Zap, Eye, Heart } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="revolutionary-glow p-6 rounded-full bg-revolutionary-red-600/20 w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <Eye className="h-16 w-16 text-revolutionary-red-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black revolutionary-text mb-6 leading-tight">
            EXPOSE THE SYSTEM
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-8 max-w-3xl mx-auto leading-relaxed">
            **DOCUMENTING CAPITALIST CRIMES • EMPOWERING THE WORKING CLASS • BUILDING REVOLUTIONARY CONSCIOUSNESS**
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button className="revolutionary-button px-8 py-4 rounded-lg text-lg font-black uppercase tracking-wider">
              JOIN THE REVOLUTION
            </button>
            <button className="revolutionary-border bg-transparent px-8 py-4 rounded-lg text-lg font-black uppercase tracking-wider text-white hover:bg-revolutionary-red-600/20 transition-all duration-300">
              EXPLORE CRIMES
            </button>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black revolutionary-text text-center mb-16">
            OUR REVOLUTIONARY MISSION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expose Capitalist Crimes */}
            <div className="revolutionary-card p-8 rounded-xl revolutionary-float hover:scale-105 transition-all duration-300">
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                **EXPOSE CAPITALIST CRIMES**
              </h3>
              <p className="text-white/80 font-semibold text-center leading-relaxed">
                Documenting the systematic exploitation, environmental destruction, and human rights violations perpetrated by capitalist regimes worldwide.
              </p>
            </div>

            {/* Educate on Socialism */}
            <div className="revolutionary-card p-8 rounded-xl revolutionary-float hover:scale-105 transition-all duration-300" style={{animationDelay: '0.5s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                **EDUCATE ON SOCIALISM**
              </h3>
              <p className="text-white/80 font-semibold text-center leading-relaxed">
                Providing comprehensive education on socialist and communist principles, theory, and successful implementations throughout history.
              </p>
            </div>

            {/* Workers' Rights */}
            <div className="revolutionary-card p-8 rounded-xl revolutionary-float hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                **WORKERS' RIGHTS**
              </h3>
              <p className="text-white/80 font-semibold text-center leading-relaxed">
                Championing the rights of workers everywhere, exposing labor exploitation, and promoting collective action for economic justice.
              </p>
            </div>

            {/* Climate Action */}
            <div className="revolutionary-card p-8 rounded-xl revolutionary-float hover:scale-105 transition-all duration-300" style={{animationDelay: '1.5s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                **CLIMATE REVOLUTION**
              </h3>
              <p className="text-white/80 font-semibold text-center leading-relaxed">
                Exposing how capitalism drives climate destruction and promoting socialist solutions for environmental sustainability.
              </p>
            </div>

            {/* Income Inequality */}
            <div className="revolutionary-card p-8 rounded-xl revolutionary-float hover:scale-105 transition-all duration-300" style={{animationDelay: '2s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                **FIGHT INEQUALITY**
              </h3>
              <p className="text-white/80 font-semibold text-center leading-relaxed">
                Analyzing and exposing the growing wealth gap under capitalism while advocating for economic systems that serve all people.
              </p>
            </div>

            {/* Global Crimes */}
            <div className="revolutionary-card p-8 rounded-xl revolutionary-float hover:scale-105 transition-all duration-300" style={{animationDelay: '2.5s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                **DOCUMENT GLOBAL CRIMES**
              </h3>
              <p className="text-white/80 font-semibold text-center leading-relaxed">
                Real-time documentation of ongoing crimes by Western-capitalist regimes, providing evidence for international accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="revolutionary-glow p-6 rounded-full bg-revolutionary-red-600/20 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <Hammer className="h-12 w-12 text-revolutionary-red-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black revolutionary-text mb-6">
            **THE TIME IS NOW**
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the global movement for economic justice, workers' rights, and revolutionary change. Together, we can expose the truth and build a better world.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button className="revolutionary-button px-10 py-5 rounded-lg text-xl font-black uppercase tracking-wider">
              GET INVOLVED
            </button>
            <button className="revolutionary-border bg-transparent px-10 py-5 rounded-lg text-xl font-black uppercase tracking-wider text-white hover:bg-revolutionary-red-600/20 transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-revolutionary-red-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="revolutionary-pulse">
              <div className="text-4xl font-black revolutionary-text mb-2">1000+</div>
              <div className="text-lg font-bold text-white/80">CRIMES DOCUMENTED</div>
            </div>
            <div className="revolutionary-pulse" style={{animationDelay: '0.5s'}}>
              <div className="text-4xl font-black revolutionary-text mb-2">50K+</div>
              <div className="text-lg font-bold text-white/80">COMRADES UNITED</div>
            </div>
            <div className="revolutionary-pulse" style={{animationDelay: '1s'}}>
              <div className="text-4xl font-black revolutionary-text mb-2">100+</div>
              <div className="text-lg font-bold text-white/80">COUNTRIES ACTIVE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
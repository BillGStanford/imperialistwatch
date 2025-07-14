import React from 'react';
import { Hammer, Shield, Users, Globe, TrendingUp, AlertTriangle, BookOpen, Zap, Eye, Heart, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="revolutionary-glow p-6 rounded-full bg-revolutionary-red-600/20 w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <Target className="h-16 w-16 text-revolutionary-red-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black revolutionary-text mb-6 leading-tight">
            **OUR MISSION**
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-8 max-w-3xl mx-auto leading-relaxed">
            ImperialistWatch stands as a revolutionary force against capitalist oppression, documenting crimes and building working-class consciousness worldwide.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black revolutionary-text text-center mb-16">
            **REVOLUTIONARY PRINCIPLES**
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="revolutionary-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="revolutionary-glow p-3 rounded-full bg-revolutionary-red-600/20 mr-4">
                  <Hammer className="h-8 w-8 text-revolutionary-red-500" />
                </div>
                <h3 className="text-2xl font-black text-white">**SOLIDARITY WITH WORKERS**</h3>
              </div>
              <p className="text-white/80 font-semibold leading-relaxed">
                We stand in unwavering solidarity with the global working class, recognizing that the struggle for economic justice transcends borders. Every worker deserves dignity, fair wages, and control over their labor.
              </p>
            </div>

            <div className="revolutionary-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="revolutionary-glow p-3 rounded-full bg-revolutionary-red-600/20 mr-4">
                  <Eye className="h-8 w-8 text-revolutionary-red-500" />
                </div>
                <h3 className="text-2xl font-black text-white">**TRUTH AND TRANSPARENCY**</h3>
              </div>
              <p className="text-white/80 font-semibold leading-relaxed">
                We expose the hidden crimes of capitalist systems through rigorous documentation and fearless investigation. The truth is our weapon against oppression and exploitation.
              </p>
            </div>

            <div className="revolutionary-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="revolutionary-glow p-3 rounded-full bg-revolutionary-red-600/20 mr-4">
                  <BookOpen className="h-8 w-8 text-revolutionary-red-500" />
                </div>
                <h3 className="text-2xl font-black text-white">**REVOLUTIONARY EDUCATION**</h3>
              </div>
              <p className="text-white/80 font-semibold leading-relaxed">
                Education is liberation. We provide comprehensive resources on socialist theory, history, and practice to build revolutionary consciousness and inspire collective action.
              </p>
            </div>

            <div className="revolutionary-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="revolutionary-glow p-3 rounded-full bg-revolutionary-red-600/20 mr-4">
                  <Globe className="h-8 w-8 text-revolutionary-red-500" />
                </div>
                <h3 className="text-2xl font-black text-white">**GLOBAL SOLIDARITY**</h3>
              </div>
              <p className="text-white/80 font-semibold leading-relaxed">
                Our movement is international. We connect struggles across continents, recognizing that capitalism is a global system requiring a global response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-revolutionary-red-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black revolutionary-text text-center mb-16">
            **WHAT WE DO**
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="revolutionary-card p-6 rounded-xl text-center revolutionary-float">
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">**DOCUMENT CRIMES**</h3>
              <p className="text-white/80 font-semibold text-sm">
                Systematic documentation of capitalist exploitation, environmental destruction, and human rights violations worldwide.
              </p>
            </div>

            <div className="revolutionary-card p-6 rounded-xl text-center revolutionary-float" style={{animationDelay: '0.5s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">**ORGANIZE WORKERS**</h3>
              <p className="text-white/80 font-semibold text-sm">
                Supporting labor movements, unions, and worker cooperatives in their fight for economic justice and workplace democracy.
              </p>
            </div>

            <div className="revolutionary-card p-6 rounded-xl text-center revolutionary-float" style={{animationDelay: '1s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">**EXPOSE INEQUALITY**</h3>
              <p className="text-white/80 font-semibold text-sm">
                Analyzing wealth concentration, corporate power, and the systematic transfer of wealth from workers to capitalists.
              </p>
            </div>

            <div className="revolutionary-card p-6 rounded-xl text-center revolutionary-float" style={{animationDelay: '1.5s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">**DEFEND RIGHTS**</h3>
              <p className="text-white/80 font-semibold text-sm">
                Protecting the rights of workers, marginalized communities, and all those oppressed by capitalist systems.
              </p>
            </div>

            <div className="revolutionary-card p-6 rounded-xl text-center revolutionary-float" style={{animationDelay: '2s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">**INSPIRE ACTION**</h3>
              <p className="text-white/80 font-semibold text-sm">
                Mobilizing communities for direct action, protests, and revolutionary change through education and organization.
              </p>
            </div>

            <div className="revolutionary-card p-6 rounded-xl text-center revolutionary-float" style={{animationDelay: '2.5s'}}>
              <div className="revolutionary-glow p-4 rounded-full bg-revolutionary-red-600/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-revolutionary-red-500" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">**BUILD SOLIDARITY**</h3>
              <p className="text-white/80 font-semibold text-sm">
                Creating networks of mutual aid and support among workers, activists, and revolutionary organizations globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="revolutionary-glow p-6 rounded-full bg-revolutionary-red-600/20 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <Award className="h-12 w-12 text-revolutionary-red-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black revolutionary-text mb-6">
            **JOIN THE REVOLUTION**
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-8 max-w-3xl mx-auto leading-relaxed">
            The fight for economic justice requires every worker, every activist, every person who believes in a better world. Together, we can expose the truth, organize for change, and build a socialist future.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button className="revolutionary-button px-10 py-5 rounded-lg text-xl font-black uppercase tracking-wider">
              **BECOME A COMRADE**
            </button>
            <button className="revolutionary-border bg-transparent px-10 py-5 rounded-lg text-xl font-black uppercase tracking-wider text-white hover:bg-revolutionary-red-600/20 transition-all duration-300">
              **SUPPORT OUR WORK**
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
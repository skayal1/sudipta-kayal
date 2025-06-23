import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Avatar */}
        <div className="mb-12 animate-fade-in-up">
          <div className="w-36 h-36 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-1 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="w-28 h-28 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <img src="https://avatars.githubusercontent.com/u/185060697?v=4" alt="Sudipta Kayal" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in-up delay-200">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Full Stack
            </span>
            <br />
            <span className="text-white">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
           Hi ! I'm Sudipta. . . MCA Graduate specializing in modern web technologies
            <br />
            <span className="text-blue-400 font-semibold">React • Python • PHP • MongoDB</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="https://drive.google.com/file/d/1EMNtxDPolWlyOB8BqNDK_u_Yi-ezWi65/view?usp=sharing
"><button className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-3">
              <Download size={22} />
              <span>Download CV</span>
            </button></a>
            <a href="tel:6296285182"><button className="group px-10 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400 hover:text-white flex items-center space-x-3">
              <PhoneCall size={22} />
              <span>Call For New Project</span>
            </button></a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com/skayal1" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-2">
              <Github size={28} />
            </a>
            <a href="https://in.linkedin.com/in/sudipta-kayal" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-2">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sudipta.kayal1@outlook.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform p-2">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm">Scroll Down</span>
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

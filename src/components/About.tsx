import React from 'react';
import { GraduationCap, Code, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with strong academic background and expertise in modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300"><strong className="text-blue-400">MCA</strong> - Master of Computer Applications</p>
                <p className="text-gray-300"><strong className="text-blue-400">B.Sc</strong> - Bachelor of Science</p>
              </div>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Code className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Specialization</h3>
              </div>
              <p className="text-gray-300">
                Full-stack web development with expertise in both frontend and backend technologies, 
                database design, and modern deployment practices.
              </p>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Target className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
              </div>
              <ul className="text-gray-300 space-y-1">
                <li>• Modern Web Applications</li>
                <li>• E-commerce Solutions</li>
                <li>• Content Management Systems</li>
                <li>• API Development & Integration</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Main Description */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="text-blue-400 mr-3" size={28} />
                Professional Journey
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With a strong foundation in computer science through my MCA and B.Sc degrees, 
                  I've developed expertise across the full technology stack. My journey spans 
                  from crafting responsive user interfaces to designing robust backend systems.
                </p>
                
                <p>
                  I specialize in modern web technologies including React for dynamic frontends, 
                  Python and PHP for server-side development, and both SQL and NoSQL databases 
                  for data management. My experience extends to popular platforms like WordPress 
                  and Shopify, enabling me to deliver comprehensive solutions.
                </p>
                
                <p>
                  What drives me is the continuous evolution of technology and the opportunity 
                  to create impactful digital experiences. I'm always exploring new frameworks, 
                  tools, and methodologies to stay at the forefront of web development.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50">
                <p className="text-blue-400 font-semibold">
                  "Building tomorrow's web experiences with today's cutting-edge technologies"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
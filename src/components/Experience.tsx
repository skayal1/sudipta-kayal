import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'TATA CONSUTANCY SERVICES',
      period: '2021 - 2025',
      location: 'Hybrid',
      description: 'Developed custom WordPress themes and e-commerce solutions. Built RESTful APIs and integrated third-party services for various client projects.',
      technologies: ['PHP', 'WordPress', 'JavaScript', 'MySQL', 'Shopify'],
      achievements: [
        'Delivered 25+ client projects',
        'Reduced development time by 30%',
        'Maintained 99.9% uptime'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Journey through my professional development and key achievements in full-stack development
          </p>
        </div>

        {/* Centered Experience Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Timeline connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center text-blue-400 text-sm">
                          <Calendar size={16} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-300 mb-3">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Achievements */}
                      <div className="space-y-1">
                        <h4 className="text-white font-semibold text-sm mb-2">Key Achievements:</h4>
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
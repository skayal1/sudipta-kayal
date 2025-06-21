import React from 'react';
import { ExternalLink, Code, Database, Globe } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform - Live Project',
    description: 'Full-featured online store with payment integration',
    tech: ['CMS', 'Hostinger', 'MySql'],
    icon: Globe
  },
  {
    title: 'E-Learning(LMS) - Live Project',
    description: 'LMS with learning & MockTest',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    icon: Globe
  },
  {
    title: 'TaskTuner',
    description: 'Day-to-day unitility application(To-Do, Calculator,Converter',
    tech: ['React Native', 'Rapid API', 'Async Storage'],
    icon: Database
  },
    {
    title: 'File Sharing',
    description: 'Supabase for Temporary file transfer',
    tech: ['Supabase', 'Vite', 'React'],
    icon: Globe
  },
    {
    title: 'HealConnect',
    description: 'PWA webapp for online medical checkup application',
    tech: ['React', 'Jitsi API', 'Firebase'],
    icon: Globe
  },
    {
    title: 'Cast- Certificate Generator(Riplica: Backward Classes Welfare Department)',
    description: 'For Caste Certificate Application',
    tech: ['PHP', 'FPDF', 'MySQL'],
    icon: Code
  },
      {
    title: 'Hide PASSWORD',
    description: 'Hide Password in PHOTO',
    tech: ['Python', 'Tinker', 'SQL'],
    icon: Code
  },
    {
    title: 'PHP_CURD',
    description: 'Create-Read-Update-Delete with Dashboard in PHP',
    tech: ['PHP', 'MySQL', 'InfinityFree'],
    icon: Code
  },

];

const FeaturedProject: React.FC = () => (
  <section id="featured-projects" className="py-20 bg-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A selection of my highlighted work, showcasing a range of technologies and solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  <Icon className="text-blue-400" size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs border border-purple-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm group">
                <span>View Project</span>
                <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}

         {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Interested in my work?</h4>
              <p className="text-gray-300 text-sm mb-4">Let's discuss your next project</p>
              <a href='tel:6296285182'><button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Get In Touch
              </button></a>
            </div>
      </div>
    </div>
  </section>
);

export default FeaturedProject;
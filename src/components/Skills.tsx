import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'HTML/CSS', level: 92, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
    { name: 'Bootstrap', level: 80, category: 'Frontend' },
    
    // Backend
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'PHP', level: 82, category: 'Backend' },
    { name: 'ASP.NET', level: 75, category: 'Backend' },
    { name: 'Node.js', level: 78, category: 'Backend' },
    
    // Database
    { name: 'SQL', level: 88, category: 'Database' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'Firebase', level: 80, category: 'Database' },
    
    // Platforms
    { name: 'WordPress', level: 85, category: 'CMS' },
    { name: 'Shopify', level: 78, category: 'E-commerce' },
  ];

  const categories = [
    { name: 'Frontend', icon: Globe, color: 'blue' },
    { name: 'Backend', icon: Server, color: 'purple' },
    { name: 'Database', icon: Database, color: 'green' },
    { name: 'CMS', icon: Code, color: 'orange' },
    { name: 'E-commerce', icon: Smartphone, color: 'pink' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 via-blue-400 to-cyan-400',
        bg: 'bg-blue-500/20',
        border: 'border-blue-400/30',
        text: 'text-blue-400',
        shadow: 'shadow-blue-500/50'
      },
      purple: {
        gradient: 'from-purple-500 via-purple-400 to-pink-400',
        bg: 'bg-purple-500/20',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        shadow: 'shadow-purple-500/50'
      },
      green: {
        gradient: 'from-green-500 via-green-400 to-emerald-400',
        bg: 'bg-green-500/20',
        border: 'border-green-400/30',
        text: 'text-green-400',
        shadow: 'shadow-green-500/50'
      },
      orange: {
        gradient: 'from-orange-500 via-orange-400 to-yellow-400',
        bg: 'bg-orange-500/20',
        border: 'border-orange-400/30',
        text: 'text-orange-400',
        shadow: 'shadow-orange-500/50'
      },
      pink: {
        gradient: 'from-pink-500 via-pink-400 to-rose-400',
        bg: 'bg-pink-500/20',
        border: 'border-pink-400/30',
        text: 'text-pink-400',
        shadow: 'shadow-pink-500/50'
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise across the full technology stack with hands-on experience in modern frameworks and tools
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category.name);
            if (categorySkills.length === 0) return null;

            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={category.name} className="group">
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-gradient-to-r ${colorClasses.gradient} rounded-lg mr-4 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-white">{skill.name}</span>
                        <span className={`font-bold text-lg ${colorClasses.text}`}>{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        {/* Background bar - slim and dark */}
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          {/* Progress fill - shows immediately at full percentage */}
                          <div
                            className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Palette className="text-blue-400 mr-3" size={28} />
              Complete Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => {
                const category = categories.find(cat => cat.name === skill.category);
                const colorClasses = getColorClasses(category?.color || 'blue');
                return (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 ${colorClasses.bg} ${colorClasses.text} rounded-full border ${colorClasses.border} hover:scale-105 transition-all duration-300 text-sm font-medium cursor-default`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Link } from 'react-router-dom';
import { Shield, Cpu, Heart, Zap, ArrowRight, Users, BookOpen, GitBranch } from 'lucide-react';

const ResearchLabs = () => {
  const labs = [
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity & AI Lab',
      description: 'Advanced research in cybersecurity, artificial intelligence, and machine learning technologies to protect India\'s digital infrastructure.',
      color: 'bg-red-500',
      borderColor: 'border-red-200 dark:border-red-800',
      bgColor: 'bg-red-50 dark:bg-red-900/10',
      link: '/research-labs/cybersecurity',
      focus: ['Threat Detection & Prevention', 'AI-driven Security Analytics', 'Quantum Cryptography', 'IoT Security'],
      projects: 12,
      researchers: 25,
      publications: 18
    },
    {
      id: 'hardware',
      icon: Cpu,
      title: 'Open Hardware & Robotics Lab',
      description: 'Open-source hardware development and robotics research focused on practical applications for agriculture, healthcare, and industry.',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200 dark:border-blue-800',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      link: '/research-labs/hardware',
      focus: ['Agricultural Robotics', 'Medical Devices', 'Industrial Automation', 'Open Hardware Platforms'],
      projects: 8,
      researchers: 18,
      publications: 12
    },
    {
      id: 'biotech',
      icon: Heart,
      title: 'BioTech & Health Lab',
      description: 'Biotechnology research and healthcare innovations focusing on precision medicine, drug discovery, and public health solutions.',
      color: 'bg-green-500',
      borderColor: 'border-green-200 dark:border-green-800',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      link: '/research-labs/biotech',
      focus: ['Precision Medicine', 'Drug Discovery', 'Genomics Research', 'Digital Health'],
      projects: 15,
      researchers: 32,
      publications: 24
    },
    {
      id: 'energy',
      icon: Zap,
      title: 'Clean Energy & Space Research Lab',
      description: 'Sustainable energy solutions and space technology research for India\'s energy independence and space exploration goals.',
      color: 'bg-yellow-500',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/10',
      link: '/research-labs/energy',
      focus: ['Solar Technology', 'Energy Storage', 'Satellite Technology', 'Space Exploration'],
      projects: 10,
      researchers: 22,
      publications: 16
    }
  ];

  const stats = [
    { label: 'Total Researchers', value: '97', icon: Users },
    { label: 'Active Projects', value: '45', icon: GitBranch },
    { label: 'Publications', value: '70', icon: BookOpen },
    { label: 'Research Labs', value: '4', icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-8">Research Labs</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Four specialized research divisions working at the forefront of technology and innovation. 
              Our labs foster collaboration between researchers, industry experts, and students to tackle 
              India's most pressing challenges.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-2">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Research Labs Grid */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {labs.map((lab, index) => {
              const Icon = lab.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={lab.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className={`p-8 rounded-2xl border-2 ${lab.borderColor} ${lab.bgColor}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 ${lab.color} rounded-xl flex items-center justify-center mr-4`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {lab.title}
                        </h2>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {lab.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Research Areas:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {lab.focus.map((area, areaIndex) => (
                            <div key={areaIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {area}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="text-center sm:text-left">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {lab.projects}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Active Projects
                          </div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {lab.researchers}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Researchers
                          </div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {lab.publications}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Publications
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={lab.link}
                        className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        Explore {lab.title}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <div className={`w-full h-80 ${lab.bgColor} rounded-2xl flex items-center justify-center border-2 ${lab.borderColor}`}>
                        <Icon className={`h-32 w-32 text-gray-400 dark:text-gray-600`} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title mb-8">Cross-Lab Collaboration</h2>
            <p className="section-subtitle max-w-3xl mx-auto mb-12">
              Our research labs don't work in isolation. We encourage interdisciplinary collaboration 
              that leads to breakthrough innovations at the intersection of different fields.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  AI + Healthcare
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Combining AI Lab's machine learning expertise with BioTech Lab's medical knowledge 
                  to develop intelligent diagnostic systems.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  IoT + Clean Energy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Hardware Lab's IoT solutions integrated with Energy Lab's sustainable systems 
                  for smart grid technologies.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Security + Space
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Cybersecurity Lab protecting satellite communications and space infrastructure 
                  developed by the Energy Lab.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link
                to="/join-us"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Join Our Research Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchLabs;

import { useState } from 'react';
import { Github, ExternalLink, Users, Calendar, Tag, Plus, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = ['All', 'Cybersecurity', 'AI/ML', 'BioTech', 'Hardware', 'Clean Energy', 'Space Tech'];
  const statuses = ['All', 'Active', 'Completed', 'In Development', 'Proposal'];

  const projects = [
    {
      id: 1,
      title: 'Open Source Cybersecurity Framework',
      description: 'A comprehensive framework for threat detection and prevention using AI-driven analytics. This project aims to democratize cybersecurity tools for small and medium enterprises.',
      category: 'Cybersecurity',
      status: 'Active',
      tech: ['Python', 'Machine Learning', 'Docker', 'TensorFlow'],
      contributors: 12,
      startDate: '2024-01-15',
      githubUrl: 'https://github.com/orii-india/cyber-framework',
      demoUrl: 'https://demo.cyber-framework.orii.in',
      lead: 'Dr. Arjun Mehta',
      funding: '$150K'
    },
    {
      id: 2,
      title: 'Agricultural IoT Monitoring System',
      description: 'Smart sensors and IoT devices for real-time crop monitoring, soil analysis, and automated irrigation systems to help farmers optimize yield and reduce water usage.',
      category: 'Hardware',
      status: 'In Development',
      tech: ['Arduino', 'LoRaWAN', 'Node.js', 'React'],
      contributors: 8,
      startDate: '2024-02-01',
      githubUrl: 'https://github.com/orii-india/agri-iot',
      lead: 'Prof. Ravi Kumar',
      funding: '$100K'
    },
    {
      id: 3,
      title: 'Precision Medicine Platform',
      description: 'AI-powered platform for personalized treatment recommendations based on genetic profiles, medical history, and lifestyle factors.',
      category: 'BioTech',
      status: 'Active',
      tech: ['Python', 'Django', 'PostgreSQL', 'React', 'TensorFlow'],
      contributors: 15,
      startDate: '2023-09-15',
      githubUrl: 'https://github.com/orii-india/precision-medicine',
      demoUrl: 'https://precision.orii.in',
      lead: 'Dr. Kavitha Nair',
      funding: '$200K'
    },
    {
      id: 4,
      title: 'Solar Panel Efficiency Optimizer',
      description: 'Machine learning algorithms to optimize solar panel positioning and predict maintenance needs for maximum energy output.',
      category: 'Clean Energy',
      status: 'Completed',
      tech: ['Python', 'Scikit-learn', 'OpenCV', 'Flask'],
      contributors: 6,
      startDate: '2023-06-01',
      githubUrl: 'https://github.com/orii-india/solar-optimizer',
      demoUrl: 'https://solar.orii.in',
      lead: 'Dr. Priya Sharma',
      funding: '$80K'
    },
    {
      id: 5,
      title: 'Quantum Communication Protocol',
      description: 'Research and development of quantum key distribution protocols for ultra-secure communication networks.',
      category: 'Cybersecurity',
      status: 'In Development',
      tech: ['Qiskit', 'Python', 'Quantum Computing'],
      contributors: 4,
      startDate: '2024-03-01',
      githubUrl: 'https://github.com/orii-india/quantum-comm',
      lead: 'Dr. Arjun Mehta',
      funding: '$120K'
    },
    {
      id: 6,
      title: 'Drug Discovery AI Platform',
      description: 'Machine learning platform for accelerating drug discovery by predicting molecular properties and drug-target interactions.',
      category: 'BioTech',
      status: 'Proposal',
      tech: ['PyTorch', 'RDKit', 'MongoDB', 'FastAPI'],
      contributors: 0,
      startDate: null,
      githubUrl: null,
      lead: 'Dr. Kavitha Nair',
      funding: 'Seeking $250K'
    },
    {
      id: 7,
      title: 'Satellite Debris Tracking System',
      description: 'Computer vision and radar system for tracking space debris and predicting collision risks for satellites.',
      category: 'Space Tech',
      status: 'Active',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'C++'],
      contributors: 10,
      startDate: '2023-11-01',
      githubUrl: 'https://github.com/orii-india/debris-tracker',
      lead: 'Dr. Priya Sharma',
      funding: '$180K'
    },
    {
      id: 8,
      title: 'Open Medical Device Platform',
      description: 'Low-cost, open-source medical devices for rural healthcare including pulse oximeters, ECG monitors, and digital stethoscopes.',
      category: 'Hardware',
      status: 'Active',
      tech: ['Arduino', '3D Printing', 'Mobile Apps', 'Bluetooth'],
      contributors: 20,
      startDate: '2023-08-15',
      githubUrl: 'https://github.com/orii-india/open-medical',
      demoUrl: 'https://medical.orii.in',
      lead: 'Prof. Ravi Kumar',
      funding: '$130K'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Proposal':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-8">Research Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our ongoing and completed research projects. All our work is open-source and 
              collaborative, designed to create real-world impact and advance scientific knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <Plus className="mr-2 h-5 w-5" />
                Propose New Project
              </button>
              <button className="btn-secondary">
                View All Repositories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-4">
                Filter by:
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full px-3 py-2 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="block w-full px-3 py-2 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 self-end">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card p-6 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200 dark:border-dark-600 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {project.contributors}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Contributors</div>
                  </div>
                  
                  {project.startDate && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {new Date(project.startDate).getFullYear()}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Started</div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Tag className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {project.funding.includes('$') ? project.funding.split('$')[1] : 'TBD'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Funding</div>
                  </div>
                </div>

                {/* Project Lead */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Led by <span className="font-medium text-gray-900 dark:text-white">{project.lead}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-md transition-colors duration-200"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  )}
                  
                  {!project.githubUrl && !project.demoUrl && (
                    <button className="flex-1 px-4 py-2 bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-md cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Have a Project Idea?</h2>
          <p className="section-subtitle mb-8">
            We welcome new project proposals from researchers, students, and industry partners. 
            Join our collaborative research community and make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              <Plus className="mr-2 h-5 w-5" />
              Propose New Project
            </button>
            <button className="btn-secondary">
              Join Existing Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

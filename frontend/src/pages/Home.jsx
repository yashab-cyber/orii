import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Globe, Shield, Cpu, Heart, Zap, Github, ExternalLink } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "India's First Open Research Institute",
      description: "Pioneering transparent and collaborative research in India with open science principles."
    },
    {
      icon: Users,
      title: "Collaborative, Transparent, Impactful",
      description: "Building a community of researchers, innovators, and thinkers working together for social good."
    },
    {
      icon: Globe,
      title: "Cybersecurity, AI, BioTech, Space & More",
      description: "Multidisciplinary research across cutting-edge fields that shape our future."
    }
  ];

  const researchLabs = [
    {
      icon: Shield,
      title: "Cybersecurity & AI Lab",
      description: "Advanced research in cybersecurity, artificial intelligence, and machine learning.",
      link: "/research-labs/cybersecurity",
      color: "bg-red-500"
    },
    {
      icon: Cpu,
      title: "Open Hardware & Robotics Lab",
      description: "Open-source hardware development and robotics research for practical applications.",
      link: "/research-labs/hardware",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "BioTech & Health Lab",
      description: "Biotechnology research and healthcare innovations for better quality of life.",
      link: "/research-labs/biotech",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Clean Energy & Space Research Lab",
      description: "Sustainable energy solutions and space technology research for tomorrow.",
      link: "/research-labs/energy",
      color: "bg-yellow-500"
    }
  ];

  const featuredProject = {
    title: "Open Source Cybersecurity Framework",
    description: "A comprehensive open-source framework for cybersecurity threat detection and prevention, developed collaboratively by our research community.",
    tech: ["Python", "Machine Learning", "Cybersecurity"],
    status: "Active Development",
    githubUrl: "https://github.com/orii-india/cyber-framework"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Open Research Institute
              <br />
              <span className="text-secondary-400">of India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Open Knowledge. Open Future.
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-4xl mx-auto">
              India's first open research institute dedicated to collaborative, transparent, and impactful research across cybersecurity, AI, biotechnology, and space sciences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join-us"
                className="inline-flex items-center px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-black font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Join as Researcher
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why ORII?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We believe in the power of open science and collaborative research to solve India's most pressing challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Labs Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Research Labs</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Four specialized research divisions working on cutting-edge technologies that will shape India's future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchLabs.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${lab.color} rounded-lg mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {lab.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {lab.description}
                  </p>
                  <Link
                    to={lab.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Project</h2>
            <p className="section-subtitle">
              Highlighting our latest open-source research project making real-world impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm font-medium rounded-full">
                      {featuredProject.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                    <Link
                      to="/projects"
                      className="inline-flex items-center px-6 py-3 btn-secondary"
                    >
                      View All Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Shape India's Research Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community of researchers, innovators, and visionaries working towards an open and collaborative future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join-us"
              className="inline-flex items-center px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-black font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Join ORII Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/support-us"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold rounded-lg transition-colors duration-200"
            >
              Support Our Mission
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

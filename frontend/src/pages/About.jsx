import { Target, Eye, Users, Lightbulb, Globe, Heart } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Dr. Priya Sharma",
      role: "Co-Founder & Director",
      bio: "Former ISRO scientist with 15+ years in space technology and open science advocacy.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a1b2f6?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/priya-sharma"
    },
    {
      name: "Prof. Arjun Mehta",
      role: "Co-Founder & CTO",
      bio: "IIT alumnus, former Microsoft Research scientist specializing in AI and cybersecurity.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/arjun-mehta"
    },
    {
      name: "Dr. Kavitha Nair",
      role: "Co-Founder & Head of BioTech",
      bio: "Biotechnology researcher with expertise in precision medicine and open healthcare.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/kavitha-nair"
    }
  ];

  const advisors = [
    {
      name: "Dr. A.P.J. Abdul Kalam Institute Representative",
      role: "Strategic Advisor",
      organization: "Former DRDO & ISRO"
    },
    {
      name: "Prof. Raghuram Rajan",
      role: "Economic Policy Advisor",
      organization: "Former RBI Governor"
    },
    {
      name: "Dr. Kiran Mazumdar-Shaw",
      role: "Biotechnology Advisor",
      organization: "Biocon Founder"
    },
    {
      name: "Mr. Nandan Nilekani",
      role: "Technology Advisor",
      organization: "Infosys Co-founder"
    }
  ];

  const values = [
    {
      icon: Globe,
      title: "Open Science",
      description: "We believe in making research accessible, transparent, and collaborative for the benefit of humanity."
    },
    {
      icon: Users,
      title: "Inclusive Innovation",
      description: "Our research addresses diverse needs and includes voices from all sections of Indian society."
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every project we undertake aims to create measurable positive impact on society."
    },
    {
      icon: Heart,
      title: "Ethical Research",
      description: "We maintain the highest ethical standards in all our research endeavors."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We foster creativity and breakthrough thinking to solve complex challenges."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Our processes, findings, and decision-making are open and accountable."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-8">About ORII</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Open Research Institute of India (ORII) is India's first open research institute, 
              founded on the principles of collaborative science, transparency, and social impact. 
              We're building a new model for research that breaks down traditional barriers and 
              creates knowledge for the common good.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To establish India as a global leader in open science and collaborative research, 
                creating a future where knowledge is freely shared, innovation is inclusive, 
                and research directly benefits society. We envision a research ecosystem that 
                transcends institutional boundaries and democratizes access to cutting-edge knowledge.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h2 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To conduct world-class research in critical areas like cybersecurity, AI, 
                biotechnology, and sustainable energy while maintaining complete transparency 
                and openness. We aim to bridge the gap between academic research and practical 
                applications, fostering innovation that addresses India's most pressing challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ORII Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why ORII?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Traditional research institutions often operate in silos. We're changing that by creating 
              an open, collaborative environment where the best ideas can flourish regardless of their origin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">The Problem</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Research locked behind paywalls and institutional barriers</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Limited collaboration between academia and industry</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Slow translation of research into practical solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Lack of transparency in research processes and funding</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">All research published open-access with transparent methodology</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Collaborative platform connecting researchers globally</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Direct focus on practical applications and societal impact</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">Community-driven research priorities and open governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <Icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Founders</h2>
            <p className="section-subtitle">
              Visionary leaders committed to transforming India's research landscape through open science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Advisory Board</h2>
            <p className="section-subtitle">
              Distinguished leaders providing strategic guidance and expertise to shape ORII's future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {advisor.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {advisor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {advisor.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

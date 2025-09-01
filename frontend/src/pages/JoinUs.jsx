import { useState } from 'react';
import { User, Mail, Building, Github, Linkedin, MessageSquare } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    researchArea: '',
    github: '',
    linkedin: '',
    whyJoin: '',
    experience: '',
    availability: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will review your application and get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-8">Join ORII</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Become part of India's first open research institute. Join our community of researchers, 
              innovators, and visionaries working to shape the future through collaborative science.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Research Membership Application
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below to apply for membership at ORII. We welcome researchers 
                from all backgrounds and experience levels.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Building className="inline h-4 w-4 mr-1" />
                  Institution/Organization
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                  placeholder="University, company, or organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Area of Research Interest *
                </label>
                <select
                  name="researchArea"
                  required
                  value={formData.researchArea}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select your primary research area</option>
                  <option value="cybersecurity">Cybersecurity & AI</option>
                  <option value="hardware">Open Hardware & Robotics</option>
                  <option value="biotech">BioTech & Health</option>
                  <option value="energy">Clean Energy & Space</option>
                  <option value="interdisciplinary">Interdisciplinary Research</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Github className="inline h-4 w-4 mr-1" />
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                    placeholder="https://github.com/yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Linkedin className="inline h-4 w-4 mr-1" />
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                    placeholder="https://linkedin.com/in/yourusername"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Research Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select your experience level</option>
                  <option value="student">Student/Beginner</option>
                  <option value="junior">1-3 years experience</option>
                  <option value="mid">4-8 years experience</option>
                  <option value="senior">8+ years experience</option>
                  <option value="expert">Domain expert/Professor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                >
                  <option value="">How much time can you dedicate?</option>
                  <option value="part-time">Part-time (5-10 hours/week)</option>
                  <option value="regular">Regular contributor (10-20 hours/week)</option>
                  <option value="full-time">Full-time researcher</option>
                  <option value="occasional">Occasional contributor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  Why do you want to join ORII? *
                </label>
                <textarea
                  name="whyJoin"
                  required
                  value={formData.whyJoin}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                  placeholder="Tell us about your motivation to join ORII and how you can contribute to our mission..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Membership Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Open Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Work with researchers globally on cutting-edge projects
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Research Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access to funding, resources, and mentorship opportunities
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Publication Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Co-author papers and contribute to open science publications
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Network Building
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Connect with industry experts, academics, and innovators
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

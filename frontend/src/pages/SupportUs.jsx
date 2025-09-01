import { Heart, Users, Building, Coins, Gift, CreditCard, Banknote, ArrowRight } from 'lucide-react';

const SupportUs = () => {
  const supportTiers = [
    {
      name: 'Individual Supporter',
      amount: '₹500/month',
      color: 'bg-blue-500',
      benefits: [
        'Monthly research updates',
        'Access to ORII webinars',
        'Recognition on website',
        'Early access to publications'
      ]
    },
    {
      name: 'Research Patron',
      amount: '₹2,000/month',
      color: 'bg-green-500',
      benefits: [
        'All Individual Supporter benefits',
        'Quarterly video calls with researchers',
        'Project progress reports',
        'Input on research priorities'
      ]
    },
    {
      name: 'Institutional Partner',
      amount: '₹25,000/month',
      color: 'bg-purple-500',
      benefits: [
        'All Research Patron benefits',
        'Dedicated researcher collaboration',
        'Joint publication opportunities',
        'Logo placement on materials',
        'Advisory board participation'
      ]
    },
    {
      name: 'Founding Sponsor',
      amount: '₹1,00,000/month',
      color: 'bg-yellow-500',
      benefits: [
        'All Institutional Partner benefits',
        'Lab naming rights',
        'Direct project funding input',
        'Annual recognition event',
        'Strategic partnership meetings'
      ]
    }
  ];

  const impactAreas = [
    {
      icon: Users,
      title: 'Researcher Support',
      description: 'Fund stipends for researchers from underrepresented backgrounds',
      funding: 'Goal: ₹50 Lakh/year'
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'Build state-of-the-art research facilities and equipment',
      funding: 'Goal: ₹2 Crore'
    },
    {
      icon: Gift,
      title: 'Open Access Publishing',
      description: 'Make all research freely available to the global community',
      funding: 'Goal: ₹25 Lakh/year'
    },
    {
      icon: Coins,
      title: 'Community Programs',
      description: 'Workshops, conferences, and outreach initiatives',
      funding: 'Goal: ₹15 Lakh/year'
    }
  ];

  const paymentMethods = [
    {
      name: 'UPI',
      description: 'Quick payment via UPI',
      icon: CreditCard,
      id: 'orii@paytm'
    },
    {
      name: 'Bank Transfer',
      description: 'Direct bank transfer (NEFT/RTGS)',
      icon: Banknote,
      details: 'Account details will be provided'
    },
    {
      name: 'Online Payment',
      description: 'Credit/Debit card payments',
      icon: CreditCard,
      note: 'Razorpay integration coming soon'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-8">Support ORII</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Help us build India's first open research institute. Your support enables us to conduct 
              world-class research, support researchers, and make scientific knowledge freely accessible to all.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-dark-800 rounded-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">97+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Researchers</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">45+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Projects</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">70+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Publications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Where Your Support Goes</h2>
            <p className="section-subtitle">
              Every contribution directly supports open research and innovation in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="card p-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {area.description}
                      </p>
                      <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {area.funding}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Support Tiers</h2>
            <p className="section-subtitle">
              Choose a support level that works for you and join our community of supporters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTiers.map((tier, index) => (
              <div key={index} className="card p-6 h-full">
                <div className={`w-full h-2 ${tier.color} rounded-t-lg mb-6`}></div>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {tier.amount}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">
                  Choose This Tier
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Payment Methods</h2>
            <p className="section-subtitle">
              Multiple convenient ways to support ORII's mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {method.description}
                  </p>
                  {method.id && (
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-3 text-sm font-mono text-gray-800 dark:text-gray-200">
                      {method.id}
                    </div>
                  )}
                  {method.details && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {method.details}
                    </div>
                  )}
                  {method.note && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {method.note}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Corporate Partnerships</h2>
            <p className="section-subtitle">
              Partner with ORII to drive innovation and support open research in India.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Why Partner with ORII?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Access to cutting-edge research and talent pipeline
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Joint research opportunities and technology transfer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Brand association with open science and innovation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        CSR compliance through educational and research support
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
                    <Building className="h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Ready to Partner?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                      Let's discuss how your organization can support and benefit from 
                      open research initiatives.
                    </p>
                    <button className="btn-primary">
                      Contact Partnership Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
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
            Join the Open Research Movement
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your support today helps build a more open, collaborative, and innovative future for Indian research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-black font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Heart className="mr-2 h-5 w-5" />
              Start Supporting ORII
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold rounded-lg transition-colors duration-200">
              Download Partnership Info
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportUs;

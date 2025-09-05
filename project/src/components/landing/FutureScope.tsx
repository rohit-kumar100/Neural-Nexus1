import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Brain, Target, Zap } from 'lucide-react';

const FutureScope: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'PWA Support',
      description: 'Progressive Web App for seamless mobile experience',
      status: 'Coming Soon'
    },
    {
      icon: Brain,
      title: 'AI Certificate Verification',
      description: 'Scan and validate certificate authenticity with AI',
      status: 'In Development'
    },
    {
      icon: Target,
      title: 'Smart Course Recommendations',
      description: 'AI-driven course suggestions based on skills and goals',
      status: 'Beta'
    },
    {
      icon: Zap,
      title: 'Recruiter Smart Matching',
      description: 'AI-powered candidate recommendations for companies',
      status: 'Planned'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Future Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting features and enhancements coming to MyWork platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  feature.status === 'Beta' ? 'bg-green-100 text-green-700' :
                  feature.status === 'In Development' ? 'bg-blue-100 text-blue-700' :
                  feature.status === 'Coming Soon' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {feature.status}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
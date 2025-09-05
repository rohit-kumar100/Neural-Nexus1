import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';
import Hero from './Hero';
import DemoAccounts from '../common/DemoAccounts';
import FutureScope from './FutureScope';
import LoginForm from '../auth/LoginForm';

const LandingPage: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLoginForm(true)}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 transition-colors shadow-lg"
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <Hero />

      {/* Demo Accounts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoAccounts />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MyWork?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive platform designed specifically for higher education institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Achievements',
                description: 'Digital certificates and achievements verified by faculty and administration',
                gradient: 'from-blue-500 to-emerald-500'
              },
              {
                title: 'Alumni Network',
                description: 'Connect with successful alumni for mentorship and career guidance',
                gradient: 'from-emerald-500 to-blue-500'
              },
              {
                title: 'Recruiter Access',
                description: 'Verified student profiles accessible to approved recruiters and companies',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Parent Dashboard',
                description: 'Parents can track their child\'s academic progress and achievements',
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                title: 'Faculty Management',
                description: 'Streamlined approval process for certificates and student activities',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                title: 'Admin Reports',
                description: 'Generate comprehensive reports for NAAC, NIRF, and AICTE compliance',
                gradient: 'from-red-500 to-purple-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <FutureScope />

      {/* Login Form Modal */}
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
    </div>
  );
};

export default LandingPage;
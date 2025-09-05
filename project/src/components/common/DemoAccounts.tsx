import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Shield, Heart, Trophy, Briefcase } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';

const DemoAccounts: React.FC = () => {
  const { login } = useAuth();

  const accounts = [
    { 
      role: 'student' as UserRole, 
      email: 'student@university.edu', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      description: 'View certificates, connect with alumni'
    },
    { 
      role: 'faculty' as UserRole, 
      email: 'faculty@university.edu', 
      icon: UserCheck, 
      color: 'from-emerald-500 to-emerald-600',
      description: 'Approve certificates, mentor students'
    },
    { 
      role: 'admin' as UserRole, 
      email: 'admin@university.edu', 
      icon: Shield, 
      color: 'from-purple-500 to-purple-600',
      description: 'Generate reports, manage access'
    },
    { 
      role: 'parent' as UserRole, 
      email: 'parent@university.edu', 
      icon: Heart, 
      color: 'from-pink-500 to-pink-600',
      description: 'Track child progress, view activities'
    },
    { 
      role: 'alumni' as UserRole, 
      email: 'alumni@university.edu', 
      icon: Trophy, 
      color: 'from-yellow-500 to-yellow-600',
      description: 'Network with students, share experience'
    },
    { 
      role: 'recruiter' as UserRole, 
      email: 'recruiter@company.com', 
      icon: Briefcase, 
      color: 'from-indigo-500 to-indigo-600',
      description: 'Find talent, offer opportunities'
    },
  ];

  const handleDemoLogin = (email: string, role: UserRole) => {
    login(email, role);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Try Demo Accounts</h3>
        <p className="text-gray-600">Click any account to explore role-specific features</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account, index) => {
          const IconComponent = account.icon;
          return (
            <motion.button
              key={account.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleDemoLogin(account.email, account.role)}
              className="group p-6 rounded-xl border-2 border-gray-200 hover:border-transparent bg-gradient-to-br hover:from-gray-50 hover:to-white hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 capitalize mb-2">{account.role}</h4>
              <p className="text-sm text-gray-600 mb-3">{account.description}</p>
              <p className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-block">
                {account.email}
              </p>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DemoAccounts;
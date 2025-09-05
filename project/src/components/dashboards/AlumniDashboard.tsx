import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Building, 
  MessageCircle, 
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Code,
  Mail,
  Phone
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockCompanies } from '../../data/mockData';

const AlumniDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('network');

  const alumniProfiles = [
    {
      id: '1',
      name: 'Sarah Williams',
      company: 'Google',
      position: 'Senior Software Engineer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      graduationYear: 2020,
      location: 'Mountain View, CA',
      leetcode: 'sarah_dev',
      github: 'sarah-williams',
      email: 'sarah.w@gmail.com'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'Microsoft',
      position: 'Principal Engineer',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      graduationYear: 2019,
      location: 'Seattle, WA',
      leetcode: 'mchen_algo',
      github: 'michael-chen',
      email: 'mchen@outlook.com'
    },
    {
      id: '3',
      name: 'Priya Sharma',
      company: 'Amazon',
      position: 'Staff Software Engineer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      graduationYear: 2018,
      location: 'Bangalore, India',
      leetcode: 'priya_codes',
      github: 'priya-sharma',
      email: 'priya.sharma@amazon.com'
    }
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alumni Dashboard</h1>
          <p className="text-gray-600">Connect with fellow alumni and guide the next generation</p>
        </motion.div>

        {/* Alumni Profile Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border p-6 mb-8"
        >
          <div className="flex items-start space-x-6">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                <div className="flex items-center space-x-1 text-yellow-600">
                  <Trophy className="w-5 h-5" />
                  <span className="text-sm font-medium">Alumni</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{user?.position} at {user?.company}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Class of 2021</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Building className="w-4 h-4" />
                  <span>{user?.department}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-gray-600">Alumni Connections</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">23</p>
                <p className="text-sm text-gray-600">Students Mentored</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-sm text-gray-600">Referrals Given</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">4.8</p>
                <p className="text-sm text-gray-600">Mentor Rating</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'network', name: 'Alumni Network', icon: Users },
              { id: 'companies', name: 'Companies', icon: Building },
              { id: 'mentoring', name: 'Mentoring', icon: MessageCircle }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Alumni Network Tab */}
        {activeTab === 'network' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumniProfiles.map((alumni, index) => (
                <motion.div
                  key={alumni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={alumni.avatar}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{alumni.name}</h4>
                      <p className="text-sm text-gray-600">{alumni.position}</p>
                      <p className="text-sm text-blue-600 font-medium">{alumni.company}</p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{alumni.location}</span>
                        <span>•</span>
                        <span>Class of {alumni.graduationYear}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1 text-xs bg-gray-100 px-2 py-1 rounded">
                      <Code className="w-3 h-3" />
                      <span>{alumni.leetcode}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs bg-gray-100 px-2 py-1 rounded">
                      <Github className="w-3 h-3" />
                      <span>{alumni.github}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>Connect</span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCompanies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedCompany(company)}
                  className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {company.name}
                      </h4>
                      <p className="text-sm text-gray-600">{company.alumniCount} alumni</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm">
                      <Users className="w-4 h-4" />
                      <span>View Alumni</span>
                    </button>
                    <button className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      <ExternalLink className="w-4 h-4" />
                      <span>Company Page</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mentoring Tab */}
        {activeTab === 'mentoring' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Mentorships</h3>
              <div className="space-y-4">
                {[
                  { name: 'Alex Johnson', year: '3rd Year', subject: 'Career Guidance' },
                  { name: 'Maria Garcia', year: '4th Year', subject: 'Interview Prep' },
                  { name: 'David Kumar', year: '2nd Year', subject: 'Technical Skills' }
                ].map((student, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.year} • {student.subject}</p>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentoring Impact</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">23</div>
                  <div className="text-sm text-gray-600">Students Mentored</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600">18</div>
                  <div className="text-sm text-gray-600">Successfully Placed</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">4.8</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AlumniDashboard;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Download, 
  Eye, 
  EyeOff, 
  Users, 
  MessageCircle,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockCertificates, mockCompanies } from '../../data/mockData';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [showSensitiveInfo, setShowSensitiveInfo] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'rejected':
        return <X className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Manage your achievements and connect with your network</p>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'profile', name: 'Profile', icon: Users },
              { id: 'certificates', name: 'Certificates', icon: Award },
              { id: 'alumni', name: 'Alumni Network', icon: Building }
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

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="text-center">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                  <p className="text-gray-600 mb-2">{user?.department}</p>
                  <p className="text-sm text-gray-500">Year {user?.year} • Section {user?.section}</p>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Sensitive Information</span>
                    <button
                      onClick={() => setShowSensitiveInfo(!showSensitiveInfo)}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                    >
                      {showSensitiveInfo ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      <span className="text-xs">{showSensitiveInfo ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                  
                  {showSensitiveInfo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2 text-sm"
                    >
                      <div className="flex justify-between">
                        <span className="text-gray-600">CGPA:</span>
                        <span className="font-medium">{user?.cgpa}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">{user?.phone}</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Portfolio PDF</span>
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Mentor</label>
                    <p className="text-gray-900">{user?.mentor}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Coordinator</label>
                    <p className="text-gray-900">{user?.coordinator}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-600">Total Certificates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-sm text-gray-600">Approved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">4</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">My Certificates & Achievements</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add New Certificate
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(cert.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mb-4">{cert.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(cert.date).toLocaleDateString()}</span>
                    </span>
                    <span className="capitalize bg-gray-100 px-2 py-1 rounded">{cert.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Alumni Network Tab */}
        {activeTab === 'alumni' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect with Alumni</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCompanies.map((company, index) => (
                  <motion.div
                    key={company.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
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
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">View Alumni</span>
                      </button>
                      <button className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">Chat</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
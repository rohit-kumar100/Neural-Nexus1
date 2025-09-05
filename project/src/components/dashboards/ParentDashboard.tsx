import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  User, 
  Award, 
  Calendar, 
  Phone, 
  Mail,
  MapPin,
  TrendingUp,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockCertificates } from '../../data/mockData';

const ParentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock child data (in real app, this would be fetched based on parent's relationship)
  const childData = {
    name: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'Computer Science',
    year: 3,
    section: 'A',
    cgpa: 8.5,
    attendance: 92,
    mentor: 'Dr. Sarah Wilson',
    coordinator: 'Prof. Michael Davis',
    phone: '+1-234-567-8900',
    email: 'alex.johnson@university.edu'
  };

  const approvedCertificates = mockCertificates.filter(cert => cert.status === 'approved');
  const pendingCertificates = mockCertificates.filter(cert => cert.status === 'pending');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Parent Dashboard</h1>
          <p className="text-gray-600">Monitor your child's academic progress and achievements</p>
        </motion.div>

        {/* Child Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border p-6 mb-8"
        >
          <div className="flex items-start space-x-6">
            <img
              src={childData.avatar}
              alt={childData.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{childData.name}</h2>
                <div className="flex items-center space-x-1 text-pink-600">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">My Child</span>
                </div>
              </div>
              <p className="text-gray-600 mb-1">{childData.department} • Year {childData.year} • Section {childData.section}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>{childData.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>{childData.phone}</span>
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
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{childData.cgpa}</p>
                <p className="text-sm text-gray-600">Current CGPA</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{childData.attendance}%</p>
                <p className="text-sm text-gray-600">Attendance</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{approvedCertificates.length}</p>
                <p className="text-sm text-gray-600">Approved Certificates</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{pendingCertificates.length}</p>
                <p className="text-sm text-gray-600">Pending Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Academic Support Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Support Team</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{childData.mentor}</p>
                  <p className="text-sm text-gray-600">Academic Mentor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{childData.coordinator}</p>
                  <p className="text-sm text-gray-600">Course Coordinator</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support Team
            </button>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {mockCertificates.slice(0, 4).map((cert, index) => (
                <div
                  key={cert.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">
                        {new Date(cert.date).toLocaleDateString()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'approved' ? 'bg-green-100 text-green-800' :
                        cert.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Progress Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-xl shadow-sm border p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-600">{childData.cgpa}</span>
              </div>
              <p className="font-medium text-gray-900">CGPA</p>
              <p className="text-sm text-gray-600">Out of 10.0</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-emerald-600">{childData.attendance}%</span>
              </div>
              <p className="font-medium text-gray-900">Attendance</p>
              <p className="text-sm text-gray-600">This semester</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-purple-600">{mockCertificates.length}</span>
              </div>
              <p className="font-medium text-gray-900">Certificates</p>
              <p className="text-sm text-gray-600">Total earned</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParentDashboard;
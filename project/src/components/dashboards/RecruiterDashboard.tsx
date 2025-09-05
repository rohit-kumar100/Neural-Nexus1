import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Filter, 
  Search, 
  Eye,
  Mail,
  MapPin,
  Calendar,
  Award,
  Download,
  Star,
  Building
} from 'lucide-react';

const RecruiterDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [filterBranch, setFilterBranch] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  const mockStudents = [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      branch: 'Computer Science',
      year: 3,
      cgpa: 8.5,
      skills: ['React', 'Node.js', 'Python', 'Machine Learning'],
      certifications: 5,
      projects: 8,
      location: 'California, USA',
      email: 'alex.johnson@university.edu',
      phone: '+1-234-567-8900'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      branch: 'Information Technology',
      year: 4,
      cgpa: 9.2,
      skills: ['Java', 'Spring Boot', 'AWS', 'Docker'],
      certifications: 7,
      projects: 12,
      location: 'Mumbai, India',
      email: 'priya.sharma@university.edu',
      phone: '+91-98765-43210'
    },
    {
      id: '3',
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      branch: 'Computer Science',
      year: 4,
      cgpa: 8.8,
      skills: ['C++', 'Data Structures', 'System Design', 'Kubernetes'],
      certifications: 6,
      projects: 10,
      location: 'New York, USA',
      email: 'michael.chen@university.edu',
      phone: '+1-987-654-3210'
    }
  ];

  const filteredStudents = mockStudents.filter(student => {
    const branchMatch = filterBranch === 'all' || student.branch.toLowerCase().includes(filterBranch.toLowerCase());
    const yearMatch = filterYear === 'all' || student.year.toString() === filterYear;
    return branchMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Dashboard</h1>
          <p className="text-gray-600">Find and connect with verified student talent</p>
        </motion.div>

        {/* Access Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-emerald-50 border-l-4 border-emerald-400 p-4 mb-8"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-emerald-700">
                <strong>Access Approved:</strong> You have been granted access to view verified student profiles by the university administration.
              </p>
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
                <p className="text-2xl font-bold text-gray-900">{filteredStudents.length}</p>
                <p className="text-sm text-gray-600">Available Students</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-gray-600">Verified Profiles</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Active Opportunities</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">34</p>
                <p className="text-sm text-gray-600">Shortlisted</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search students by name, skills, or location..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <select
                value={filterBranch}
                onChange={(e) => setFilterBranch(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Branches</option>
                <option value="computer science">Computer Science</option>
                <option value="information technology">Information Technology</option>
                <option value="electronics">Electronics</option>
              </select>
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Years</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Student Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              {/* Student Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.branch}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Year {student.year}
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                      CGPA: {student.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Key Skills</h5>
                <div className="flex flex-wrap gap-1">
                  {student.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{student.certifications}</div>
                  <div className="text-xs text-gray-600">Certificates</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{student.projects}</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{student.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{student.email}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <Eye className="w-4 h-4" />
                  <span>View Profile</span>
                </button>
                <button className="flex items-center justify-center space-x-1 bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </button>
                <button className="flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Job Opportunities Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-white rounded-xl shadow-sm border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Post Job Opportunities</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create New Opportunity
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Internships</h4>
                  <p className="text-sm text-gray-600">Summer 2024</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Offer internship opportunities to talented students</p>
              <button className="w-full bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                Post Internship
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Full-time Roles</h4>
                  <p className="text-sm text-gray-600">Campus Placement</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Recruit final year students for full-time positions</p>
              <button className="w-full bg-emerald-50 text-emerald-600 px-3 py-2 rounded-lg hover:bg-emerald-100 transition-colors text-sm">
                Post Job
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Campus Drive</h4>
                  <p className="text-sm text-gray-600">Bulk Hiring</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Schedule on-campus recruitment drives</p>
              <button className="w-full bg-purple-50 text-purple-600 px-3 py-2 rounded-lg hover:bg-purple-100 transition-colors text-sm">
                Schedule Drive
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
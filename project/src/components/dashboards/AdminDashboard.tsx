import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Bell, 
  Users, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Eye,
  Download
} from 'lucide-react';
import { mockNotifications } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleApproveAccess = (notificationId: string) => {
    console.log('Approved access for notification:', notificationId);
  };

  const handleRejectAccess = (notificationId: string) => {
    console.log('Rejected access for notification:', notificationId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage university operations and generate reports</p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">1,245</p>
                <p className="text-sm text-gray-600">Total Students</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">892</p>
                <p className="text-sm text-gray-600">Verified Certificates</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">23</p>
                <p className="text-sm text-gray-600">Pending Requests</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-gray-600">Alumni Placed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: Shield },
              { id: 'notifications', name: 'Notifications', icon: Bell },
              { id: 'reports', name: 'Reports', icon: FileText }
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'New certificate submitted', user: 'Alex Johnson', time: '2 hours ago' },
                  { action: 'Alumni profile updated', user: 'Emily Chen', time: '4 hours ago' },
                  { action: 'Recruiter access granted', user: 'Microsoft', time: '1 day ago' },
                  { action: 'NAAC report generated', user: 'System', time: '2 days ago' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900">Generate NAAC Report</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-900">Export Student Data</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-900">Manage User Roles</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-900">Send Announcements</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Requests</h3>
              <div className="space-y-4">
                {mockNotifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      notification.type === 'request' ? 'border-orange-500 bg-orange-50' :
                      notification.type === 'approval' ? 'border-blue-500 bg-blue-50' :
                      'border-gray-500 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          notification.type === 'request' ? 'bg-orange-100' :
                          notification.type === 'approval' ? 'bg-blue-100' :
                          'bg-gray-100'
                        }`}>
                          {notification.type === 'request' ? (
                            <AlertTriangle className="w-4 h-4 text-orange-600" />
                          ) : notification.type === 'approval' ? (
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Bell className="w-4 h-4 text-gray-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-600">
                            {new Date(notification.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      {notification.type === 'request' && (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleApproveAccess(notification.id)}
                            className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => handleRejectAccess(notification.id)}
                            className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors text-sm"
                          >
                            <AlertTriangle className="w-3 h-3" />
                            <span>Reject</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: 'NAAC Report', description: 'National Assessment and Accreditation Council report', color: 'from-blue-500 to-blue-600' },
              { name: 'NIRF Report', description: 'National Institutional Ranking Framework report', color: 'from-emerald-500 to-emerald-600' },
              { name: 'AICTE Report', description: 'All India Council for Technical Education report', color: 'from-purple-500 to-purple-600' },
              { name: 'Placement Report', description: 'Student placement and career outcomes', color: 'from-orange-500 to-orange-600' },
              { name: 'Alumni Report', description: 'Alumni network and achievements', color: 'from-pink-500 to-pink-600' },
              { name: 'Certificate Analytics', description: 'Certificate verification and trends', color: 'from-indigo-500 to-indigo-600' }
            ].map((report, index) => (
              <motion.div
                key={report.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${report.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{report.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
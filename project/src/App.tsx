import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/common/Header';
import LandingPage from './components/landing/LandingPage';
import StudentDashboard from './components/dashboards/StudentDashboard';
import FacultyDashboard from './components/dashboards/FacultyDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import ParentDashboard from './components/dashboards/ParentDashboard';
import AlumniDashboard from './components/dashboards/AlumniDashboard';
import RecruiterDashboard from './components/dashboards/RecruiterDashboard';
import ProtectedRoute from './components/layout/ProtectedRoute';

const AppContent: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  const getDashboardComponent = () => {
    switch (user?.role) {
      case 'student':
        return <StudentDashboard />;
      case 'faculty':
        return <FacultyDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'parent':
        return <ParentDashboard />;
      case 'alumni':
        return <AlumniDashboard />;
      case 'recruiter':
        return <RecruiterDashboard />;
      default:
        return <Navigate to="/" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {getDashboardComponent()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
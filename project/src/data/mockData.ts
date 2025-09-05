import { User, Certificate, Company, Notification } from '../types';

export const demoUsers: User[] = [
  {
    id: '1',
    email: 'student@university.edu',
    name: 'Alex Johnson',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'Computer Science',
    year: 3,
    section: 'A',
    cgpa: 8.5,
    phone: '+1-234-567-8900',
    mentor: 'Dr. Sarah Wilson',
    coordinator: 'Prof. Michael Davis'
  },
  {
    id: '2',
    email: 'faculty@university.edu',
    name: 'Dr. Sarah Wilson',
    role: 'faculty',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'Computer Science'
  },
  {
    id: '3',
    email: 'admin@university.edu',
    name: 'Prof. Michael Davis',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    department: 'Administration'
  },
  {
    id: '4',
    email: 'parent@university.edu',
    name: 'Robert Johnson',
    role: 'parent',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    email: 'alumni@university.edu',
    name: 'Emily Chen',
    role: 'alumni',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Google',
    position: 'Software Engineer',
    department: 'Computer Science'
  },
  {
    id: '6',
    email: 'recruiter@company.com',
    name: 'David Martinez',
    role: 'recruiter',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Microsoft'
  }
];

export const mockCertificates: Certificate[] = [
  {
    id: '1',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024-01-15',
    status: 'approved',
    type: 'certificate',
    description: 'Cloud computing fundamentals and AWS services overview'
  },
  {
    id: '2',
    title: 'React Development Internship',
    issuer: 'TechCorp Solutions',
    date: '2023-12-20',
    status: 'pending',
    type: 'internship',
    description: 'Full-stack web development using React and Node.js'
  },
  {
    id: '3',
    title: 'Machine Learning Workshop',
    issuer: 'IEEE Student Branch',
    date: '2024-02-10',
    status: 'approved',
    type: 'workshop',
    description: 'Introduction to ML algorithms and practical applications'
  },
  {
    id: '4',
    title: 'Community Service Volunteering',
    issuer: 'Local NGO',
    date: '2023-11-30',
    status: 'approved',
    type: 'volunteering',
    description: 'Teaching programming to underprivileged children'
  },
  {
    id: '5',
    title: 'Google Cloud Associate',
    issuer: 'Google Cloud',
    date: '2024-01-25',
    status: 'pending',
    type: 'certificate',
    description: 'Google Cloud Platform services and solutions'
  }
];

export const mockCompanies: Company[] = [
  { id: '1', name: 'Google', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100', alumniCount: 45 },
  { id: '2', name: 'Microsoft', logo: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=100', alumniCount: 38 },
  { id: '3', name: 'Amazon', logo: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=100', alumniCount: 52 },
  { id: '4', name: 'Flipkart', logo: 'https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=100', alumniCount: 31 },
  { id: '5', name: 'TCS', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100', alumniCount: 89 },
  { id: '6', name: 'Infosys', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100', alumniCount: 67 }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'TCS requests access to student data',
    type: 'request',
    timestamp: '2024-01-15T10:30:00Z',
    read: false
  },
  {
    id: '2',
    message: 'New certificate submitted by Alex Johnson',
    type: 'approval',
    timestamp: '2024-01-15T09:15:00Z',
    read: false
  },
  {
    id: '3',
    message: 'NAAC report generation completed',
    type: 'info',
    timestamp: '2024-01-14T16:45:00Z',
    read: true
  }
];
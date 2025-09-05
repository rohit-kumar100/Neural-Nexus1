export type UserRole = 'student' | 'faculty' | 'admin' | 'parent' | 'alumni' | 'recruiter';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  year?: number;
  section?: string;
  cgpa?: number;
  phone?: string;
  mentor?: string;
  coordinator?: string;
  company?: string;
  position?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  type: 'certificate' | 'internship' | 'workshop' | 'volunteering';
  description: string;
  imageUrl?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  alumniCount: number;
}

export interface Notification {
  id: string;
  message: string;
  type: 'request' | 'approval' | 'info';
  timestamp: string;
  read: boolean;
}
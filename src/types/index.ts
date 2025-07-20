export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'customer' | 'doctor' | 'admin';
  phone?: string;
  created_at: string;
}

export interface Doctor {
  id: string;
  user_id: string;
  specialty: string;
  experience_years: number;
  qualification: string;
  bio: string;
  consultation_fee: number;
  location: string;
  rating: number;
  total_reviews: number;
  is_approved: boolean;
  availability: string[];
  profile_image?: string;
  user?: User;
}

export interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  appointment_date: string;
  appointment_time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  documents?: string[];
  created_at: string;
  doctor?: Doctor;
  patient?: User;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DoctorFilters {
  specialty: string;
  location: string;
  search: string;
  minRating: number;
  maxFee: number;
}
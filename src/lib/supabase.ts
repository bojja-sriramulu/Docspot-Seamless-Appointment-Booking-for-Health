import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mock data for development
export const mockDoctors = [
  {
    id: '1',
    user_id: '1',
    specialty: 'Cardiology',
    experience_years: 15,
    qualification: 'MD, FACC',
    bio: 'Experienced cardiologist specializing in preventive cardiology and heart disease management.',
    consultation_fee: 200,
    location: 'New York, NY',
    rating: 4.8,
    total_reviews: 156,
    is_approved: true,
    availability: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    profile_image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
    user: {
      id: '1',
      email: 'dr.smith@docspot.com',
      full_name: 'Dr. Sarah Smith',
      role: 'doctor' as const,
      phone: '+1-555-0123',
      created_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '2',
    user_id: '2',
    specialty: 'Dermatology',
    experience_years: 12,
    qualification: 'MD, Board Certified',
    bio: 'Dermatologist with expertise in skin cancer detection and cosmetic procedures.',
    consultation_fee: 180,
    location: 'Los Angeles, CA',
    rating: 4.9,
    total_reviews: 203,
    is_approved: true,
    availability: ['08:00', '09:00', '10:00', '13:00', '14:00', '15:00'],
    profile_image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
    user: {
      id: '2',
      email: 'dr.johnson@docspot.com',
      full_name: 'Dr. Michael Johnson',
      role: 'doctor' as const,
      phone: '+1-555-0124',
      created_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '3',
    user_id: '3',
    specialty: 'Pediatrics',
    experience_years: 8,
    qualification: 'MD, Pediatrics',
    bio: 'Pediatrician dedicated to providing comprehensive care for children and adolescents.',
    consultation_fee: 150,
    location: 'Chicago, IL',
    rating: 4.7,
    total_reviews: 89,
    is_approved: true,
    availability: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    profile_image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300',
    user: {
      id: '3',
      email: 'dr.davis@docspot.com',
      full_name: 'Dr. Emily Davis',
      role: 'doctor' as const,
      phone: '+1-555-0125',
      created_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '4',
    user_id: '4',
    specialty: 'Orthopedics',
    experience_years: 20,
    qualification: 'MD, Orthopedic Surgery',
    bio: 'Orthopedic surgeon specializing in sports medicine and joint replacement.',
    consultation_fee: 250,
    location: 'Houston, TX',
    rating: 4.6,
    total_reviews: 134,
    is_approved: true,
    availability: ['08:00', '09:00', '13:00', '14:00', '15:00'],
    profile_image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    user: {
      id: '4',
      email: 'dr.wilson@docspot.com',
      full_name: 'Dr. Robert Wilson',
      role: 'doctor' as const,
      phone: '+1-555-0126',
      created_at: '2024-01-01T00:00:00Z'
    }
  }
];

export const mockAppointments = [
  {
    id: '1',
    patient_id: 'user1',
    doctor_id: '1',
    appointment_date: '2024-01-15',
    appointment_time: '10:00',
    status: 'confirmed' as const,
    notes: 'Routine check-up',
    created_at: '2024-01-10T00:00:00Z',
    doctor: mockDoctors[0]
  },
  {
    id: '2',
    patient_id: 'user1',
    doctor_id: '2',
    appointment_date: '2024-01-20',
    appointment_time: '14:00',
    status: 'pending' as const,
    notes: 'Skin consultation',
    created_at: '2024-01-12T00:00:00Z',
    doctor: mockDoctors[1]
  }
];
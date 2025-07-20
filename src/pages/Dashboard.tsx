import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { 
  Calendar, 
  Clock, 
  User, 
  Activity,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockAppointments } from '../lib/supabase';

export function Dashboard() {
  const { user } = useAuth();
  
  // Mock data for dashboard
  const upcomingAppointments = mockAppointments.filter(apt => apt.status !== 'completed');
  const recentAppointments = mockAppointments.slice(0, 3);

  const stats = [
    {
      title: 'Total Appointments',
      value: '12',
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+2 this month'
    },
    {
      title: 'Upcoming',
      value: '3',
      icon: Clock,
      color: 'bg-green-500',
      change: 'Next: Tomorrow'
    },
    {
      title: 'Completed',
      value: '9',
      icon: CheckCircle,
      color: 'bg-purple-500',
      change: '+1 this week'
    },
    {
      title: 'Health Score',
      value: '85%',
      icon: Activity,
      color: 'bg-orange-500',
      change: '+5% improvement'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.user_metadata?.full_name || user?.email}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's an overview of your healthcare journey with DocSpot.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-600">{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
                  <Link
                    to="/doctors"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Book New
                  </Link>
                </div>
              </div>
              <div className="p-6">
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={appointment.doctor?.profile_image}
                              alt={appointment.doctor?.user?.full_name}
                              className="h-12 w-12 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-medium text-gray-900">
                                {appointment.doctor?.user?.full_name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {appointment.doctor?.specialty}
                              </p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-sm text-gray-500">
                                  {new Date(appointment.appointment_date).toLocaleDateString()}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {appointment.appointment_time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                              {getStatusIcon(appointment.status)}
                              <span className="ml-1 capitalize">{appointment.status}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming appointments</h3>
                    <p className="text-gray-600 mb-4">Book your first appointment to get started.</p>
                    <Link
                      to="/doctors"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Find Doctors
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/doctors"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-900">Find Doctors</span>
                </Link>
                <Link
                  to="/appointments"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Calendar className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium text-gray-900">View All Appointments</span>
                </Link>
                <button className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors w-full text-left">
                  <Activity className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="font-medium text-gray-900">Health Records</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-2 h-2 rounded-full ${
                        appointment.status === 'completed' ? 'bg-green-500' : 
                        appointment.status === 'confirmed' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 truncate">
                        Appointment with {appointment.doctor?.user?.full_name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(appointment.appointment_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
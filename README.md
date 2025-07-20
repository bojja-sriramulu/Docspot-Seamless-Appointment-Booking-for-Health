# DocSpot - Seamless Appointment Booking for Health

DocSpot is a comprehensive doctor appointment booking platform that makes healthcare accessible and convenient. Built with modern web technologies, it provides a seamless experience for patients to find and book appointments with verified healthcare providers.

## 🏥 Features

### For Patients
- **Easy Registration**: Simple sign-up process with role-based access
- **Doctor Discovery**: Browse verified doctors by specialty, location, and availability
- **Smart Search & Filters**: Advanced filtering options to find the perfect healthcare provider
- **Appointment Booking**: Complete booking flow with date/time selection and document upload
- **Dashboard**: Comprehensive view of all appointments with real-time status tracking
- **Mobile Responsive**: Optimized for all devices

### For Doctors
- **Professional Profiles**: Detailed profiles with specialties, experience, and qualifications
- **Appointment Management**: Tools to manage schedules and patient appointments
- **Verification System**: Admin approval process for new doctors

### For Administrators
- **Platform Governance**: Oversight of the appointment booking system
- **Doctor Approval**: Review and approve new doctor registrations
- **Compliance Management**: Ensure platform policies and privacy regulations

## 🚀 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Date Handling**: date-fns
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd docspot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup

The application uses Supabase for data storage. You'll need to set up the following tables:

### Users Table (handled by Supabase Auth)
- Extended with user metadata for roles and profile information

### Doctors Table
- Doctor profiles with specialties, experience, and verification status
- Links to user accounts for authentication

### Appointments Table
- Appointment bookings with status tracking
- Links patients to doctors with scheduling information

## 🎯 User Journey

### Patient Journey (John's Story)
1. **Registration**: John signs up as a customer with email and password
2. **Browse Doctors**: Views available doctors with filtering options
3. **Book Appointment**: Selects doctor, date, time, and uploads documents
4. **Confirmation**: Receives appointment confirmation with details
5. **Management**: Tracks appointments through dashboard

### Doctor Journey (Dr. Smith's Story)
1. **Registration**: Applies as a doctor with professional credentials
2. **Approval**: Admin reviews and approves the application
3. **Profile Setup**: Completes professional profile with specialties
4. **Appointment Management**: Reviews and confirms patient appointments
5. **Patient Care**: Provides consultation and updates records

## 🔐 Security Features

- **Role-based Access Control**: Different permissions for patients, doctors, and admins
- **Data Encryption**: All sensitive data encrypted in transit and at rest
- **Input Validation**: Comprehensive validation on all user inputs
- **Authentication**: Secure email/password authentication with Supabase
- **Privacy Compliance**: GDPR and HIPAA considerations built-in

## 🎨 Design Philosophy

DocSpot follows modern design principles with a focus on:
- **User Experience**: Intuitive navigation and clear information hierarchy
- **Accessibility**: WCAG compliant design for all users
- **Mobile-First**: Responsive design that works on all devices
- **Trust & Safety**: Professional healthcare aesthetic that builds confidence
- **Performance**: Optimized for fast loading and smooth interactions

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@docspot.com or join our Slack channel.

## 🙏 Acknowledgments

- Design inspiration from leading healthcare platforms
- Icons by Lucide React
- Images from Pexels
- Built with love for better healthcare accessibility

---

**DocSpot** - Making healthcare appointments seamless, one booking at a time. 🏥✨
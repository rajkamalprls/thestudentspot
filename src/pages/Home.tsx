import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Users, 
  BookOpen, 
  Calendar, 
  Briefcase, 
  CheckCircle,
  GraduationCap,
  FileEdit,
  Book,
  UserPlus,
  MessageCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <GraduationCap className="w-7 h-7 text-orange-600" />,
      title: "Career Guidance",
      description: "Expert guidance to help you make informed career decisions and plan your professional journey.",
      link: "/services/career-guidance"
    },
    {
      icon: <FileEdit className="w-7 h-7 text-orange-600" />,
      title: "Resume Building",
      description: "Professional resume writing services to help you stand out in job applications.",
      link: "/services/resume-building"
    },
    {
      icon: <Book className="w-7 h-7 text-orange-600" />,
      title: "Study Resources",
      description: "Access comprehensive study materials, tutorials, and practice resources.",
      link: "/resources"
    },
    {
      icon: <UserPlus className="w-7 h-7 text-orange-600" />,
      title: "Mentorship",
      description: "Connect with experienced professionals for guidance and career advice.",
      link: "/services/mentorship"
    },
    {
      icon: <Calendar className="w-7 h-7 text-orange-600" />,
      title: "Events & Workshops",
      description: "Participate in skill-building workshops and networking events.",
      link: "/events"
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-orange-600" />,
      title: "Community Support",
      description: "Join a supportive community of students and professionals.",
      link: "/contact"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Your Gateway to Growth and Success
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Join our thriving community of 5000+ tech enthusiasts, students, and professionals passionate about learning, networking, and career development.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link to="/about" className="btn bg-white text-orange-600 hover:bg-gray-100">
                Learn More
              </Link>
              <Link 
                to="/login"
                className="btn bg-orange-600 text-white border border-white hover:bg-orange-700"
              >
                Join Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="p-6 rounded-lg shadow-sm bg-gradient-to-br from-orange-50 to-red-50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-600">5000+</h3>
              <p className="text-gray-600">Community Members</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow-sm bg-gradient-to-br from-orange-50 to-red-50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-600">50+</h3>
              <p className="text-gray-600">Events Conducted</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow-sm bg-gradient-to-br from-orange-50 to-red-50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-600">100+</h3>
              <p className="text-gray-600">Job Opportunities</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow-sm bg-gradient-to-br from-orange-50 to-red-50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-600">20+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your educational and professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useState, useEffect } from 'react';
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaServer,
  FaNetworkWired,
  FaFileAlt
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Raghad from '../assets/images/raghad.jpeg';
import Habiba from '../assets/images/habiba.png';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // eslint-disable-next-line no-unused-vars
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <FaShieldAlt />,
      title: 'Network Security',
      description: 'Comprehensive protection for your network infrastructure against cyber threats.'
    },
    {
      icon: <FaLock />,
      title: 'Data Encryption',
      description: 'Advanced encryption solutions to keep your sensitive data secure.'
    },
    {
      icon: <FaUserShield />,
      title: 'Threat Assessment',
      description: 'Regular security audits and vulnerability assessments.'
    },
    {
      icon: <FaServer />,
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and data protection solutions.'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Endpoint Protection',
      description: 'Complete security for all your network endpoints.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Compliance Services',
      description: 'Ensure your systems meet industry security standards.'
    }
  ];

  const team = [
    {
      name: 'Professor Dr. Khalid Hussain',
      position: 'Professor of Cybersecurity',
      image: 'https://aiu.edu.my/wp-content/uploads/2022/12/Professor-Dr.-Hussain-Khalid-01-200x200.jpg'
    },
    {
      name: 'Md Amin Ullah Sheikh',
      position: 'Penetration Tester',
      image: 'https://avatars.githubusercontent.com/u/128347342'
    },
    {
      name: 'Raghad Al Yatim',
      position: 'Cybersecurity Specialist',
      image: Raghad
    },
    {
      name: 'Habiba Arifa',
      position: 'Security Analyst',
      image: Habiba
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navItems = ['Home', 'Services', 'Team', 'Contact'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const bounceVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar with enhanced animations */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        {/* Existing navbar content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center">
              <FaShieldAlt className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span
                className={`ml-2 font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                PentestShield
              </span>
            </motion.div>

            <div className="hidden md:block">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile menu with enhanced animations */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg">
              {/* Existing mobile menu content */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with parallax effect */}
      <motion.div
        id="home"
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <motion.div
          className="absolute inset-0 bg-black opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Secure Your Digital Future
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8">
            Advanced Cybersecurity Solutions for Modern Businesses
          </motion.p>
          <motion.button
            variants={bounceVariants}
            initial="initial"
            whileHover="hover"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            <a href="http://127.0.0.1:8000/">
              <button className="rounded-full font-semibold flex items-center mx-auto md:mx-0">
                Get Started
                <BsArrowRight className="ml-2" />
              </button>
            </a>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <div className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-gray-50" id="team">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-8 ">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col justify-center items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full shadow-sm shadow-gray-500"
                  />
                  <div>
                    <h3 className="text-center font-semibold">{member.name}</h3>
                    <p className="text-center text-gray-600 text-sm">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="py-20 bg-blue-900" id="contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Ready to Secure Your Business?
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PentestShield</h3>
              <p className="text-gray-400">
                Protecting your digital assets with advanced security solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FiTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FiLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FiGithub size={24} />
                </a>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-400">
                  <FiMail className="mr-2" /> contact@pentestshield.com
                </div>
                <div className="flex items-center text-gray-400">
                  <FiPhone className="mr-2" /> +60 11-3795 4962
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PentestShield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

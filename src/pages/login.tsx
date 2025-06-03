import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LoginPage = () => {
  const { signInWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
      // Redirect handled in useEffect after login
    } catch (err: any) {
      console.error('Error signing in:', err);
      if (err.code === 'auth/popup-blocked') {
        setError('Sign-in popup was blocked by your browser. Please allow popups for this site and try again.');
      } else {
        setError('Failed to sign in. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-grow flex items-center justify-center py-16 bg-background px-4">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center max-w-5xl">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="mb-6">
              <GraduationCap size={48} className="text-primary-800" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to The Student Spot</h1>
            <p className="text-gray-600 mb-6">
              Join our community of ambitious learners and access resources tailored to your educational journey.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-2 rounded-full mr-4">
                  <BookOpen size={20} className="text-primary-800" />
                </div>
                <div>
                  <h3 className="font-medium">Personalized Dashboard</h3>
                  <p className="text-sm text-gray-600">Access study materials based on your educational stream.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-50 p-2 rounded-full mr-4">
                  <BookOpen size={20} className="text-primary-800" />
                </div>
                <div>
                  <h3 className="font-medium">Career Resources</h3>
                  <p className="text-sm text-gray-600">Find internships, jobs, and guidance for your future.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-50 p-2 rounded-full mr-4">
                  <BookOpen size={20} className="text-primary-800" />
                </div>
                <div>
                  <h3 className="font-medium">Community Support</h3>
                  <p className="text-sm text-gray-600">Connect with peers and mentors from across institutions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In / Sign Up</h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                {isLoading ? 'Signing in...' : 'Continue with Google'}
              </button>

              <div className="relative py-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-sm text-gray-500">or</span>
                </div>
              </div>

              {/* Coming Soon Message */}
              <div className="text-center text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
                Email/password login coming soon!
              </div>

              <div className="pt-4 text-center">
                <p className="text-sm text-gray-600">
                  By continuing, you agree to our{' '}
                  <a href="/terms" className="text-primary-800 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-primary-800 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoginPage;

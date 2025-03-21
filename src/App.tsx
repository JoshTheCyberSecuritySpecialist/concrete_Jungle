import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteGenerator from './components/QuoteGenerator';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BlogAdmin from './components/Blog/BlogAdmin';
import ServiceAreaMap from './components/ServiceAreaMap';
import CustomerDashboard from './components/CustomerDashboard';
import AuthPage from './components/Auth/AuthPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <Testimonials />
                  <ServiceAreaMap />
                  <QuoteGenerator />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog/admin" element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              } />
              <Route path="/quote" element={<QuoteGenerator />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <CustomerDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
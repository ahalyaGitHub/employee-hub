import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Optional icons

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={16} /> +91 98765 43210
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={16} /> support@employeehub.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin size={16} /> Chennai, India
          </p>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="font-medium">EmployeeHub</span> · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

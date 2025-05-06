import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: Replace with any icon lib or SVG

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">EmployeeHub</h1>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/employees" className="hover:text-gray-200">Employees</Link>
          <Link to="/add" className="hover:text-gray-200">Add Employee</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-4">
          <Link to="/" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Home</Link>
          <Link to="/employees" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Employees</Link>
          <Link to="/add" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Add Employee</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

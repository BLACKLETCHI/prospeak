import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/pricing" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Tarifs
              </Link>
              <Link to="/dashboard" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link to="/support" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Support
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/login" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Connexion
            </Link>
            <Link to="/register" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
              Essai Gratuit
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Tarifs
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Dashboard
            </Link>
            <Link to="/support" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Support
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Connexion
            </Link>
            <Link to="/register" className="block px-3 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
              Essai Gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
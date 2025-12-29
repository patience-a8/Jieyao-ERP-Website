import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '核心功能', href: '/features' },
  { label: '价格方案', href: '/pricing' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
              <BarChart2 size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">捷耀ERP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`${
                  isActive(item.href) ? 'text-brand-600' : 'text-slate-600'
                } hover:text-brand-600 font-medium transition-colors duration-200 text-sm lg:text-base`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
             <Link
                to="/contact"
                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                获取演示
              </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href) ? 'text-brand-600 bg-brand-50' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-lg font-medium"
              >
                获取演示
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
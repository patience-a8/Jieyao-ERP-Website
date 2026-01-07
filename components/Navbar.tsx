
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2, Globe } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '核心功能', href: '/features' },
  { label: '成功案例', href: '/cases' },
  { label: '价格方案', href: '/pricing' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
    } border-b border-slate-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <BarChart2 size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-slate-800 leading-none">捷耀ERP</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Industrial ERP</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  isActive(item.href) 
                    ? 'text-brand-600 bg-brand-50' 
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Server Online</span>
             </div>
             <Link
                to="/contact"
                className="bg-slate-900 hover:bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-brand-500/20 active:scale-95"
              >
                免费咨询
              </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-bold transition-colors ${
                    isActive(item.href) ? 'text-brand-600 bg-brand-50' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive(item.href) && <div className="w-1.5 h-1.5 bg-brand-600 rounded-full"></div>}
              </Link>
            ))}
             <div className="pt-4 px-4">
                <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg"
                >
                    获取专业演示
                </Link>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

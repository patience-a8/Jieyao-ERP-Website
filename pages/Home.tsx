import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DataVisual from '../components/DataVisual';
import Benefits from '../components/Benefits';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <DataVisual />
      <Benefits />
      
      {/* Home specific CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-brand-600 rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative px-6 py-12 md:px-12 md:py-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  准备好开启数字化转型了吗？
                </h2>
                <p className="mt-4 text-lg text-brand-100 max-w-2xl">
                  立即联系我们的专家团队，预约一对一产品演示，定制您的专属解决方案。
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-brand-600 bg-white hover:bg-brand-50 transition-colors shadow-lg"
                >
                  预约演示
                  <Mail className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
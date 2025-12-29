import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-8 border border-brand-100 shadow-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            捷耀ERP 2.0 全新发布
            <ChevronRight size={14} />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            现代化ERP系统 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">
              为企业发展赋能
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            一体化企业管理解决方案，助力企业数字化转型。整合所有业务流程，提供实时数据分析，帮助您做出更明智的决策。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-brand-500/30 transition-all duration-300"
            >
              立即咨询
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link 
              to="/features"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-lg font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:border-brand-300"
            >
              了解功能
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Image Placeholder */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-brand-600/5 rounded-2xl transform rotate-1 scale-95 z-0"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white z-10">
            <img 
              src="https://picsum.photos/1200/600?grayscale&blur=2" 
              alt="ERP Dashboard Interface" 
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/80 backdrop-blur px-8 py-4 rounded-xl shadow-lg border border-white/50">
                  <p className="text-brand-900 font-bold text-lg">捷耀智能数据中心预览</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
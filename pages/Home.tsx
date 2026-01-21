import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DataVisual from '../components/DataVisual';
import Benefits from '../components/Benefits';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      
      {/* Featured Case Study Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
                    <div className="inline-flex items-center gap-2 text-red-400 font-bold text-sm mb-4 uppercase tracking-widest">
                        <Star size={16} fill="currentColor" /> 明星合作案例
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                        浪潮软件 & 桂捷科技<br/>纸品行业联合解决方案
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                        专为纸厂及纸贸公司研发。完美解决分切成本计算、多计量单位自动换算等行业痛点。
                    </p>
                    <div>
                        <Link 
                            to="/cases" 
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                        >
                            查看案例详情 <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                <div className="flex-1 bg-slate-800 relative min-h-[300px]">
                    <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                        alt="Industry Case" 
                        className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute bottom-6 left-6 bg-red-600/90 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                        Paper Industry Solution
                    </div>
                </div>
            </div>
        </div>
      </section>

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
                  <div className="ml-2 -mr-1 h-5 w-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
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
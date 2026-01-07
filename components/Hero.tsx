
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Monitor, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
      {/* 动态背景装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* 左侧文字内容 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold mb-6 border border-slate-200 animate-fade-in-up">
              <Monitor size={14} className="text-brand-600" />
              <span>工信国际 (gxgjsoft) 官方技术支持</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
              捷耀ERP<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-600">
                定义数字化未来
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              整合生产、供应链、财务与人力资源。专为 Windows 架构优化的企业级 ERP，助力您的企业实现数字化跨越。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                免费预约演示
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:19337226600"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all duration-300"
              >
                <PhoneCall className="mr-2 h-5 w-5 text-brand-600" />
                19337226600
              </a>
            </div>

            {/* 信任背书栏 */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900">10年+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">技术积累</p>
              </div>
              <div className="border-x border-slate-100 px-4">
                <p className="text-2xl font-bold text-slate-900">8.130</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">公网访问节点</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">运维响应</p>
              </div>
            </div>
          </div>

          {/* 右侧交互预览图 */}
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-md border border-slate-200 text-[10px] text-slate-400 flex-grow text-center mx-4 max-w-[300px] truncate">
                    www.gxgjsoft.cn/console
                  </div>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Jieyao ERP Intelligence Center" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

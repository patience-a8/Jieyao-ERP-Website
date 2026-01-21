import React from 'react';
import { Mail, MapPin, ArrowRight, BarChart2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-200 pb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-600 text-white p-1.5 rounded-lg">
                  <BarChart2 size={20} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">桂捷ERP</h3>
            </div>
            
            <p className="text-slate-500 leading-relaxed max-w-sm">
              基于先进的技术架构，为您的企业数字化转型保驾护航。立足广西，面向东盟，服务全国。
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">系统状态</p>
                <p className="text-green-600 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  已就绪 (v1.0.1)
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">联系方式</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-600">
                <Mail className="h-5 w-5 text-brand-600 mr-3" />
                <div className="flex flex-col text-sm">
                  <a href="mailto:779294618@qq.com" className="hover:text-brand-600 transition-colors">779294618@qq.com</a>
                  <a href="mailto:345542276@qq.com" className="hover:text-brand-600 transition-colors">345542276@qq.com</a>
                </div>
              </li>
              <li className="flex items-start text-slate-600">
                <MapPin className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                <span className="text-sm">
                  广西—南宁：南宁市金龙路2号南宁万科大厦B座546号<br/>
                  <Link to="/contact" className="text-brand-600 hover:underline">查看所有办事处地址 &rarr;</Link>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-slate-600 hover:text-brand-600 flex items-center group text-sm lg:text-base"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />核心功能</Link></li>
              <li><Link to="/pricing" className="text-slate-600 hover:text-brand-600 flex items-center group text-sm lg:text-base"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />价格方案</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-brand-600 flex items-center group text-sm lg:text-base"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />关于我们</Link></li>
              <li><Link to="/admin" className="text-slate-600 hover:text-brand-600 flex items-center group text-sm lg:text-base"><ShieldCheck size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />管理后台</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs sm:text-sm">
          <p>© {currentYear} 桂捷ERP. 保留所有权利.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/*<Link to="/privacy" className="hover:text-slate-900">隐私政策</Link>
            <Link to="/terms" className="hover:text-slate-900">服务条款</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
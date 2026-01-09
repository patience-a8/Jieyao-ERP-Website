import React from "react";
import { Mail, Phone, MapPin, ArrowRight, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-200 pb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 text-white p-1.5 rounded-lg">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">捷耀ERP</h3>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-sm">
              由工信国际 (gxgjsoft)
              提供全方位技术保障。我们致力于通过数字化手段，帮助企业降本增效，实现管理跨越。
            </p>
            <div className="mt-6">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                官方网站
              </p>
              <p className="text-brand-600 font-bold">www.gxgjsoft.cn</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              联系方式
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-600">
                <Phone className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">025-51819281</p>
                  <p className="text-sm">刘经理 (19337226600)</p>
                </div>
              </li>
              <li className="flex items-center text-slate-600">
                <Mail className="h-5 w-5 text-brand-600 mr-3" />
                <a
                  href="mailto:support@gxgjsoft.cn"
                  className="hover:text-brand-600 transition-colors"
                >
                  779294618@qq.com
                </a>
              </li>
              <li className="flex items-start text-slate-600">
                <MapPin className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                <span>
                  江苏省南京市软件大道88号
                  <br />
                  科技创新园A座
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              快速链接
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-slate-600 hover:text-brand-600 flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  核心功能
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-600 hover:text-brand-600 flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  价格方案
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-brand-600 flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-brand-600 flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2023 捷耀ERP (www.gxgjsoft.cn). 保留所有权利.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/*<Link to="/privacy" className="hover:text-slate-900">
              隐私政策
            </Link>
            <Link to="/terms" className="hover:text-slate-900">
              服务条款
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

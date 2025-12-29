import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" alt="Office meeting" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">我们是捷耀</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            专注于利用先进技术帮助中国企业实现数字化转型。我们的使命是让每一个企业都能享受到智能管理的红利。
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">10+</div>
                      <div className="text-slate-500 font-medium">年行业经验</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">5000+</div>
                      <div className="text-slate-500 font-medium">服务企业</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">98%</div>
                      <div className="text-slate-500 font-medium">客户续费率</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">24/7</div>
                      <div className="text-slate-500 font-medium">技术支持</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Values */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">我们的核心价值观</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { icon: Users, title: '以客户为中心', desc: '客户的成功是我们存在的唯一理由。' },
                  { icon: Award, title: '追求卓越', desc: '在产品和服务的每一个细节上力求完美。' },
                  { icon: Globe, title: '开放创新', desc: '拥抱变化，不断探索前沿技术的应用。' },
                  { icon: Heart, title: '诚信负责', desc: '对客户、员工和社会信守承诺。' }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-xl text-center hover:-translate-y-1 transition-transform">
                      <div className="inline-flex p-3 bg-brand-100 text-brand-600 rounded-full mb-4">
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AboutPage;
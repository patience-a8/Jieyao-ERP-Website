import React from 'react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: '基础版',
    price: '¥9,800',
    period: '/年',
    description: '适合初创企业和小微团队，快速实现业务数字化。',
    features: ['最多 5 个用户', '核心财务管理', '基础库存管理', '标准报表', '邮件技术支持'],
    cta: '免费试用',
    popular: false,
  },
  {
    name: '专业版',
    price: '¥29,800',
    period: '/年',
    description: '适合快速成长的中小企业，全面的功能支持业务扩展。',
    features: ['最多 20 个用户', '包含基础版所有功能', '进销存全流程', '人力资源模块', 'API 接口访问', '7x24小时优先支持'],
    cta: '立即购买',
    popular: true,
  },
  {
    name: '企业版',
    price: '定制',
    period: '',
    description: '为大型企业量身定制的解决方案，满足复杂业务需求。',
    features: ['无限用户数量', '全功能模块解锁', '私有化部署选项', '专属客户成功经理', '定制化开发支持', '高级数据安全服务'],
    cta: '联系销售',
    popular: false,
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">灵活定价</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            选择适合您企业的方案
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            透明的价格，无隐藏费用。所有方案均包含免费的系统升级和基础培训。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-xl flex flex-col ${
                plan.popular ? 'ring-2 ring-brand-600 scale-105 z-10' : 'border border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                   <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                     最受欢迎
                   </span>
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="ml-1 text-slate-500 font-medium">{plan.period}</span>
                </div>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 bg-slate-50 rounded-b-2xl border-t border-slate-100">
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular 
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg hover:shadow-brand-500/30' 
                      : 'bg-white text-brand-600 border border-brand-200 hover:bg-brand-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
            <Info className="text-brand-600 flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-slate-900">需要私有化部署？</h4>
                <p className="text-slate-600 mt-2">
                    对于对数据安全有极高要求的金融、政务等行业，我们提供完整的私有云或本地服务器部署方案。
                    <Link to="/contact" className="text-brand-600 font-medium hover:underline ml-2">联系我们获取方案 &rarr;</Link>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
import React from 'react';
import { Settings, Cloud, Smartphone, ShieldCheck, Link, Zap } from 'lucide-react';
import { Benefit } from '../types';

const benefitsList: Benefit[] = [
  {
    title: '高度可定制',
    description: '拒绝千篇一律。根据企业特定行业需求，灵活定制模块、字段和工作流程。',
    icon: Settings,
  },
  {
    title: '云端部署',
    description: '支持SaaS模式，无需昂贵的服务器硬件投资。即开即用，随时随地访问。',
    icon: Cloud,
  },
  {
    title: '移动友好',
    description: '全响应式设计，完美适配手机和平板。出差在外也能轻松审批流程、查看报表。',
    icon: Smartphone,
  },
  {
    title: '企业级数据安全',
    description: '采用银行级数据加密技术，多重备份与细粒度的权限访问控制，确保信息万无一失。',
    icon: ShieldCheck,
  },
  {
    title: '无缝集成',
    description: '提供丰富的API接口，轻松连接CRM、电商平台及其他第三方业务系统，打破数据孤岛。',
    icon: Link,
  },
  {
    title: '极速响应',
    description: '基于最新的技术架构，提供流畅的操作体验，大幅提升员工工作效率。',
    icon: Zap,
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm">为什么选择桂捷</h2>
            <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl">打造敏捷型企业的坚实基石</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors duration-300 border border-slate-700/50">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-600 text-white shadow-lg shadow-brand-500/20">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-base text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
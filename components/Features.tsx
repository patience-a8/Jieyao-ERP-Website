import React from 'react';
import { Package, DollarSign, Users, PieChart, ShoppingCart, Briefcase } from 'lucide-react';
import { Feature } from '../types';

const featuresList: Feature[] = [
  {
    title: '库存管理',
    description: '实时跟踪库存水平，自动化补货流程，优化库存周转率，减少库存成本。',
    icon: Package,
  },
  {
    title: '财务管理',
    description: '集成总账、应收应付、固定资产等模块，提供全面的财务可视化和分析。',
    icon: DollarSign,
  },
  {
    title: '人力资源管理',
    description: '从招聘到退休的全周期员工管理，包括考勤、薪资、绩效和培训等。',
    icon: Users,
  },
  {
    title: '数据分析',
    description: '强大的报表和仪表板功能，提供实时业务洞察，支持数据驱动决策。',
    icon: PieChart,
  },
  {
    title: '采购管理',
    description: '自动化采购流程，供应商管理，采购订单跟踪和发票匹配。',
    icon: ShoppingCart,
  },
  {
    title: '项目管理',
    description: '项目规划、资源分配、进度跟踪和成本控制的一体化解决方案。',
    icon: Briefcase,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">核心模块</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            全面覆盖企业运营
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            捷耀ERP提供全方位的管理工具，打破部门壁垒，实现信息高度共享。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-500 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="rounded-xl inline-flex p-3 bg-brand-50 text-brand-600 ring-4 ring-white group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
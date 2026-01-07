
import React from 'react';
import { Package, DollarSign, Users, PieChart, Factory, Truck } from 'lucide-react';
import { Feature } from '../types';

const featuresList: Feature[] = [
  {
    title: '智能生产管理',
    description: '涵盖生产计划、车间调度及工单跟踪。支持BOM多级管理，实现排产自动化，显著提升产线利用率。',
    icon: Factory,
  },
  {
    title: '高效库存管控',
    description: '实时跟踪原材料与成品库位。集成PDA扫码出入库，支持安全库存预警，优化资金周转。',
    icon: Package,
  },
  {
    title: '全流程供应链',
    description: '打通采购、销售、物流全链路。供应商评估体系结合合同管理，降低采购成本，提升交付可靠性。',
    icon: Truck,
  },
  {
    title: '精细财务核算',
    description: '集成总账与成本中心，支持业财一体化同步。自动生成多维度财务报表，确保经营数据透明。',
    // Added missing icon property
    icon: DollarSign,
  },
  {
    title: '人力资源协同',
    description: '覆盖考勤排班、绩效考核与全薪资计算。员工自助门户提升管理效率，助力企业人才梯队建设。',
    icon: Users,
  },
  {
    title: 'BI决策看板',
    description: '将海量业务数据转化为实时图形化分析报告，关键指标一眼掌握，助力管理层科学决策。',
    icon: PieChart,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">核心模块</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            专为现代化企业打造的数字化基座
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            捷耀ERP提供从生产到销售的一体化闭环管理，打破信息孤岛，实现真正的效率跨越。
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
                  {feature.icon ? <feature.icon className="h-8 w-8" aria-hidden="true" /> : <DollarSign className="h-8 w-8" />}
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

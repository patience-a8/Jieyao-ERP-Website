import React from 'react';
import { Package, DollarSign, Users, PieChart, ShoppingCart, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Feature } from '../types';

const featuresList: Feature[] = [
  {
    title: '智能库存管理',
    description: '采用先进的预测算法，实时跟踪库存水平。支持多仓库管理、批次追踪、序列号管理。系统自动计算安全库存，触发智能补货建议，有效降低库存积压与缺货风险。',
    icon: Package,
  },
  {
    title: '全维度财务管控',
    description: '深度集成总账、应收应付、固定资产与税务管理。支持多币种核算，实时生成资产负债表与损益表。自动化的财务流程减少人工录入错误，确保合规性。',
    icon: DollarSign,
  },
  {
    title: '人力资本管理 (HCM)',
    description: '覆盖员工全生命周期管理。从智能招聘、入职培训到绩效考核、薪资计算。提供自助服务门户，提升员工满意度，并帮助企业优化人才结构。',
    icon: Users,
  },
  {
    title: '商业智能 (BI) 分析',
    description: '内置强大的报表引擎，提供数百种预设报表模板。支持拖拽式自定义仪表板，通过可视化图表实时监控关键绩效指标 (KPI)，辅助管理层精准决策。',
    icon: PieChart,
  },
  {
    title: '供应链与采购',
    description: '端到端的供应链可视性。自动化采购流程，从请购单到采购订单、收货、质检及发票校验。内置供应商评估体系，帮助企业筛选优质合作伙伴。',
    icon: ShoppingCart,
  },
  {
    title: '项目生命周期管理',
    description: '专为项目型企业设计。集成项目计划、资源调度、工时记录与成本核算。实时跟踪项目进度与盈亏状况，确保项目按时按质交付。',
    icon: Briefcase,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            全功能模块，<span className="text-brand-600">无限可能</span>
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            捷耀ERP不仅仅是一个软件，它是您企业运营的数字神经系统。探索我们强大的功能模块，看看我们如何改变您的工作方式。
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {featuresList.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center p-4 bg-brand-100 text-brand-600 rounded-xl shadow-sm">
                  <feature.icon className="h-8 w-8" />
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
                    了解更多 <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-6">无缝集成您的现有生态</h2>
               <p className="text-slate-400 text-lg mb-8">
                 不要抛弃您喜爱的工具。捷耀ERP提供强大的API和预构建的连接器，可以与主流CRM、电商平台、银行系统和办公软件完美互通。
               </p>
               <ul className="space-y-3">
                 {['Salesforce & HubSpot CRM', 'Shopify & WooCommerce', '钉钉 & 企业微信', 'Office 365 & Google Workspace'].map(item => (
                   <li key={item} className="flex items-center text-brand-100">
                     <CheckCircle2 size={20} className="mr-3 text-brand-400" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
             <div className="mt-10 lg:mt-0 bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">CRM</div>
                   <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">电商</div>
                   <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">OA</div>
                   <div className="bg-brand-600 h-24 rounded-lg flex items-center justify-center text-white font-bold shadow-lg scale-105 z-10">捷耀ERP</div>
                   <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">银行</div>
                   <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">MES</div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
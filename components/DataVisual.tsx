import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1月', 收入: 4000, 成本: 2400 },
  { name: '2月', 收入: 3000, 成本: 1398 },
  { name: '3月', 收入: 2000, 成本: 9800 },
  { name: '4月', 收入: 2780, 成本: 3908 },
  { name: '5月', 收入: 1890, 成本: 4800 },
  { name: '6月', 收入: 2390, 成本: 3800 },
  { name: '7月', 收入: 3490, 成本: 4300 },
];

const DataVisual: React.FC = () => {
  return (
    <section id="analytics" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              数据驱动决策，<br />
              <span className="text-brand-600">洞察业务未来</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              不再依赖直觉。捷耀ERP内置强大的BI分析引擎，将复杂的业务数据转化为直观的图表。实时监控现金流、库存周转和销售趋势。
            </p>
            <ul className="space-y-4">
              {[
                '实时仪表盘监控关键KPI',
                '自定义报表生成与自动推送',
                '多维度数据穿透分析',
                'AI辅助的趋势预测'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800">月度营收概览</h3>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    +12.5% 同比增长
                </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area type="monotone" dataKey="收入" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
                  <Area type="monotone" dataKey="成本" stackId="1" stroke="#64748b" fill="#f1f5f9" fillOpacity={0.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center border-t border-slate-100 pt-4">
                <div>
                    <p className="text-xs text-slate-500 uppercase">总营收</p>
                    <p className="font-bold text-slate-900">¥128,450</p>
                </div>
                <div>
                    <p className="text-xs text-slate-500 uppercase">净利润</p>
                    <p className="font-bold text-brand-600">¥42,100</p>
                </div>
                 <div>
                    <p className="text-xs text-slate-500 uppercase">活跃用户</p>
                    <p className="font-bold text-slate-900">892</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisual;
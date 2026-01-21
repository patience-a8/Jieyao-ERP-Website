import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Server, Cpu, HardDrive } from 'lucide-react';

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
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="analytics" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              智能监测，实时洞察
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              桂捷ERP不仅管理业务，更实时关注您的基础设施安全。内置BI引擎提供毫秒级的数据响应。
            </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-start">
          
          {/* 左侧：业务趋势图 */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mb-8 lg:mb-0">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Activity className="text-brand-600" size={20} />
                    <h3 className="font-bold text-slate-800">月度业务增长趋势</h3>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    +12.5% 同比增长
                </span>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area type="monotone" dataKey="收入" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                  <Area type="monotone" dataKey="成本" stroke="#94a3b8" strokeWidth={2} fill="#f1f5f9" fillOpacity={0.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 右侧：服务器状态监控模拟 */}
          <div className="bg-slate-900 rounded-2xl shadow-2xl p-6 text-white border border-slate-800">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <Server className="text-brand-400" size={18} />
                    <h3 className="font-bold">服务器节点状态</h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${pulse ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-green-700'} transition-all duration-1000`}></span>
                    <span className="text-[10px] font-mono text-green-400">运行中</span>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="flex items-center gap-2"><Cpu size={14} className="text-slate-400" /> CPU 使用率</span>
                        <span className="font-mono text-brand-400">24.5%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-500 h-full w-[24.5%] transition-all duration-500"></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="flex items-center gap-2"><Activity size={14} className="text-slate-400" /> 内存占用 (RAM)</span>
                        <span className="font-mono text-brand-400">1.2GB / 2GB</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[60%] transition-all duration-500"></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="flex items-center gap-2"><HardDrive size={14} className="text-slate-400" /> 存储空间 (SSD)</span>
                        <span className="font-mono text-brand-400">18.4GB / 40GB</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full w-[46%] transition-all duration-500"></div>
                    </div>
                </div>
            </div>

            <div className="mt-10 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">最近部署</p>
                <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">桂捷ERP核心 v3.0.4</span>
                    <span className="text-slate-500 italic">2小时前</span>
                </div>
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-sm font-bold transition-colors shadow-lg shadow-brand-900/20">
                进入控制台
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataVisual;
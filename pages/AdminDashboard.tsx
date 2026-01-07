
import React, { useState, useEffect } from 'react';
import { Database, Trash2, RefreshCcw, UserCircle, Phone, Building2, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<any[]>([]);

  const loadLeads = () => {
    const data = JSON.parse(localStorage.getItem('jieyao_leads') || '[]');
    setLeads(data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const clearData = () => {
    if (window.confirm('警告：此操作将永久删除所有本地客户线索。建议在清空前已通过邮件核实记录。确定清空吗？')) {
      localStorage.removeItem('jieyao_leads');
      setLeads([]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-100 transition-colors">
                <ArrowLeft size={20} className="text-slate-600" />
            </Link>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">捷耀线索仪表盘</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                <Database size={24} />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900">线索概览</p>
                <p className="text-xs text-slate-500">当前累计收到 <span className="text-brand-600 font-bold">{leads.length}</span> 条咨询</p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
             <button onClick={loadLeads} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-sm font-bold transition-colors">
                <RefreshCcw size={16} /> 刷新
             </button>
            <button onClick={clearData} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-bold transition-colors">
              <Trash2 size={16} /> 清空
            </button>
          </div>
        </div>

        {leads.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-slate-200">
            <div className="w-16 h-16 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle size={40} />
            </div>
            <p className="text-slate-400 font-medium">暂无客户咨询数据</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">
                            {lead.name?.[0]}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">{lead.name}</h3>
                            <p className="text-xs text-slate-400 font-mono">{lead.date}</p>
                        </div>
                    </div>
                    <a href={`tel:${lead.phone}`} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-200 transition-all active:scale-95">
                        回拨电话
                    </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <Phone size={16} className="text-brand-500" />
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">联系电话</p>
                            <p className="text-sm text-slate-700 font-medium">{lead.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <Building2 size={16} className="text-brand-500" />
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">所属公司</p>
                            <p className="text-sm text-slate-700 font-medium">{lead.company}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <MessageSquare size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">客户具体需求</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{lead.message}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-12 text-center text-slate-300 text-xs">
          捷耀内部管理工具 v1.0 | 仅在本浏览器缓存数据
      </div>
    </div>
  );
};

export default AdminDashboard;

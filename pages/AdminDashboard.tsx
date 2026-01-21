import React, { useState } from 'react';
import { 
  ArrowLeft, ShieldAlert, Zap, Lock, Terminal, 
  ChevronRight, Globe2, WifiOff, Server, 
  Settings, CheckCircle2, AlertTriangle, UploadCloud,
  Activity, Radio, ShieldCheck, Power, Search,
  MonitorCheck, ShieldX, MonitorPlay, Key
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloud-ok' | 'vnc-repair'>('vnc-repair');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-brand-500">
      {/* 状态条：云端已通 */}
      <div className="bg-green-600 text-white py-3 px-4 flex items-center justify-center gap-4 shadow-2xl">
        <ShieldCheck size={20} className="animate-bounce" />
        <span className="text-sm font-black uppercase tracking-widest">确认：阿里云安全组配置已就绪 (Cloud Gate: OPEN)</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
                <Link to="/" className="p-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500 transition-all">
                    <ArrowLeft size={24} className="text-brand-400" />
                </Link>
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight">ERP 部署链路抢修 - 终极阶段</h1>
                    <p className="text-slate-500 text-sm mt-1">云端规则：通过 | OS内部：阻塞 | 抢修目标：8.130.10.247</p>
                </div>
            </div>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button 
                  onClick={() => setActiveTab('cloud-ok')}
                  className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'cloud-ok' ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  云端配置核对
                </button>
                <button 
                  onClick={() => setActiveTab('vnc-repair')}
                  className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'vnc-repair' ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  VNC 强制解锁 (核心)
                </button>
            </div>
        </div>

        {activeTab === 'cloud-ok' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-8 lg:col-span-2">
                  <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-green-400" /> 截图验证结论：配置无误
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                          <p className="text-brand-400 font-bold mb-1">ICMP 协议</p>
                          <p className="text-xs text-slate-500">优先级 100 已允许全部。这意味着阿里云没有拦截您的 Ping 请求。</p>
                      </div>
                      <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                          <p className="text-brand-400 font-bold mb-1">RDP 3389</p>
                          <p className="text-xs text-slate-500">优先级 100 已允许全部。这意味着远程桌面的“通道”已经建立。</p>
                      </div>
                  </div>
                  <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-start gap-4">
                    <AlertTriangle className="text-amber-500 flex-shrink-0" size={24} />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        既然安全组正常但仍 Ping 不通，说明<b>服务器内部防火墙</b>处于开启状态且设置了“禁 Ping”。我们需要绕过网络，通过阿里云的底层管理通道（VNC）进入系统。
                    </p>
                  </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem]">
                   <h3 className="text-white font-bold mb-4">关键检查项</h3>
                   <ul className="text-xs space-y-3 text-slate-500">
                     <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> 实例是否运行中？</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-500" /> 是否存在欠费？</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-slate-700" /> 本地是否仍开着 VPN？</li>
                   </ul>
                </div>
              </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <MonitorPlay className="text-brand-600" size={32} />
                  <div>
                    <h2 className="text-2xl font-black">通过 VNC 管理终端强制修复</h2>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Management Console Bypass</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-slate-950 rounded-3xl text-white">
                    <h4 className="font-bold text-brand-400 mb-4 flex items-center gap-2">
                        <Key size={16} /> 1. 登录 VNC 终端
                    </h4>
                    <p className="text-xs text-slate-400 mb-4">在阿里云控制台 -实例详情 - 远程连接 -选择 <b>VNC</b>。输入您设定的远程连接密码（通常是 6 位数字）。</p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100">
                    <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                        <ShieldX size={18} className="text-red-500" /> 2. 彻底关闭内部防火墙
                    </h4>
                    <p className="text-sm text-slate-500 mb-4">
                        登录 Windows 后，按下 <kbd className="bg-slate-200 px-1 rounded text-xs font-mono">Win + R</kbd> 输入 <span className="font-mono font-bold text-slate-900">powershell</span>，然后输入：
                    </p>
                    <div className="bg-slate-900 p-4 rounded-xl relative group">
                        <code className="text-[11px] font-mono text-brand-400 break-all">Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled False</code>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100">
                    <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                        <Activity size={18} className="text-brand-600" /> 3. 重启网络适配器 (可选)
                    </h4>
                    <p className="text-sm text-slate-500 mb-4">
                        如果执行完上述命令仍不通，请在阿里云后台尝试 <b>“重启实例”</b>。
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href='tel:19337226600'}
                  className="w-full mt-10 py-5 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-600 transition-all shadow-xl"
                >
                    <UploadCloud size={24} className="text-brand-400" />
                    我已成功登录 VNC，请求一键部署脚本
                </button>
              </div>
            </div>

            <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Terminal size={18} className="text-brand-400" /> 部署准备
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                    链路恢复后，我们将通过 RDP 挂载本地驱动器，将桂捷 ERP 的生产环境包（dist 文件夹）直接拷贝至服务器 C:\wwwroot 目录。
                  </p>
                  <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">服务器规格</p>
                      <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                              <span className="text-slate-500">OS</span>
                              <span className="text-slate-300">Windows Server 2022</span>
                          </div>
                          <div className="flex justify-between text-xs">
                              <span className="text-slate-500">Region</span>
                              <span className="text-slate-300">北京 (China North 2)</span>
                          </div>
                      </div>
                  </div>
                </div>

                <div className="bg-brand-600/10 border border-brand-500/20 rounded-[2rem] p-6 text-center">
                    <p className="text-[10px] text-brand-400 font-bold uppercase tracking-widest mb-2">正在等待连接信号</p>
                    <div className="flex justify-center gap-1">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
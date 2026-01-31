import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  UploadCloud,
  Activity,
  ShieldCheck,
  MonitorPlay,
  Key,
  ShieldX,
  Terminal,
  MessageSquare,
  User,
  Phone,
  Building,
  Trash2,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

// 定义线索数据的接口
interface Lead {
  id: number;
  name: string;
  phone: string;
  company: string;
  message: string;
  date: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "cloud-ok" | "vnc-repair" | "leads"
  >("leads");
  const [leads, setLeads] = useState<Lead[]>([]);

  // 加载本地存储的线索
  useEffect(() => {
    if (activeTab === "leads") {
      const storedLeads = localStorage.getItem("jieyao_leads");
      if (storedLeads) {
        try {
          setLeads(JSON.parse(storedLeads));
        } catch (e) {
          console.error("解析线索数据失败", e);
        }
      }
    }
  }, [activeTab]);

  const clearLeads = () => {
    if (confirm("确定要清空所有本地存储的线索吗？此操作不可恢复。")) {
      localStorage.removeItem("jieyao_leads");
      setLeads([]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-brand-500">
      {/* 状态条 */}
      <div className="bg-green-600 text-white py-3 px-4 flex items-center justify-center gap-4 shadow-2xl">
        <ShieldCheck size={20} className="animate-bounce" />
        <span className="text-sm font-black uppercase tracking-widest">
          系统状态：在线 (SYSTEM ONLINE)
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500 transition-all"
            >
              <ArrowLeft size={24} className="text-brand-400" />
            </Link>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight">
                桂捷 ERP 管理中台
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                当前环境：生产环境 (Production) | 节点：8.130.xx.xx
              </p>
            </div>
          </div>
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 overflow-x-auto">
            <button
              onClick={() => setActiveTab("leads")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === "leads" ? "bg-brand-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
            >
              <MessageSquare size={14} />
              客户线索 (Local)
            </button>
            <button
              onClick={() => setActiveTab("cloud-ok")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === "cloud-ok" ? "bg-brand-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
            >
              <Activity size={14} />
              云端配置
            </button>
            <button
              onClick={() => setActiveTab("vnc-repair")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === "vnc-repair" ? "bg-brand-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
            >
              <Terminal size={14} />
              VNC 终端
            </button>
          </div>
        </div>

        {/* --- 客户线索面板 --- */}
        {activeTab === "leads" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <MessageSquare className="text-brand-400" />
                  最新咨询列表
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  注意：以下数据存储在当前浏览器的 LocalStorage
                  中。线上真实客户提交会通过邮件发送。
                </p>
              </div>
              {leads.length > 0 && (
                <button
                  onClick={clearLeads}
                  className="flex items-center gap-2 px-4 py-2 bg-red-900/30 text-red-400 border border-red-900/50 rounded-lg text-xs font-bold hover:bg-red-900/50 transition-colors"
                >
                  <Trash2 size={14} /> 清空记录
                </button>
              )}
            </div>

            {leads.length === 0 ? (
              <div className="bg-slate-900 rounded-[2rem] border border-slate-800 p-16 text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare size={40} className="text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-400">
                  暂无本地数据
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  请尝试在“联系我们”页面提交表单进行测试。
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-6 px-6 py-3 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-500"
                >
                  去提交测试
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-brand-500/30 transition-all"
                  >
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4 border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-900/50 rounded-full flex items-center justify-center text-brand-400 font-bold text-xl border border-brand-500/20">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            {lead.name}
                            <span className="px-2 py-0.5 rounded text-[10px] bg-brand-900 text-brand-300 border border-brand-700">
                              新咨询
                            </span>
                          </h3>
                          <p className="text-sm text-slate-400 flex items-center gap-2 mt-1">
                            <Building size={12} /> {lead.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-sm font-mono text-slate-400 flex items-center gap-2">
                          <Calendar size={12} /> {lead.date}
                        </div>
                        <div className="text-brand-400 font-bold font-mono flex items-center gap-2">
                          <Phone size={14} /> {lead.phone}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/50">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-slate-500 select-none mr-2">
                          需求描述:
                        </span>
                        {lead.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- 云端配置面板 --- */}
        {activeTab === "cloud-ok" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-8 lg:col-span-2">
              <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-green-400" />{" "}
                截图验证结论：配置无误
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                  <p className="text-brand-400 font-bold mb-1">ICMP 协议</p>
                  <p className="text-xs text-slate-500">
                    优先级 100 已允许全部。这意味着阿里云没有拦截您的 Ping
                    请求。
                  </p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                  <p className="text-brand-400 font-bold mb-1">RDP 3389</p>
                  <p className="text-xs text-slate-500">
                    优先级 100 已允许全部。这意味着远程桌面的“通道”已经建立。
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-start gap-4">
                <AlertTriangle
                  className="text-amber-500 flex-shrink-0"
                  size={24}
                />
                <p className="text-sm text-slate-400 leading-relaxed">
                  既然安全组正常但仍 Ping 不通，说明<b>服务器内部防火墙</b>
                  处于开启状态且设置了“禁
                  Ping”。我们需要绕过网络，通过阿里云的底层管理通道（VNC）进入系统。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem]">
                <h3 className="text-white font-bold mb-4">关键检查项</h3>
                <ul className="text-xs space-y-3 text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-green-500" />{" "}
                    实例是否运行中？
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-green-500" />{" "}
                    是否存在欠费？
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-slate-700" />{" "}
                    本地是否仍开着 VPN？
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* --- VNC 面板 --- */}
        {activeTab === "vnc-repair" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <MonitorPlay className="text-brand-600" size={32} />
                  <div>
                    <h2 className="text-2xl font-black">
                      通过 VNC 管理终端强制修复
                    </h2>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                      Management Console Bypass
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-slate-950 rounded-3xl text-white">
                    <h4 className="font-bold text-brand-400 mb-4 flex items-center gap-2">
                      <Key size={16} /> 1. 登录 VNC 终端
                    </h4>
                    <p className="text-xs text-slate-400 mb-4">
                      在阿里云控制台 -{">"} 实例详情 -{">"} 远程连接 -{">"} 选择{" "}
                      <b>VNC</b>。输入您设定的远程连接密码（通常是 6 位数字）。
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100">
                    <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                      <ShieldX size={18} className="text-red-500" /> 2.
                      彻底关闭内部防火墙
                    </h4>
                    <p className="text-sm text-slate-500 mb-4">
                      登录 Windows 后，按下{" "}
                      <kbd className="bg-slate-200 px-1 rounded text-xs font-mono">
                        Win + R
                      </kbd>{" "}
                      输入{" "}
                      <span className="font-mono font-bold text-slate-900">
                        powershell
                      </span>
                      ，然后输入：
                    </p>
                    <div className="bg-slate-900 p-4 rounded-xl relative group">
                      <code className="text-[11px] font-mono text-brand-400 break-all">
                        Set-NetFirewallProfile -Profile Domain,Public,Private
                        -Enabled False
                      </code>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100">
                    <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                      <Activity size={18} className="text-brand-600" /> 3.
                      重启网络适配器 (可选)
                    </h4>
                    <p className="text-sm text-slate-500 mb-4">
                      如果执行完上述命令仍不通，请在阿里云后台尝试{" "}
                      <b>“重启实例”</b>。
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => (window.location.href = "tel:19337226600")}
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
                  链路恢复后，我们将通过 RDP 挂载本地驱动器，将桂捷 ERP
                  的生产环境包（dist 文件夹）直接拷贝至服务器 C:\wwwroot 目录。
                </p>
                <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">
                    服务器规格
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">OS</span>
                      <span className="text-slate-300">
                        Windows Server 2022
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Region</span>
                      <span className="text-slate-300">
                        北京 (China North 2)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-600/10 border border-brand-500/20 rounded-[2rem] p-6 text-center">
                <p className="text-[10px] text-brand-400 font-bold uppercase tracking-widest mb-2">
                  正在等待连接信号
                </p>
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


import React from 'react';
import { Users, Award, Globe, Heart, Building2, Target, Zap, Server, ShieldCheck, Layout, ChevronRight, Terminal } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" alt="Office meeting" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">我们是捷耀</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            专注于利用先进技术帮助中国企业实现数字化转型。我们的使命是让每一个企业都能享受到智能管理的红利。
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">10+</div>
                      <div className="text-slate-500 font-medium">年行业经验</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">5000+</div>
                      <div className="text-slate-500 font-medium">服务企业</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">98%</div>
                      <div className="text-slate-500 font-medium">客户续费率</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-brand-600 mb-2">24/7</div>
                      <div className="text-slate-500 font-medium">技术支持</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Deployment & Tech Architecture */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">灵活的部署与卓越的架构</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">捷耀ERP采用全平台适配架构，无论您的企业偏好何种基础设施，我们都能完美落地。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Server className="w-10 h-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">全系统兼容</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                完美支持 <b>Windows Server (IIS/Node)</b> 与 <b>Linux (Nginx/Docker)</b> 环境。无论您的技术栈如何，我们都能无缝嵌入。
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">银行级安全控制</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                支持多种远程管理协议，包括传统的 <b>RDP (3389)</b> 与现代的 <b>SSH (22)</b>。保障核心商业机密在传输过程中的绝对安全。
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Layout className="w-10 h-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">响应式前端架构</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                基于 React 19 的单页应用架构，支持向日葵、FinalShell 等多种终端流畅访问管理后台。
              </p>
            </div>
          </div>

          {/* New: Technical Support Info Block */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/20 text-brand-400 rounded-full text-xs font-bold mb-6">
                        <Terminal size={14} /> 技术专家支持专栏
                      </div>
                      <h3 className="text-3xl font-bold mb-6">捷耀 ERP：Windows 快速部署指南</h3>
                      <div className="space-y-4 text-slate-300">
                          <p className="flex items-start gap-3">
                              <ChevronRight className="text-brand-500 mt-1 flex-shrink-0" size={18} />
                              <span><b>环境准备：</b> 确保服务器已安装 Node.js 环境，并开启 80 端口访问权限。</span>
                          </p>
                          <p className="flex items-start gap-3">
                              <ChevronRight className="text-brand-500 mt-1 flex-shrink-0" size={18} />
                              <span><b>数据安全：</b> 建议通过 RDP 远程桌面进行运维，修改默认 3389 端口以提升安全性。</span>
                          </p>
                          <p className="flex items-start gap-3">
                              <ChevronRight className="text-brand-500 mt-1 flex-shrink-0" size={18} />
                              <span><b>自动扩容：</b> 结合阿里云实例，支持在高并发期间自动提升处理能力。</span>
                          </p>
                      </div>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 w-full lg:w-80">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-4 tracking-widest">实时运维状态</p>
                      <div className="space-y-4">
                          <div className="flex justify-between items-center">
                              <span className="text-sm">RDP 服务 (3389)</span>
                              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">已就绪</span>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="text-sm">Node.js 运行时</span>
                              <span className="text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full">活跃中</span>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="text-sm">数据库连接状态</span>
                              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">已连接</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="py-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative mb-12 lg:mb-0">
               <div className="absolute inset-0 bg-brand-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80" 
                 alt="捷耀科技办公环境" 
                 className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
               />
            </div>
            
            {/* Text Side */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                关于捷耀科技
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                十年磨一剑，<br/>
                <span className="text-brand-600">致力成为企业数字化转型的领航者</span>
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  捷耀科技（Jieyao Tech）成立于2013年，总部位于江苏南京。作为国内领先的企业级SaaS服务商，我们始终坚持以“技术驱动商业革新”为核心理念，深耕ERP领域十余载。
                </p>
                <p>
                  我们的研发团队由来自阿里、华为等一线互联网大厂的资深架构师领衔。通过将云计算、大数据、人工智能等前沿技术与传统企业管理深度融合，捷耀打造出了具有高度灵活性、扩展性和安全性的新一代ERP系统。
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <Target className="w-8 h-8 text-brand-600 mb-2" />
                    <h4 className="font-bold text-slate-900">企业使命</h4>
                    <p className="text-sm text-slate-500">让管理更智能，让商业更简单</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <Zap className="w-8 h-8 text-brand-600 mb-2" />
                    <h4 className="font-bold text-slate-900">企业愿景</h4>
                    <p className="text-sm text-slate-500">构建万物互联的商业操作系统</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">我们的核心价值观</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { icon: Users, title: '以客户为中心', desc: '客户的成功是我们存在的唯一理由。' },
                  { icon: Award, title: '追求卓越', desc: '在产品和服务的每一个细节上力求完美。' },
                  { icon: Globe, title: '开放创新', desc: '拥抱变化，不断探索前沿技术的应用。' },
                  { icon: Heart, title: '诚信负责', desc: '对客户、员工和社会信守承诺。' }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-xl text-center hover:-translate-y-1 transition-transform group">
                      <div className="inline-flex p-3 bg-brand-100 text-brand-600 rounded-full mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AboutPage;

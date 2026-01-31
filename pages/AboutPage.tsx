import React from "react";
import {
  Users,
  Award,
  Globe,
  Heart,
  Building2,
  Target,
  Zap,
  Server,
  ShieldCheck,
  Layout,
  ChevronRight,
  Terminal,
} from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Office meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">
            我们是桂捷
          </h1>
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
              <div className="text-4xl font-bold text-brand-600 mb-2">
                5000+
              </div>
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

      {/* Company Profile */}
      <div className="py-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            {/* Image Side */}
            <div className="relative mb-12 lg:mb-0">
              <div className="absolute inset-0 bg-brand-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80"
                alt="桂捷科技办公环境"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>

            {/* Text Side */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                关于我们
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                我们是一家综合性公司
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  广西桂捷软件开发有限公司，南京捷耀软件开发有限公司均由孔令伟、刘春艳夫妇共同设立。
                </p>
                <p>
                  <strong>捷耀软件</strong>
                  成立于2015年，专注于企业ERP软件销售，企业大型数据库如SQL
                  SERVER,
                  ORACLE等国际知名数据库销售及售后技术支持，目前捷耀有员工30名，公司业务分布江苏、四川、河南、广西、广东等省份。
                </p>
                <p>
                  <strong>桂捷软件</strong>
                  成立于2021年，主要业务为智能设备研发、销售、玩具、成人玩具、初级农产品、企业管理咨询、信息化前沿技术研究等业务，公司立足于广西，面向东盟地区开展业务，目前在南宁同广西投资集团、广西农垦集团、广西产投集团、广西林业集团、广西轨道交通集团等建立广泛业务合作。
                </p>
                <p>
                  未来五年，公司计划将业务开展至全国及东盟地区，希望更多的专业人员加盟桂捷，欢迎您的加入！
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Target className="w-8 h-8 text-brand-600 mb-2" />
                  <h4 className="font-bold text-slate-900">企业使命</h4>
                  <p className="text-sm text-slate-500">
                    让管理更智能，让商业更简单
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="w-8 h-8 text-brand-600 mb-2" />
                  <h4 className="font-bold text-slate-900">企业愿景</h4>
                  <p className="text-sm text-slate-500">
                    构建万物互联的商业操作系统
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment & Tech Architecture (Kept from original but updated names if necessary) */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              灵活的部署与卓越的架构
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              桂捷ERP采用全平台适配架构，无论您的企业偏好何种基础设施，我们都能完美落地。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Server className="w-10 h-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">全系统兼容</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                完美支持 <b>Windows Server (IIS/Node)</b> 与{" "}
                <b>Linux (Nginx/Docker)</b>{" "}
                环境。无论您的技术栈如何，我们都能无缝嵌入。
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">银行级安全控制</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                支持多种远程管理协议，包括传统的 <b>RDP (3389)</b> 与现代的{" "}
                <b>SSH (22)</b>。保障核心商业机密在传输过程中的绝对安全。
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Layout className="w-10 h-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">响应式前端架构</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                基于 React 19 的单页应用架构，支持向日葵、FinalShell
                等多种终端流畅访问管理后台。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

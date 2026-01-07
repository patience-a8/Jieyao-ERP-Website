
import React, { useState } from 'react';
import { 
  Scissors, Scale, Calculator, Layers, Smartphone, 
  Printer, ShieldCheck, Rocket, ChevronRight, CheckCircle2,
  Factory, ArrowRight, LayoutGrid, HardHat, Beaker
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 案例数据定义 (目前只有一个，结构化以便未来扩展)
const CASES = [
  {
    id: 'paper',
    name: '纸品/造纸行业',
    icon: Scissors,
    partner: '浪潮软件 & 捷耀科技 联合研发',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: <>纸品行业<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">全产业链管理解决方案</span></>,
    description: '基于数十个纸厂项目的实施经验。专为纸厂及纸贸公司设计，贴合行业特性，完美解决分切、转包装、多计量单位换算等核心痛点。',
    tags: ['已服务江苏/河南/河北多地客户', '分切损耗自动计算'],
    themeColor: 'red'
  },
  {
    id: 'machinery',
    name: '机械加工 (建设中)',
    icon: HardHat,
    disabled: true
  },
  {
    id: 'chemical',
    name: '精细化工 (建设中)',
    icon: Beaker,
    disabled: true
  }
];

const CasesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('paper');
  const activeCase = CASES.find(c => c.id === activeTab) || CASES[0];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 顶部通用导航区 */}
      <div className="bg-slate-900 pt-28 pb-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                  <h1 className="text-3xl font-black text-white mb-2">行业标杆案例库</h1>
                  <p className="text-slate-400">捷耀ERP在不同垂直领域的深度实践</p>
              </div>
              
              {/* 行业切换 Tabs */}
              <div className="flex flex-wrap justify-center gap-4">
                  {CASES.map((item) => (
                      <button
                        key={item.id}
                        disabled={item.disabled}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border ${
                            activeTab === item.id 
                            ? 'bg-brand-600 border-brand-500 text-white shadow-lg shadow-brand-900/50 scale-105' 
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                        } ${item.disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                      >
                          <item.icon size={18} />
                          {item.name}
                      </button>
                  ))}
              </div>
          </div>
      </div>

      {/* 纸品行业案例内容 (作为组件渲染) */}
      {activeTab === 'paper' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Area Specific to Paper */}
            <div className="relative bg-slate-50 pt-16 pb-20 overflow-hidden border-b border-slate-200">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                     <Factory size={400} />
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 border border-red-200 text-xs font-bold mb-6">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    {activeCase.partner}
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            {activeCase.title}
                        </h2>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                            {activeCase.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/contact" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
                            预约演示 <ArrowRight size={18} />
                            </Link>
                            <div className="px-8 py-4 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 flex items-center justify-center gap-2">
                            <CheckCircle2 size={18} className="text-green-500" />
                            已落地 50+ 生产基地
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white p-2 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-100">
                             <img src={activeCase.heroImage} alt="Case Hero" className="rounded-2xl w-full h-auto object-cover" />
                             <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl max-w-xs text-left">
                                 <p className="text-xs font-bold text-slate-400 uppercase mb-1">关键成效</p>
                                 <p className="font-bold text-lg">分切损耗降低 15%</p>
                                 <p className="font-bold text-lg">库存周转率提升 30%</p>
                             </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <Scissors size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">智能分切计算</h3>
                            <p className="text-slate-500 text-sm mt-1">自动计算分切损耗与成本，防止重切漏切，优化物料利用率。</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                            <Scale size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">多计量自动换算</h3>
                            <p className="text-slate-500 text-sm mt-1">张/平方米/吨/千克自动转换，解决行业特有的卷筒与平板计量难题。</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                            <Factory size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">生产全流程追溯</h3>
                            <p className="text-slate-500 text-sm mt-1">按克重、规格、颜色精细分类，从原料到成品一码追溯。</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Detailed Content Sections */}
            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {/* Section 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Solution 01</div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">行业定制化专业解决方案</h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">1</div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">精准匹配纸品特性</h4>
                                    <p className="text-slate-600 mt-1">覆盖纸板、纸箱、包装等细分领域，解决订单式生产、多规格纸品管理及复杂排产问题。</p>
                                </div>
                            </li>
                            <li className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">2</div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">多维度产品精细分类</h4>
                                    <p className="text-slate-600 mt-1">支持按类型、克重、规格、颜色等分类，满足高品质管理要求。</p>
                                </div>
                            </li>
                            <li className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">3</div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">多计量数据自动化</h4>
                                    <p className="text-slate-600 mt-1">特殊设计换算引擎，自动处理复杂单位转换，下单更快速。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl">
                        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                <span className="font-bold text-slate-700">物料换算模拟</span>
                                <Calculator className="text-slate-400" size={20} />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">原纸规格 (卷筒)</span>
                                    <span className="font-mono font-bold">140g/m²</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">分切指令</span>
                                    <span className="font-mono font-bold">787mm x 1092mm</span>
                                </div>
                                <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-bold flex justify-between">
                                    <span>自动计算吨重</span>
                                    <span>2.45 吨</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                                <span className="font-bold text-slate-700">产品分类树</span>
                                <Layers className="text-slate-400" size={20} />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">白卡纸</span>
                                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">牛皮纸</span>
                                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">瓦楞纸</span>
                                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded font-bold">特种纸</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                        <div className="relative z-10 grid gap-4">
                            <div className="bg-white p-6 rounded-xl flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 p-3 rounded-full">
                                    <Smartphone className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-lg">移动端报工</p>
                                    <p className="text-sm text-slate-500 mt-1">扫码即录入，库存实时更新，告别纸质单据</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 p-3 rounded-full">
                                    <Printer className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-lg">分切单直达机台</p>
                                    <p className="text-sm text-slate-500 mt-1">免去手工录入，杜绝规格错误，提升良品率</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="text-blue-600 font-bold tracking-widest uppercase mb-2 text-sm">Solution 02</div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">一体化平台 & 高效体验</h2>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <LayoutGrid size={20} className="text-blue-500" /> 全流程集成
                                </h4>
                                <p className="text-slate-600 leading-relaxed">
                                    整合采购、生产、库存、销售、财务等核心模块。消除信息孤岛，实现从接单到出库的闭环管理。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <Rocket size={20} className="text-blue-500" /> 自动化数据流
                                </h4>
                                <p className="text-slate-600 leading-relaxed">
                                    分切申请审核后，参数自动下达到机台终端。工人无需手工录入规格，彻底防止重切、漏切等人为事故。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">强化生产与质控</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            集成MES系统，实时跟踪进度。利用条码技术记录全流程，从原料到成品一码到底，质量问题快速追溯。
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">安全可靠的保障</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            支持集团化多公司、多地点运营。数据加密传输，权限严格控制，提供“扶上马，送一程”的持续技术支持。
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">灵活扩展与定制</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            具备高度可定制性，根据企业规模提供二次开发。支持从单体到集团化的平滑过渡，适应未来发展。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )}
      
      {/* Footer CTA */}
      <div className="bg-slate-900 py-16">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">开启行业数字化转型</h2>
            <p className="text-slate-400 mb-8 text-lg">
                无论您属于哪个行业，我们都有成熟的落地经验。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors">
                    获取解决方案
                </Link>
                <a href="tel:19337226600" className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                    电话咨询：19337226600
                </a>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CasesPage;

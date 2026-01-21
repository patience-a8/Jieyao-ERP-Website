import React, { useState } from 'react';
import { 
  Scissors, Scale, Calculator, Layers, Smartphone, 
  Printer, ShieldCheck, Rocket, CheckCircle2,
  Factory, ArrowRight, LayoutGrid, HardHat, Beaker,
  LucideIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 类型定义 ---
interface CaseStat {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: 'blue' | 'orange' | 'purple' | 'green' | 'indigo';
}

interface SolutionPoint {
  title: string;
  desc: string;
}

interface CaseData {
  id: string;
  name: string;
  navIcon: LucideIcon;
  disabled?: boolean;
  partner: string;
  hero: {
    title: React.ReactNode;
    description: string;
    image: string;
    stats: { label: string; value: string }[];
    tag: string;
  };
  introStats: CaseStat[];
  solution1: {
    badge: string;
    title: string;
    points: SolutionPoint[];
    visualType: 'paper-calc' | 'generic'; // 可扩展更多可视化类型
  };
  solution2: {
    badge: string;
    title: string;
    features: { icon: LucideIcon; title: string; desc: string }[];
    bullets: { icon: LucideIcon; title: string; desc: string }[];
  };
  moreFeatures: CaseStat[];
}

// --- 数据仓库 (模拟数据库) ---
const CASE_DATABASE: CaseData[] = [
  {
    id: 'paper',
    name: '纸品/造纸行业',
    navIcon: Scissors,
    partner: '浪潮软件 & 桂捷科技 联合研发',
    hero: {
      title: <>纸品行业<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">全产业链管理解决方案</span></>,
      description: '基于数十个纸厂项目的实施经验。专为纸厂及纸贸公司设计，贴合行业特性，完美解决分切、转包装、多计量单位换算等核心痛点。',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      stats: [
        { label: '分切损耗降低', value: '15%' },
        { label: '库存周转提升', value: '30%' }
      ],
      tag: '已落地 50+ 生产基地'
    },
    introStats: [
      { icon: Scissors, title: '智能分切计算', desc: '自动计算分切损耗与成本，防止重切漏切，优化物料利用率。', color: 'blue' },
      { icon: Scale, title: '多计量自动换算', desc: '张/平方米/吨/千克自动转换，解决行业特有的卷筒与平板计量难题。', color: 'orange' },
      { icon: Factory, title: '生产全流程追溯', desc: '按克重、规格、颜色精细分类，从原料到成品一码追溯。', color: 'purple' }
    ],
    solution1: {
      badge: 'Solution 01',
      title: '行业定制化专业解决方案',
      points: [
        { title: '精准匹配纸品特性', desc: '覆盖纸板、纸箱、包装等细分领域，解决订单式生产、多规格纸品管理及复杂排产问题。' },
        { title: '多维度产品精细分类', desc: '支持按类型、克重、规格、颜色等分类，满足高品质管理要求。' },
        { title: '多计量数据自动化', desc: '特殊设计换算引擎，自动处理复杂单位转换，下单更快速。' }
      ],
      visualType: 'paper-calc'
    },
    solution2: {
      badge: 'Solution 02',
      title: '一体化平台 & 高效体验',
      features: [
        { icon: Smartphone, title: '移动端报工', desc: '扫码即录入，库存实时更新，告别纸质单据' },
        { icon: Printer, title: '分切单直达机台', desc: '免去手工录入，杜绝规格错误，提升良品率' }
      ],
      bullets: [
        { icon: LayoutGrid, title: '全流程集成', desc: '整合采购、生产、库存、销售、财务等核心模块。消除信息孤岛，实现从接单到出库的闭环管理。' },
        { icon: Rocket, title: '自动化数据流', desc: '分切申请审核后，参数自动下达到机台终端。工人无需手工录入规格，彻底防止重切、漏切等人为事故。' }
      ]
    },
    moreFeatures: [
      { icon: ShieldCheck, title: '强化生产与质控', desc: '集成MES系统，实时跟踪进度。利用条码技术记录全流程，从原料到成品一码到底。', color: 'green' },
      { icon: ShieldCheck, title: '安全可靠的保障', desc: '支持集团化多公司、多地点运营。数据加密传输，权限严格控制，提供持续技术支持。', color: 'indigo' },
      { icon: Rocket, title: '灵活扩展与定制', desc: '具备高度可定制性，根据企业规模提供二次开发。支持从单体到集团化的平滑过渡。', color: 'orange' }
    ]
  },
  {
    id: 'machinery',
    name: '机械加工 (建设中)',
    navIcon: HardHat,
    disabled: true,
    partner: '',
    hero: { title: '', description: '', image: '', stats: [], tag: '' },
    introStats: [],
    solution1: { badge: '', title: '', points: [], visualType: 'generic' },
    solution2: { badge: '', title: '', features: [], bullets: [] },
    moreFeatures: []
  },
  {
    id: 'chemical',
    name: '精细化工 (建设中)',
    navIcon: Beaker,
    disabled: true,
    partner: '',
    hero: { title: '', description: '', image: '', stats: [], tag: '' },
    introStats: [],
    solution1: { badge: '', title: '', points: [], visualType: 'generic' },
    solution2: { badge: '', title: '', features: [], bullets: [] },
    moreFeatures: []
  }
];

// --- 通用案例模板组件 ---
const CaseTemplate: React.FC<{ data: CaseData }> = ({ data }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 1. Hero Area */}
      <div className="relative bg-slate-50 pt-16 pb-20 overflow-hidden border-b border-slate-200">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <Factory size={400} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 border border-red-200 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {data.partner}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                      {data.hero.title}
                  </h2>
                  <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                      {data.hero.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link to="/contact" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
                        预约演示 <ArrowRight size={18} />
                      </Link>
                      <div className="px-8 py-4 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 flex items-center justify-center gap-2">
                        <CheckCircle2 size={18} className="text-green-500" />
                        {data.hero.tag}
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="bg-white p-2 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-100">
                        <img src={data.hero.image} alt="Case Hero" className="rounded-2xl w-full h-auto object-cover" />
                        <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl max-w-xs text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-1">关键成效</p>
                            {data.hero.stats.map((stat, idx) => (
                              <p key={idx} className="font-bold text-lg">{stat.label} {stat.value}</p>
                            ))}
                        </div>
                  </div>
              </div>
          </div>
          </div>
      </div>

      {/* 2. Intro Stats Cards */}
      <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.introStats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all">
                      <div className={`p-3 rounded-xl bg-${stat.color}-100 text-${stat.color}-600`}>
                          <stat.icon size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-slate-900 text-lg">{stat.title}</h3>
                          <p className="text-slate-500 text-sm mt-1">{stat.desc}</p>
                      </div>
                  </div>
                ))}
            </div>
          </div>
      </div>

      {/* 3. Detailed Solutions */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Solution 01 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <div className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">{data.solution1.badge}</div>
                  <h2 className="text-3xl font-black text-slate-900 mb-6">{data.solution1.title}</h2>
                  <ul className="space-y-6">
                      {data.solution1.points.map((point, idx) => (
                        <li key={idx} className="flex gap-4 group">
                            <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                              {idx + 1}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800">{point.title}</h4>
                                <p className="text-slate-600 mt-1">{point.desc}</p>
                            </div>
                        </li>
                      ))}
                  </ul>
              </div>
              
              {/* Visual Component - 目前针对纸品行业定制，可扩展 switch case 处理其他行业 */}
              {data.solution1.visualType === 'paper-calc' && (
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
              )}
          </div>

          {/* Solution 02 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="order-2 md:order-1 bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative z-10 grid gap-4">
                      {data.solution2.features.map((feat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-blue-50 p-3 rounded-full">
                                <feat.icon className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-lg">{feat.title}</p>
                                <p className="text-sm text-slate-500 mt-1">{feat.desc}</p>
                            </div>
                        </div>
                      ))}
                  </div>
              </div>
              <div className="order-1 md:order-2">
                  <div className="text-blue-600 font-bold tracking-widest uppercase mb-2 text-sm">{data.solution2.badge}</div>
                  <h2 className="text-3xl font-black text-slate-900 mb-6">{data.solution2.title}</h2>
                  <div className="space-y-8">
                      {data.solution2.bullets.map((bullet, idx) => (
                        <div key={idx}>
                            <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <bullet.icon size={20} className="text-blue-500" /> {bullet.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                {bullet.desc}
                            </p>
                        </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* More Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
              {data.moreFeatures.map((feat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className={`w-12 h-12 bg-${feat.color}-100 text-${feat.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                        <feat.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        {feat.desc}
                    </p>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
};

// --- 主页面组件 ---
const CasesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('paper');
  const activeCase = CASE_DATABASE.find(c => c.id === activeTab) || CASE_DATABASE[0];

  return (
    <div className="bg-white min-h-screen">
      {/* 顶部通用导航区 */}
      <div className="bg-slate-900 pt-28 pb-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                  <h1 className="text-3xl font-black text-white mb-2">行业标杆案例库</h1>
                  <p className="text-slate-400">桂捷ERP在不同垂直领域的深度实践</p>
              </div>
              
              {/* 行业切换 Tabs */}
              <div className="flex flex-wrap justify-center gap-4">
                  {CASE_DATABASE.map((item) => (
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
                          <item.navIcon size={18} />
                          {item.name}
                      </button>
                  ))}
              </div>
          </div>
      </div>

      {/* 渲染当前选中的案例模板 */}
      <CaseTemplate data={activeCase} />
      
      {/* Footer CTA */}
      <div className="bg-slate-900 py-16 border-t border-slate-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">开启行业数字化转型</h2>
            <p className="text-slate-400 mb-8 text-lg">
                无论您属于哪个行业，我们都有成熟的落地经验。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors">
                    获取解决方案
                </Link>
                <a href="tel:17721531163" className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                    电话咨询
                </a>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CasesPage;
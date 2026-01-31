import React, { useState } from "react";
import {
  Scissors,
  Scale,
  Calculator,
  Layers,
  Smartphone,
  Printer,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Factory,
  ArrowRight,
  LayoutGrid,
  HardHat,
  Beaker,
  LucideIcon,
  Settings,
  Wrench,
  FileCode,
  FlaskConical,
  AlertTriangle,
  History,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- 类型定义 ---
interface CaseStat {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: "blue" | "orange" | "purple" | "green" | "indigo" | "red";
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
    visualType: "paper-calc" | "machinery-bom" | "chemical-formula" | "generic";
  };
  solution2: {
    badge: string;
    title: string;
    features: { icon: LucideIcon; title: string; desc: string }[];
    bullets: { icon: LucideIcon; title: string; desc: string }[];
  };
  moreFeatures: CaseStat[];
}

// --- 数据仓库 ---
const CASE_DATABASE: CaseData[] = [
  {
    id: "paper",
    name: "纸品/造纸行业",
    navIcon: Scissors,
    partner: "浪潮软件 & 桂捷科技 联合研发",
    hero: {
      title: (
        <>
          纸品行业
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            全产业链管理解决方案
          </span>
        </>
      ),
      description:
        "基于数十个纸厂项目的实施经验。专为纸厂及纸贸公司设计，贴合行业特性，完美解决分切、转包装、多计量单位换算等核心痛点。",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: [
        { label: "分切损耗降低", value: "15%" },
        { label: "库存周转提升", value: "30%" },
      ],
      tag: "已落地 50+ 生产基地",
    },
    introStats: [
      {
        icon: Scissors,
        title: "智能分切计算",
        desc: "自动计算分切损耗与成本，防止重切漏切，优化物料利用率。",
        color: "blue",
      },
      {
        icon: Scale,
        title: "多计量自动换算",
        desc: "张/平方米/吨/千克自动转换，解决行业特有的卷筒与平板计量难题。",
        color: "orange",
      },
      {
        icon: Factory,
        title: "生产全流程追溯",
        desc: "按克重、规格、颜色精细分类，从原料到成品一码追溯。",
        color: "purple",
      },
    ],
    solution1: {
      badge: "Solution 01",
      title: "行业定制化专业解决方案",
      points: [
        {
          title: "精准匹配纸品特性",
          desc: "覆盖纸板、纸箱、包装等细分领域，解决订单式生产、多规格纸品管理及复杂排产问题。",
        },
        {
          title: "多维度产品精细分类",
          desc: "支持按类型、克重、规格、颜色等分类，满足高品质管理要求。",
        },
        {
          title: "多计量数据自动化",
          desc: "特殊设计换算引擎，自动处理复杂单位转换，下单更快速。",
        },
      ],
      visualType: "paper-calc",
    },
    solution2: {
      badge: "Solution 02",
      title: "一体化平台 & 高效体验",
      features: [
        {
          icon: Smartphone,
          title: "移动端报工",
          desc: "扫码即录入，库存实时更新，告别纸质单据",
        },
        {
          icon: Printer,
          title: "分切单直达机台",
          desc: "免去手工录入，杜绝规格错误，提升良品率",
        },
      ],
      bullets: [
        {
          icon: LayoutGrid,
          title: "全流程集成",
          desc: "整合采购、生产、库存、销售、财务等核心模块。消除信息孤岛，实现从接单到出库的闭环管理。",
        },
        {
          icon: Rocket,
          title: "自动化数据流",
          desc: "分切申请审核后，参数自动下达到机台终端。工人无需手工录入规格，彻底防止重切、漏切等人为事故。",
        },
      ],
    },
    moreFeatures: [
      {
        icon: ShieldCheck,
        title: "强化生产与质控",
        desc: "集成MES系统，实时跟踪进度。利用条码技术记录全流程，从原料到成品一码到底。",
        color: "green",
      },
      {
        icon: ShieldCheck,
        title: "安全可靠的保障",
        desc: "支持集团化多公司、多地点运营。数据加密传输，权限严格控制，提供持续技术支持。",
        color: "indigo",
      },
      {
        icon: Rocket,
        title: "灵活扩展与定制",
        desc: "具备高度可定制性，根据企业规模提供二次开发。支持从单体到集团化的平滑过渡。",
        color: "orange",
      },
    ],
  },
  {
    id: "machinery",
    name: "机械加工行业",
    navIcon: HardHat,
    partner: "捷耀软件 & 装备制造协会 联合打造",
    hero: {
      title: (
        <>
          离散制造
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            数字化车间解决方案
          </span>
        </>
      ),
      description:
        "面向机械加工、五金冲压及零部件制造企业。深度解决BOM多级版本管理、工序流转复杂、委外加工难管控等离散制造核心痛点。",
      image:
        "https://images.unsplash.com/photo-1531297461136-82lw9z197143?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: [
        { label: "准时交付率", value: "+25%" },
        { label: "在制品库存", value: "-40%" },
      ],
      tag: "支持 10+ 层级 BOM",
    },
    introStats: [
      {
        icon: Layers,
        title: "复杂BOM管理",
        desc: "支持多版本、多层级BOM，精准核算材料定额与工艺路线。",
        color: "blue",
      },
      {
        icon: Workflow,
        title: "工序级排产",
        desc: "精细化到每道工序的生产计划，实时掌握车间加工进度。",
        color: "indigo",
      },
      {
        icon: Wrench,
        title: "设备全生命周期",
        desc: "建立设备电子档案，预测性维护，减少意外停机时间。",
        color: "orange",
      },
    ],
    solution1: {
      badge: "Core Features",
      title: "透明化生产执行体系",
      points: [
        {
          title: "工序流转卡管理",
          desc: "一单到底，通过扫码汇报每道工序的良品/不良品数量，实时计算计件工资。",
        },
        {
          title: "无缝委外协同",
          desc: "针对热处理、电镀等常见委外工序，建立发料、回厂检验闭环，杜绝物料流失。",
        },
        {
          title: "模具与刀具管理",
          desc: "记录模具使用寿命与维修记录，自动预警保养，保障加工精度。",
        },
      ],
      visualType: "machinery-bom",
    },
    solution2: {
      badge: "Integration",
      title: "设计生产一体化",
      features: [
        {
          icon: FileCode,
          title: "图纸云端协同",
          desc: "车间平板直接查看最新3D图纸，避免加工旧版本",
        },
        {
          icon: Settings,
          title: "非标自动化",
          desc: "支持边设计边生产模式，灵活应对非标定制变更",
        },
      ],
      bullets: [
        {
          icon: Calculator,
          title: "精细化成本核算",
          desc: "将材料费、人工工时、机器折旧分摊到每一个零件，精准计算实际生产成本。",
        },
        {
          icon: LayoutGrid,
          title: "项目制管理",
          desc: "以项目为核心，全程跟踪试制、打样、量产全过程，确保项目利润可控。",
        },
      ],
    },
    moreFeatures: [
      {
        icon: Smartphone,
        title: "车间看板",
        desc: "大屏可视化展示各工单进度、设备负荷状态，异常情况自动亮灯报警。",
        color: "blue",
      },
      {
        icon: ShieldCheck,
        title: "质量追溯",
        desc: "从来料检验(IQC)到过程检验(IPQC)再到出货检验(OQC)，建立完整质量档案。",
        color: "green",
      },
      {
        icon: Rocket,
        title: "ERP+MES融合",
        desc: "不仅管结果，更管过程。打通底层设备数据，实现真正的智能制造。",
        color: "purple",
      },
    ],
  },
  {
    id: "chemical",
    name: "精细化工行业",
    navIcon: FlaskConical,
    partner: "桂捷科技 & 化工园区 标杆项目",
    hero: {
      title: (
        <>
          流程制造
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600">
            配方与合规双核驱动
          </span>
        </>
      ),
      description:
        "专为涂料、油墨、日化及中间体企业设计。严控配方保密，实现批次效期严格管理与全链路质量追溯，符合安监环保要求。",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: [
        { label: "配方精准度", value: "100%" },
        { label: "追溯响应", value: "<2min" },
      ],
      tag: "GHS/MSDS 合规",
    },
    introStats: [
      {
        icon: FlaskConical,
        title: "核心配方保密",
        desc: "配方版本严格权限控制，投料单自动脱敏，保护企业核心资产。",
        color: "green",
      },
      {
        icon: History,
        title: "批次效期管理",
        desc: "先进先出(FIFO)强制控制，近效期自动预警，降低呆滞报废。",
        color: "red",
      },
      {
        icon: Scale,
        title: "计量精准对接",
        desc: "对接地磅、反应釜称重模块，杜绝人工记录误差，确保投料精准。",
        color: "blue",
      },
    ],
    solution1: {
      badge: "Safety & Quality",
      title: "严谨的质量与安全体系",
      points: [
        {
          title: "全程批次追溯",
          desc: "正向查询成品流向，反向追溯原料批次。一键生成质量追溯报告，应对客户审厂。",
        },
        {
          title: "危化品合规管理",
          desc: "针对易制毒、易制爆化学品建立专项出入库台账，符合公安与安监监管要求。",
        },
        {
          title: "釜/罐存量动态监控",
          desc: "实时掌握储罐液位与库存量，根据反应釜容量智能运算投料计划。",
        },
      ],
      visualType: "chemical-formula",
    },
    solution2: {
      badge: "Operation",
      title: "数字化实验室 (LIMS)",
      features: [
        {
          icon: Beaker,
          title: "研发管理",
          desc: "记录打样实验数据，快速将实验配方转化为生产BOM",
        },
        {
          icon: ShieldCheck,
          title: "质检集成",
          desc: "自动采集检测设备数据，生成COA质检报告单",
        },
      ],
      bullets: [
        {
          icon: AlertTriangle,
          title: "安全库存预警",
          desc: "根据销售预测与生产计划，自动计算安全库存，防止缺料停产或库存积压。",
        },
        {
          icon: Calculator,
          title: "多单位换算",
          desc: "支持 桶/KG/吨/升 等多单位并行，自动换算比重，解决采购与领用单位不一致问题。",
        },
      ],
    },
    moreFeatures: [
      {
        icon: Settings,
        title: "设备维护",
        desc: "建立设备点巡检制度，保障反应釜、锅炉等关键设备安全稳定运行。",
        color: "orange",
      },
      {
        icon: FileCode,
        title: "申报对接",
        desc: "支持与政府监管平台数据对接，自动化上报危化品流向信息。",
        color: "blue",
      },
      {
        icon: Smartphone,
        title: "移动巡检",
        desc: "巡检人员手持PDA扫描设备二维码，现场录入隐患信息，闭环整改。",
        color: "green",
      },
    ],
  },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
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
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
                >
                  预约演示 <ArrowRight size={18} />
                </Link>
                <div className="px-8 py-4 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  {data.hero.tag}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-2 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-100 group">
                <img
                  src={data.hero.image}
                  alt="Case Hero"
                  className="rounded-2xl w-full h-auto object-cover max-h-[400px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl max-w-xs text-left group-hover:scale-105 transition-transform">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                    关键成效
                  </p>
                  {data.hero.stats.map((stat, idx) => (
                    <p
                      key={idx}
                      className="font-bold text-lg border-b border-slate-700 last:border-0 py-1"
                    >
                      {stat.label}:{" "}
                      <span className="text-brand-400">{stat.value}</span>
                    </p>
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
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all group"
              >
                <div
                  className={`p-3 rounded-xl bg-${stat.color}-100 text-${stat.color}-600 group-hover:bg-${stat.color}-600 group-hover:text-white transition-colors`}
                >
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {stat.title}
                  </h3>
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
            <div className="text-brand-600 font-bold tracking-widest uppercase mb-2 text-sm">
              {data.solution1.badge}
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              {data.solution1.title}
            </h2>
            <ul className="space-y-6">
              {data.solution1.points.map((point, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 text-brand-600 rounded-2xl flex items-center justify-center font-bold group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">
                      {point.title}
                    </h4>
                    <p className="text-slate-600 mt-1">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Components - 针对不同行业显示不同示意图 */}
          <div className="h-full flex flex-col justify-center">
            {data.solution1.visualType === "paper-calc" && (
              <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-700">
                      物料换算模拟
                    </span>
                    <Calculator className="text-slate-400" size={20} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">原纸规格</span>
                      <span className="font-mono font-bold">140g/m²</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">分切指令</span>
                      <span className="font-mono font-bold">
                        787mm x 1092mm
                      </span>
                    </div>
                    <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-bold flex justify-between">
                      <span>自动计算吨重</span>
                      <span>2.45 吨</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {data.solution1.visualType === "machinery-bom" && (
              <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-50"></div>
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-700">BOM 结构树</span>
                    <Layers className="text-blue-500" size={20} />
                  </div>
                  <div className="space-y-4 pl-2 border-l-2 border-slate-200 ml-2">
                    <div className="relative">
                      <div className="absolute -left-[17px] top-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                      <p className="font-bold text-sm">成品：精密减速机</p>
                      <p className="text-xs text-slate-400">
                        Ver 2.1 | 状态: 量产
                      </p>
                    </div>
                    <div className="space-y-3 pl-4 border-l-2 border-slate-200 ml-1">
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-slate-400 rounded-full"></div>
                        <div className="bg-slate-50 p-2 rounded text-xs flex justify-between">
                          <span>半成品：行星轮组件</span>
                          <span className="text-orange-500 font-bold">
                            自制
                          </span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-slate-400 rounded-full"></div>
                        <div className="bg-slate-50 p-2 rounded text-xs flex justify-between">
                          <span>原材料：40Cr钢材</span>
                          <span className="text-blue-500 font-bold">采购</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-slate-400 rounded-full"></div>
                        <div className="bg-slate-50 p-2 rounded text-xs flex justify-between">
                          <span>工序：热处理</span>
                          <span className="text-purple-500 font-bold">
                            委外
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {data.solution1.visualType === "chemical-formula" && (
              <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-700">
                      配方保密控制
                    </span>
                    <ShieldCheck className="text-green-500" size={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                        <div className="h-1.5 w-24 bg-slate-100 rounded"></div>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        可见
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-red-50 border border-red-100 rounded-lg">
                      <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-xs font-bold text-red-500">
                        B
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-12 bg-red-200 rounded mb-1"></div>
                        <div className="h-1.5 w-20 bg-red-100 rounded"></div>
                      </div>
                      <span className="text-xs font-mono text-red-500 font-bold">
                        已加密
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                        C
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                        <div className="h-1.5 w-24 bg-slate-100 rounded"></div>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        可见
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-flex items-center text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <CheckCircle2 size={10} className="mr-1" />{" "}
                      普通操作员仅见代号
                    </span>
                  </div>
                </div>
              </div>
            )}
            {data.solution1.visualType === "generic" && (
              <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                    <data.navIcon size={48} className="text-slate-400" />
                  </div>
                  <p className="text-slate-500 font-medium">
                    行业特性化业务流程
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    （标准版行业架构图）
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Solution 02 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 bg-slate-100 rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10 grid gap-4">
              {data.solution2.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl flex items-center gap-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="bg-brand-50 p-3 rounded-full">
                    <feat.icon className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">
                      {feat.title}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-brand-600 font-bold tracking-widest uppercase mb-2 text-sm">
              {data.solution2.badge}
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              {data.solution2.title}
            </h2>
            <div className="space-y-8">
              {data.solution2.bullets.map((bullet, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <bullet.icon size={20} className="text-brand-500" />{" "}
                    {bullet.title}
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
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 bg-${feat.color}-100 text-${feat.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feat.title}
              </h3>
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
  const [activeTab, setActiveTab] = useState("paper");
  const activeCase =
    CASE_DATABASE.find((c) => c.id === activeTab) || CASE_DATABASE[0];

  return (
    <div className="bg-white min-h-screen">
      {/* 顶部通用导航区 */}
      <div className="bg-slate-900 pt-28 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white mb-2">
              行业标杆案例库
            </h1>
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
                    ? "bg-brand-600 border-brand-500 text-white shadow-lg shadow-brand-900/50 scale-105"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                } ${item.disabled ? "opacity-50 cursor-not-allowed grayscale" : ""}`}
              >
                <item.navIcon size={18} />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 渲染当前选中的案例模板 */}
      <CaseTemplate key={activeCase.id} data={activeCase} />

      {/* Footer CTA */}
      <div className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            开启行业数字化转型
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            无论您属于哪个行业，我们都有成熟的落地经验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors"
            >
              获取解决方案
            </Link>
            <a
              href="tel:17721531163"
              className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
            >
              电话咨询
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;

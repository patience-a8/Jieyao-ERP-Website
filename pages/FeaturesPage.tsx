import React from "react";
import {
  Package,
  DollarSign,
  Users,
  PieChart,
  Factory,
  Truck,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Feature } from "../types";
import { Link } from "react-router-dom";
const featuresList: Feature[] = [
  {
    title: "柔性生产制造系统",
    description:
      "支持多种生产模式（MTS/MTO）。通过MRP运算精准规划生产物料，实时监控设备状态与生产工序进度。内置QMS质量管理体系，确保每一道工序都符合行业标准。",
    icon: Factory,
  },
  {
    title: "智慧仓储与WMS",
    description:
      "多仓库实时互通，支持条码/RFID自动化作业。系统化管理批次、保质期及库龄。智能拣货算法提升200%出入库效率，彻底告别“找货难”。",
    icon: Package,
  },
  {
    title: "端到端供应链协同",
    description:
      "一键生成采购计划，与外部供应商实现数据互联。从销售订单下达到物流跟踪，全生命周期可视化，大幅缩减交货周期。",
    icon: Truck,
  },
  {
    title: "智能报表与BI看板",
    description:
      "预设生产监控、财务分析、销售日报等多个专题仪表盘。支持移动端推送重要业务预警，让管理层随时随地掌握经营动脉。",
    icon: PieChart,
  },
  {
    title: "业财一体化财务中心",
    description:
      "实现业务发生即财务入账。自动结转成本，支持多级财务审核流。深度对接国内主流税务系统，实现一键报税，合规高效。",
    icon: DollarSign,
  },
  {
    title: "HCM全流程人才管理",
    description:
      "从人才画像精准招聘到员工绩效全量化考核。不仅是考勤工具，更是企业组织发展的加速器，助力构建高绩效团队。",
    icon: Users,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            全模块覆盖，<span className="text-brand-600">重塑企业管理效能</span>
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            桂捷ERP将分散的业务单元整合为统一的高效运作系统。无论您是追求极致效率的制造商，还是强调敏捷反应的贸易商，都能找到最契合的方案。
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {featuresList.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center p-4 bg-brand-100 text-brand-600 rounded-xl shadow-sm">
                  <feature.icon className="h-8 w-8" />
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700"
                  >
                    了解模块详情 <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                更强的兼容性，更广的连接
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                桂捷ERP支持与各行业主流软件及硬件系统的深度集成。通过标准API接口，您可以轻松连接现有的办公生态。
              </p>
              <ul className="space-y-3">
                {[
                  "PLM/MES 生产执行系统",
                  "金蝶/用友财务数据迁移",
                  "主流电商平台订单抓取",
                  "工业物联网传感器接入",
                ].map((item) => (
                  <li key={item} className="flex items-center text-brand-100">
                    <CheckCircle2 size={20} className="mr-3 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">
                  PLC设备
                </div>
                <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">
                  移动手持
                </div>
                <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">
                  钉钉办公
                </div>
                <div className="bg-brand-600 h-24 rounded-lg flex items-center justify-center text-white font-bold shadow-lg scale-105 z-10 text-lg">
                  桂捷ERP
                </div>
                <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">
                  银企直连
                </div>
                <div className="bg-slate-700 h-24 rounded-lg flex items-center justify-center text-slate-400 font-semibold">
                  物流接口
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

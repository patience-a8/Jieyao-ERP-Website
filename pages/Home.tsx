import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DataVisual from "../components/DataVisual";
import Benefits from "../components/Benefits";
import { Phone, MapPin, Mail, QrCode, Building2 } from "lucide-react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Company Profile Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              公司简介
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              我们是一家综合性公司
            </h2>
          </div>
          <div className="prose prose-lg text-slate-600 mx-auto text-justify leading-relaxed max-w-4xl bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <p className="mb-6">
              广西桂捷软件开发有限公司，南京捷耀软件开发有限公司均由孔令伟、刘春艳夫妇共同设立。
            </p>
            <p className="mb-6">
              <strong>捷耀软件</strong>
              成立于2015年，专注于企业ERP软件销售，企业大型数据库如SQL
              SERVER、ORACLE等国际知名数据库销售及售后技术支持。目前捷耀有员工30名，公司业务分布江苏、四川、河南、广西、广东等省份。
            </p>
            <p className="mb-6">
              <strong>桂捷软件</strong>
              成立于2021年，主要业务为智能设备研发、销售、玩具、成人玩具、初级农产品、企业管理咨询、信息化前沿技术研究等业务。公司立足于广西，面向东盟地区开展业务，目前在南宁同广西投资集团、广西农垦集团、广西产投集团、广西林业集团、广西轨道交通集团等建立广泛业务合作。
            </p>
            <p>
              未来五年，公司计划将业务开展至全国及东盟地区，希望更多的专业人员加盟桂捷，欢迎您的加入！
            </p>
          </div>
        </div>
      </section>

      <Features />
      <DataVisual />
      <Benefits />

      {/* Detailed Contact Section (Replaces previous CTA) */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          {/* Phones - One line, spaced out */}
          <div className="mb-16 text-center">
            <p className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-6">
              咨询热线
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-2xl md:text-3xl font-black font-mono">
              <a
                href="tel:17721531163"
                className="hover:text-brand-400 transition-colors"
              >
                177 2153 1163
              </a>
              <a
                href="tel:17761723165"
                className="hover:text-brand-400 transition-colors"
              >
                177 6172 3165
              </a>
              <a
                href="tel:19337226600"
                className="hover:text-brand-400 transition-colors"
              >
                193 3722 6600
              </a>
              <a
                href="tel:19337233927"
                className="hover:text-brand-400 transition-colors"
              >
                193 3723 3927
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-slate-400">
              <a
                href="mailto:779294618@qq.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={18} /> 779294618@qq.com
              </a>
              <a
                href="mailto:345542276@qq.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={18} /> 345542276@qq.com
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Addresses - Grid of 6 */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <MapPin className="text-brand-400" />
                <h3 className="text-xl font-bold">公司地址</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 6 Addresses */}
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                  <p className="text-brand-400 font-bold mb-2">江苏 — 南京</p>
                  <p className="text-slate-300 text-sm">
                    南京市江北新区浦滨路150号中科创新广场3#2F
                  </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                  <p className="text-brand-400 font-bold mb-2">广西 — 南宁</p>
                  <p className="text-slate-300 text-sm">
                    南宁市金龙路2号南宁万科大厦B座546号
                  </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                  <p className="text-brand-400 font-bold mb-2">江苏 — 常州</p>
                  <p className="text-slate-300 text-sm">
                    常州市新北区清水湾32栋甲单元10楼1005
                  </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                  <p className="text-brand-400 font-bold mb-2">江苏 — 无锡</p>
                  <p className="text-slate-300 text-sm">
                    无锡市新吴区梅村张公路25号6楼601
                  </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                  <p className="text-brand-400 font-bold mb-2">广东 — 广州</p>
                  <p className="text-slate-300 text-sm">
                    广州市南沙区越秀国际总部广场一区三栋1312房
                  </p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                  <p className="text-brand-400 font-bold mb-2">深圳</p>
                  <p className="text-slate-300 text-sm">
                    深圳市南山区深圳湾创新科技中心2栋A座59层5909
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 text-center shadow-2xl lg:mt-0">
              <div className="bg-brand-50 w-full aspect-square rounded-2xl flex items-center justify-center mb-6 border border-brand-100 overflow-hidden">
                <img
                  src="/images/guijie-QR.jpg"
                  alt="客服微信二维码"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-bold text-xl mb-2">微信咨询</h3>
              <p className="text-slate-500 text-sm">
                扫码添加客服微信
                <br />
                获取一对一专业服务
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

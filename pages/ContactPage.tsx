import React from 'react';
import ContactForm from '../components/Contact';
import { Phone, MapPin, Clock, MessageSquare, QrCode, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">联系我们</h1>
          <p className="mt-4 text-xl text-slate-500">
            无论您有任何问题，我们都随时为您解答。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <div className="space-y-6">
            <div className="bg-brand-900 rounded-2xl shadow-xl overflow-hidden p-8 text-white relative">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-700 rounded-full blur-2xl opacity-50"></div>
               
               <h3 className="text-2xl font-bold mb-8 relative z-10">联系方式</h3>
               <div className="space-y-8 relative z-10">
                   <div className="flex items-start">
                       <Phone className="h-6 w-6 text-brand-400 mr-4 mt-1 flex-shrink-0" />
                       <div>
                           <p className="font-medium text-brand-200 text-sm uppercase mb-2">咨询热线</p>
                           <div className="flex flex-col gap-2 font-bold text-lg leading-snug">
                             <a href="tel:17721531163" className="hover:text-brand-300 transition-colors">177 2153 1163</a>
                             <a href="tel:17761723165" className="hover:text-brand-300 transition-colors">177 6172 3165</a>
                             <a href="tel:19337226600" className="hover:text-brand-300 transition-colors">193 3722 6600</a>
                             <a href="tel:19337233927" className="hover:text-brand-300 transition-colors">193 3723 3927</a>
                           </div>
                       </div>
                   </div>
                   
                   <div className="flex items-start">
                       <div className="h-6 w-6 text-brand-400 mr-4 mt-1 flex items-center justify-center flex-shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                           <p className="font-medium text-brand-200 text-sm uppercase mb-1">电子邮箱</p>
                           <p className="text-base font-medium">779294618@qq.com</p>
                           <p className="text-base font-medium">345542276@qq.com</p>
                       </div>
                   </div>

                   <div className="flex items-start">
                       <Clock className="h-6 w-6 text-brand-400 mr-4 mt-1 flex-shrink-0" />
                       <div>
                           <p className="font-medium text-brand-200 text-sm uppercase mb-1">工作时间</p>
                           <p>周一 至 周五: 9:00 - 18:00</p>
                       </div>
                   </div>
               </div>
            </div>

            {/* WeChat QR Code Card - NEW: Best for zero maintenance */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col items-center text-center">
                <div className="bg-green-50 p-4 rounded-xl mb-4">
                    <QrCode className="w-32 h-32 text-green-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">微信咨询</h4>
                <p className="text-sm text-slate-500">扫码添加刘经理微信<br/>获取一对一专属服务</p>
            </div>
          </div>

          {/* Form Card & Address List */}
          <div className="lg:col-span-2 space-y-8">
             {/* Form */}
            <ContactForm />

            {/* Address List */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MapPin className="text-brand-600" /> 公司地址
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">江苏—南京</p>
                        <p className="text-sm text-slate-600 leading-relaxed">南京市江北新区浦滨路150号中科创新广场3#2F</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">广西—南宁</p>
                        <p className="text-sm text-slate-600 leading-relaxed">南宁市金龙路2号南宁万科大厦B座546号</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">江苏—常州</p>
                        <p className="text-sm text-slate-600 leading-relaxed">常州市新北区清水湾32栋甲单元10楼1005</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">江苏—无锡</p>
                        <p className="text-sm text-slate-600 leading-relaxed">无锡市新吴区梅村张公路25号6楼601</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">广东—广州</p>
                        <p className="text-sm text-slate-600 leading-relaxed">广州市南沙区越秀国际总部广场一区三栋1312房</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">深圳</p>
                        <p className="text-sm text-slate-600 leading-relaxed">深圳市南山区深圳湾创新科技中心2栋A座59层5909</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
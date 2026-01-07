import React from 'react';
import ContactForm from '../components/Contact';
import { Phone, MapPin, Clock, MessageSquare, QrCode } from 'lucide-react';

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
                       <Phone className="h-6 w-6 text-brand-400 mr-4 mt-1" />
                       <div>
                           <p className="font-medium text-brand-200 text-sm uppercase mb-1">销售热线</p>
                           <a href="tel:025-51819281" className="text-xl font-bold hover:text-brand-300 transition-colors underline decoration-brand-600 underline-offset-4">025-51819281</a>
                           <p className="text-sm text-brand-300 mt-1">刘经理</p>
                       </div>
                   </div>
                   
                   <div className="flex items-start">
                       <div className="h-6 w-6 text-brand-400 mr-4 mt-1 flex items-center justify-center">
                          <MessageSquare size={24} />
                       </div>
                       <div>
                           <p className="font-medium text-brand-200 text-sm uppercase mb-1">电子邮箱</p>
                           <p className="text-lg">contact@jieyao-erp.com</p>
                       </div>
                   </div>

                   <div className="flex items-start">
                       <MapPin className="h-6 w-6 text-brand-400 mr-4 mt-1" />
                       <div>
                           <p className="font-medium text-brand-200 text-sm uppercase mb-1">公司地址</p>
                           <p className="leading-relaxed">江苏省南京市软件大道88号<br/>科技创新园A座 12楼</p>
                       </div>
                   </div>

                   <div className="flex items-start">
                       <Clock className="h-6 w-6 text-brand-400 mr-4 mt-1" />
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

          {/* Form Card */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
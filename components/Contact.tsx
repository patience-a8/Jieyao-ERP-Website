import React from 'react';
import { Mail, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">发送消息</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              placeholder="您的姓名"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">电话</label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              placeholder="联系电话"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">电子邮箱</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            placeholder="example@company.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">咨询内容</label>
          <textarea 
            id="message" 
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            placeholder="请简要描述您的需求..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-4 rounded-lg transition-all shadow-lg hover:shadow-brand-500/30"
        >
          提交咨询
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
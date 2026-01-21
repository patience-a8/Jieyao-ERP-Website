
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const FORMSPREE_ID: string = "xpzeoovz"; 
  const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const saveToLocal = () => {
      try {
        const timestamp = new Date().toLocaleString('zh-CN', { hour12: false });
        // 仅保存客户线索
        const existingLeads = JSON.parse(localStorage.getItem('jieyao_leads') || '[]');
        const newLead = { ...data, id: Date.now(), date: timestamp };
        localStorage.setItem('jieyao_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (e) {
        console.error("本地数据库写入失败", e);
      }
    };

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        saveToLocal();
        setIsSuccess(true);
      } else {
        throw new Error('网络请求未响应');
      }
    } catch (err) {
      // 降级处理：即使接口失败也保存到本地
      saveToLocal();
      setError('提示：演示接口暂不可用，但系统已在本地为您记录。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 h-full flex flex-col items-center justify-center text-center min-h-[450px] animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">咨询提交成功！</h3>
        <p className="text-slate-500 max-w-xs mb-8">
          我们将尽快安排资深顾问为您回电。
        </p>
        <button onClick={() => setIsSuccess(false)} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
            返回
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">获取定制化解决方案</h3>
        <p className="text-slate-500 text-sm mt-1">提交需求后，我们的专家将在24小时内与您联系</p>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-orange-50 border border-orange-100 text-orange-800 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 ml-1">姓名</label>
            <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="请输入姓名" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 ml-1">手机号</label>
            <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="请输入联系电话" />
          </div>
        </div>
        
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700 ml-1">公司/单位</label>
          <input required name="company" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="您的企业名称" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700 ml-1">需求描述</label>
          <textarea required name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none" placeholder="请简述您的管理需求..." />
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98]">
          {isSubmitting ? (
            <><Loader2 className="animate-spin mr-2 h-5 w-5" /> 正在提交...</>
          ) : (
            <><Send className="ml-2 h-5 w-5" /> 立即申请免费演示</>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

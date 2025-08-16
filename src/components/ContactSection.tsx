"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 이메일 전송 API를 연동합니다 (예: EmailJS, Formspree)
    // 여기서는 제출 성공을 시뮬레이션합니다
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">연락처</h2>
          <div className="w-20 h-1 bg-neutral-300 dark:bg-neutral-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            프로젝트 문의나 협업 제안은 언제든지 환영합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">연락 정보</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">이메일</h4>
                  <a 
                    href="mailto:example@email.com" 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                  >
                    example@email.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">전화번호</h4>
                  <a 
                    href="tel:+821012345678" 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                  >
                    +82 10-1234-5678
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">SNS</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">메시지 보내기</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                <h4 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
                  메시지가 전송되었습니다!
                </h4>
                <p className="text-green-700 dark:text-green-400">
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
                <Button 
                  className="mt-4"
                  onClick={() => setIsSubmitted(false)}
                >
                  새 메시지 작성
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "전송 중..." : "메시지 전송"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
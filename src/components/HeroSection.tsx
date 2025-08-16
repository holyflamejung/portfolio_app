"use client";

import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 pt-16"
    >
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <div
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">안녕하세요, </span>
            <span style={{color: '#00FF00', backgroundColor: '#000000', padding: '0 5px'}} className="font-bold">웹 전문가</span>
            <span className="bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">입니다</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
            창의적인 솔루션과 세련된 디자인으로 웹 경험을 혁신합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2"
              asChild
            >
              <a href="#contact">
                <Send size={18} />
                연락하기
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href="#" download>
                <Download size={18} />
                이력서 다운로드
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
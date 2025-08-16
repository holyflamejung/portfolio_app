"use client";

import { Code, Briefcase, GraduationCap, Layers } from "lucide-react";

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Skill({ icon, title, description }: SkillProps) {
  return (
    <div className="flex flex-col items-center md:items-start p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
      <div className="mb-4 p-2 bg-neutral-100 dark:bg-neutral-700 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
        {description}
      </p>
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function TimelineItem({ year, title, description, icon }: TimelineItemProps) {
  return (
    <div className="flex gap-4 mb-8 last:mb-0">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
          {icon}
        </div>
        <div className="w-0.5 h-full bg-neutral-200 dark:bg-neutral-700 mt-2"></div>
      </div>
      <div className="pb-8">
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {year}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "프론트엔드 개발",
      description: "React, Next.js, TypeScript를 활용한 모던 웹 애플리케이션 개발",
    },
    {
      icon: <Layers size={24} />,
      title: "UI/UX 디자인",
      description: "사용자 중심 디자인과 반응형 웹 인터페이스 구현",
    },
    {
      icon: <Briefcase size={24} />,
      title: "프로젝트 관리",
      description: "애자일 방법론을 활용한 효율적인 프로젝트 진행",
    },
  ];

  const timeline = [
    {
      year: "2023 - 현재",
      title: "시니어 프론트엔드 개발자",
      description: "주요 웹 애플리케이션 개발 및 팀 리드",
      icon: <Briefcase size={18} />,
    },
    {
      year: "2020 - 2023",
      title: "프론트엔드 개발자",
      description: "다양한 웹 서비스 개발 및 유지보수",
      icon: <Briefcase size={18} />,
    },
    {
      year: "2016 - 2020",
      title: "컴퓨터 공학 학사",
      description: "웹 개발 및 소프트웨어 공학 전공",
      icon: <GraduationCap size={18} />,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <div
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">소개</h2>
          <div className="w-20 h-1 bg-neutral-300 dark:bg-neutral-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            저는 사용자 경험을 중시하는 웹 개발자로, 모던 웹 기술을 활용하여 
            직관적이고 효율적인 웹 애플리케이션을 구현합니다. 
            새로운 기술 습득과 문제 해결에 열정을 가지고 있습니다.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">핵심 역량</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <Skill {...skill} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">경력 및 학력</h3>
          <div className="max-w-2xl">
            {timeline.map((item, index) => (
              <div key={index}>
                <TimelineItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
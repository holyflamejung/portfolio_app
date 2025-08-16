"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "기업 웹사이트 리뉴얼",
      description: "반응형 디자인과 모던 UI를 적용한 기업 웹사이트 개편 프로젝트",
      category: "웹",
      link: "#",
    },
    {
      id: 2,
      title: "쇼핑몰 플랫폼",
      description: "Next.js와 TypeScript를 활용한 e-커머스 웹 애플리케이션",
      category: "웹",
      link: "#",
    },
    {
      id: 3,
      title: "모바일 앱 UI 디자인",
      description: "사용자 중심 디자인 원칙을 적용한 모바일 앱 인터페이스",
      category: "디자인",
      link: "#",
    },
    {
      id: 4,
      title: "대시보드 시스템",
      description: "데이터 시각화와 실시간 모니터링을 위한 관리자 대시보드",
      category: "앱",
      link: "#",
    },
    {
      id: 5,
      title: "SNS 서비스 개발",
      description: "실시간 기능을 갖춘 소셜 네트워킹 서비스 개발 프로젝트",
      category: "앱",
      link: "#",
    },
    {
      id: 6,
      title: "브랜드 아이덴티티 디자인",
      description: "스타트업을 위한 브랜딩 및 디자인 시스템 구축",
      category: "디자인",
      link: "#",
    },
  ];

  const filters = [
    { name: "전체", value: "all" },
    { name: "웹", value: "웹" },
    { name: "앱", value: "앱" },
    { name: "디자인", value: "디자인" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 bg-white dark:bg-neutral-950"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">포트폴리오</h2>
          <div className="w-20 h-1 bg-neutral-300 dark:bg-neutral-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            다양한 프로젝트와 작업물을 통해 저의 역량과 경험을 확인하세요
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="min-w-20"
            >
              {filter.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                  <span className="text-neutral-500 dark:text-neutral-400">
                    프로젝트 이미지
                  </span>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                    {project.description}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {project.category}
                  </span>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      자세히 보기
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
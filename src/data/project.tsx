export interface Project {
  title: string;
  description: string;
  works: string;
  start_date: string;
  end_date: string;
  image: string;
  link?: string;
  github: string;
  skills: string[];
}

export const projectData: Project[] = [
  {
    title: "Fit Harmony",
    description: `
    FIT_HARMONY는 헬스장 운영 및 회원 관리를 위한 통합 플랫폼의 프론트엔드 애플리케이션입니다.
     React 기반의 SPA(Single Page Application)로 구축되었으며, 트레이너와 회원 간의 소통, 인바디 분석, 일정 관리, 커뮤니티 등의 기능을 제공합니다.
    `,
    works: `
    로그인 및 소셜 로그인 기능 구현
    커뮤니티 게시판 기능 구현 및 프론트엔드 개발
    게시글 및 무한 댓글 트리 구현 및 프론트엔드 개발
    `,
    start_date: "2025-06-23",
    end_date: "2025-07-21",
    image: "fh_image.JPG",
    link: "",
    github: "https://github.com/Wasa-B/FIT_HARMONY_FRONT",
    skills: ["React", "JavaScript", "express", "tailwindcss","PostgreSQL", "AWS_EC2"],
  },
  {
    title: "DocGen",
    description: `
    DocGen은 AI 기반 프로젝트 문서 자동 생성 플랫폼의 프론트엔드 애플리케이션입니다.
    React 기반의 SPA(Single Page Application)로 구축되었으며, 프로젝트 관리, 문서 생성, 타임라인 관리, 공지사항 등의 기능을 제공합니다.
    `,
    works: `
    LLM을 사용한 문서 자동 생성 기능 구현 및 프론트엔드 개발
    `,
    start_date: "2025-07-28",
    end_date: "2025-09-04",
    image: "docgen_image.JPG",
    link: "https://docgen.aicc-project.com",
    github: "https://github.com/Wasa-B/docgen-frontend",
    skills: ["React", "TypeScript", "tailwindcss","NestJS","FastAPI", "Python","OpenAI", "PostgreSQL", "MongoDB", "Docker", "Jenkins"],
  },
  {
    title: "InPick",
    description: `
    AI 기반 여행 일정 생성 및 추천 시스템의 프론트엔드 서비스입니다. 
    사용자 친화적인 UI/UX로 여행 계획 생성, 일정 관리, 장소 추천, 지도 탐색 기능을 제공합니다.
    `,
    works: `
    소셜 로그인 기능 구현
    여행 일정 생성 기능 구현 및 프론트엔드 개발
    GRU4Rec, SASRec을 사용한 추천 시스템 구현
    T-Map API를 사용하여 경로 탐색 기능 구현
    데이터 수집을 위한 크롤링 프로그램 개발
    `,
    start_date: "2025-09-09",
    end_date: "2025-10-31",
    image: "inpick.JPG",
    link: "https://inpick.aicc-project.com",
    github: "https://github.com/Wasa-B/InPick_FRONTEND",
    skills: ["React", "TypeScript", "tailwindcss", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Docker", "Jenkins"],
  }
]
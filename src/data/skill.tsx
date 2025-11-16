interface Skill {
  title: string;
  text: string;
  icon: string;
}

interface SkillData{
  [key: string]: Skill[];
}


export const skillData: SkillData = {
  language: [
    {
      title: "JavaScript",
      text: "프론트와 백엔드 개발을 할 수 있습니다.",
      icon: "javascript",
    },
    {
      title: "TypeScript",
      text: "타입 안전성을 유지하기 위해 사용했습니다.",
      icon: "typescript",
    },
    {
      title: "Python",
      text: `
      AI 관련 프로젝트에 사용 하였습니다.
      FastAPI로 백엔드 개발시 사용했습니다.
      `,
      icon: "python",
    },
    {
      title: "C#",
      text: "Unity를 사용한 개발에 사용했습니다.",
      icon: "csharp",
    },
    {
      title: "Java",
      text: `
      기본적인 개념, 문법을 이해하고 있습니다.
      학부생 시절 자바를 이용한 개발 경험이 있습니다.
      `,
      icon: "java",
    },
    
  ],
  frontend: [
    {
      title: "React",
      text: `
      프로젝트 프론트엔드 개발을 할때 사용했습니다.
      Fit Harmony, DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "react",
    },
    {
      title: "Next.js",
      text: "기본적인 개념을 학습하였습니다.",
      icon: "next-js",
    },
    {
      title: "tailwindcss",
      text: `
      프론트엔드 개발 시 스타일링을 할 때 사용했습니다.
      Fit Harmony, DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "tailwindcss",
    },
    {
      title: "html",
      text: `
      프론트엔드 개발 시 기본적인 마크업을 할 때 사용했습니다.
      `,
      icon: "html5",
    },
    {
      title: "css",
      text: `
      프론트엔드 개발 시 기본적인 스타일링을 할 때 사용했습니다.
      `,
      icon: "css3",
    },
  ],
  backend: [
    {
      title: "Express",
      text: `
      Node.js 기반의 백엔드 개발을 할 때 사용했습니다.
      Fit Harmony 프로젝트에서 사용했습니다.
      `,
      icon: "node-js",
    },
    {
      title: "FastAPI",
      text: `
      Python 기반의 백엔드 개발을 할 때 사용했습니다.
      DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "fastapi",
    },
    {
      title: "NestJS",
      text: `
      Node.js 기반의 백엔드 개발을 할 때 사용했습니다.
      타입스크립트를 사용하여 타입 안전성을 유지하기위해 사용했습니다.
      DocGen 프로젝트에서 사용했습니다.
      `,
      icon: "nestjs",
    }
  ],
  database: [
    {
      title: "PostgreSQL",
      text: "기본적인 쿼리 작성을 할 수 있습니다.",
      icon: "postgresql",
    },
    {
      title: "MongoDB",
      text: "NoSQL 데이터베이스를 사용하여 데이터를 저장하고 관리할 수 있습니다.",
      icon: "mongodb",
    },
  ],
  etc: [
    {
      title: "Docker",
      text: `
      컨테이너 기반의 개발 환경을 구축하고 관리할 수 있습니다.
      DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "docker",
    },
    {
      title: "Git",
      text: `
      Git을 이용하여 프로젝트를 관리할 수 있습니다.
      Fit Harmony, DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "git",
    },
    {
      title: "GitHub",
      text: `
      GitHub을 이용하여 프로젝트를 관리할 수 있습니다.
      Fit Harmony, DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "github",
    },
    {
      title: "AWS EC2",
      text: `
      AWS EC2를 이용하여 서버를 관리할 수 있습니다.
      Fit Harmony 프로젝트에서 사용했습니다.
      `,
      icon: "aws-ec2",
    },
    {
      title: "Jenkins",
      text: `
      Jenkins를 이용하여 프로젝트의 CI/CD를 관리할 수 있습니다.
      DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "jenkins",
    },
    {
      title: "Unity",
      text: `
      Unity를 사용한 개발 경험이 있습니다.
      게임 개발, 증강현실 개발 등에 사용했습니다.
      `,
      icon: "unity",
    },
    {
      title: "OpenAI API",
      text: `
      OpenAI API를 이용하여 프로젝트에서 사용했습니다.
      DocGen, InPick 프로젝트에서 사용했습니다.
      `,
      icon: "openai",
    }
  ],
}
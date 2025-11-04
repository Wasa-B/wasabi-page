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
      text: "설명",
      icon: "javascript",
    },
    {
      title: "TypeScript",
      text: "설명",
      icon: "typescript",
    },
    {
      title: "Python",
      text: "설명",
      icon: "python",
    },
    {
      title: "C#",
      text: "설명",
      icon: "csharp",
    },
    {
      title: "Java",
      text: "설명",
      icon: "java",
    },
    
  ],
  frontend: [
    {
      title: "React",
      text: "설명",
      icon: "react",
    },
    {
      title: "Next.js",
      text: "설명",
      icon: "next-js",
    },
    {
      title: "tailwindcss",
      text: "설명",
      icon: "tailwindcss",
    },
    {
      title: "html",
      text: "설명",
      icon: "html5",
    },
    {
      title: "css",
      text: "설명",
      icon: "css3",
    },
  ],
  backend: [
    {
      title: "Express",
      text: "설명",
      icon: "node-js",
    },
    {
      title: "FastAPI",
      text: "설명",
      icon: "fastapi",
    },
    {
      title: "NestJS",
      text: "설명",
      icon: "nestjs",
    }
  ],
  database: [
    {
      title: "PostgreSQL",
      text: "설명",
      icon: "postgresql",
    },
    {
      title: "MongoDB",
      text: "설명",
      icon: "mongodb",
    },
  ],
  etc: [
    {
      title: "Docker",
      text: "설명",
      icon: "docker",
    },
    {
      title: "Git",
      text: "설명",
      icon: "git",
    },
    {
      title: "GitHub",
      text: "설명",
      icon: "github",
    },
    {
      title: "AWS EC2",
      text: "설명",
      icon: "aws-ec2",
    },
    {
      title: "Jenkins",
      text: "설명",
      icon: "jenkins",
    },
    {
      title: "Unity",
      text: "설명",
      icon: "unity",
    },
    {
      title: "OpenAI API",
      text: "설명",
      icon: "openai",
    }
  ],
}
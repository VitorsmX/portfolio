// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Partial<Record<SkillNames, Skill>> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "Linguagem principal para desenvolvimento web moderno. Utilizada para criar aplicações web, automações e interfaces interativas.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Superset do JavaScript que adiciona tipagem estática para criar aplicações mais seguras e escaláveis.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription:
      "Estrutura semântica para websites acessíveis, responsivos e otimizados para SEO.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription:
      "Estilização moderna de interfaces web com foco em responsividade e experiência do usuário.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription:
      "Biblioteca JavaScript para construção de interfaces modernas e aplicações web escaláveis.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Framework React utilizado para criar aplicações full stack rápidas, com SSR, APIs e excelente SEO.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "Framework CSS utilitário usado para criar interfaces modernas e responsivas rapidamente.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "Ambiente JavaScript para desenvolvimento backend, APIs e automações de processos.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "Banco de dados relacional robusto utilizado para aplicações web escaláveis.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "Banco de dados NoSQL flexível para aplicações modernas e escaláveis.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription:
      "Sistema de controle de versão essencial para colaboração e gerenciamento de código.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Plataforma de hospedagem de código e colaboração em projetos de software.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription:
      "CMS amplamente utilizado para criação de websites, blogs e lojas virtuais com forte SEO.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },

  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription:
      "Ambiente utilizado para desenvolvimento, servidores e automação de sistemas.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Plataforma de deploy otimizada para aplicações Next.js e projetos front-end modernos.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Mar 2026",
    endDate: "Presente",
    title: "Analista de Suporte e Desenvolvimento (Híbrido)",
    company: "Prefeitura Municipal de Capanema",
    description: [
      "Desenvolvimento de aplicações Full Stack utilizando JavaScript para atender demandas e processos internos da administração municipal.",
      "Desenvolvimento e evolução de um ERP Municipal modular para gerenciamento de chamados de suporte técnico, tarefas, insumos, hardware e serviços financeiros auxiliares.",
      "Gerenciamento da implantação e operação do ERP em ambiente de nuvem, acompanhando atualizações, disponibilidade e infraestrutura da aplicação.",
      "Levantamento de requisitos e tradução de necessidades dos usuários e setores administrativos em soluções técnicas.",
      "Suporte técnico avançado, diagnóstico, manutenção e reparo de computadores e equipamentos pertencentes ao patrimônio municipal.",
      "Treinamento e suporte aos usuários para adoção de sistemas e ferramentas digitais implantadas nos setores atendidos.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.GIT,
      SkillNames.LINUX,
    ],
  },
  {
    id: 2,
    startDate: "Fev 2023",
    endDate: "Nov 2025",
    title: "Analista de Suporte Técnico",
    company: "Voltec Engenharia",
    description: [
      "Suporte técnico em software e serviços de internet.",
      "Diagnóstico de falhas e manutenção de sistemas.",
      "Triagem e priorização de chamados técnicos.",
      "Levantamento de requisitos e apoio na definição de soluções.",
    ],
    skills: [SkillNames.LINUX, SkillNames.GIT, SkillNames.JS],
  },
  {
    id: 3,
    startDate: "Set 2020",
    endDate: "Nov 2020",
    title: "Estagiário em Análise e Documentação de Software",
    company: "Laboratório de Transformação Digital",
    description: [
      "Análise de requisitos de sistemas.",
      "Criação de documentação técnica e funcional.",
      "Modelagem de casos de uso utilizando UML.",
      "Apoio ao desenvolvimento de sistemas de gestão.",
    ],
    skills: [SkillNames.JS, SkillNames.GIT],
  },
];

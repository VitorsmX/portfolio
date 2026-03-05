import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";

import {
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiCloudinary,
  SiStrapi,
  SiExpress,
  SiOpenai,
  SiCplusplus,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

/* -------------------- LINKS -------------------- */

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 my-4 mb-8">
      <Link rel="noopener noreferrer" target="_blank" href={live}>
        <Button size="sm">
          Acessar Projeto
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>

      {repo && (
        <Link rel="noopener noreferrer" target="_blank" href={repo}>
          <Button size="sm" variant="secondary">
            Código no GitHub
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

/* -------------------- SKILLS -------------------- */

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },

  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },

  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },

  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },

  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },

  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },

  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },

  cloudinary: {
    title: "Cloudinary",
    bg: "black",
    fg: "white",
    icon: <SiCloudinary />,
  },

  strapi: {
    title: "Strapi CMS",
    bg: "black",
    fg: "white",
    icon: <SiStrapi />,
  },

  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },

  openai: {
    title: "OpenAI API",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },

  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
};

/* -------------------- TYPE -------------------- */

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

/* -------------------- PROJETOS -------------------- */

const projects: Project[] = [
  {
    id: "geu-site",

    category: "Website Institucional",

    title: "Website Grupo Espírita União",

    src: `${BASE_PATH}/geu/1.png`,

    screenshots: ["1.png"],

    live: "https://geuuniao.com.br",

    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.cloudinary,
      ],
    },

    github: "https://github.com/VitorsmX/geunaweb",

    content: (
      <div>
        <TypographyP>
          Website institucional desenvolvido para o Grupo Espírita União,
          incluindo blog, biblioteca virtual e galeria de mídia.
        </TypographyP>

        <TypographyP>
          O projeto foi desenvolvido utilizando **Next.js e TypeScript** com
          arquitetura full stack moderna, integrando banco de dados PostgreSQL
          via Supabase e armazenamento de mídia com Cloudinary.
        </TypographyP>

        <ProjectsLinks live="https://geuuniao.com.br" />

        <TypographyH3 className="mt-6">Principais funcionalidades</TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Blog com CMS customizado</li>
          <li>Biblioteca virtual com indicação de livros</li>
          <li>Galeria de mídia integrada ao Cloudinary</li>
          <li>Autenticação GitHub com 2FA</li>
          <li>Deploy na Vercel com CI/CD</li>
          <li>SEO otimizado e analytics</li>
        </ul>
      </div>
    ),
  },

  {
    id: "radio-super-crystal",

    category: "Website / Streaming",

    title: "Website Rádio Web Super Crystal",

    src: `${BASE_PATH}/radio/1.png`,

    screenshots: ["1.png"],

    live: "https://radiosupercrystal.vercel.app",

    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.strapi,
        PROJECT_SKILLS.supabase,
      ],
    },

    github: "https://github.com/VitorsmX/radio-crystal-admin-v1",

    content: (
      <div>
        <TypographyP>
          Website full stack desenvolvido para uma rádio web com sistema de
          gerenciamento de conteúdo utilizando **Strapi CMS**.
        </TypographyP>

        <TypographyP>
          A plataforma permite gerenciar conteúdos, posts do blog e campanhas
          promocionais diretamente pelo painel administrativo.
        </TypographyP>

        <ProjectsLinks live="https://radiosupercrystal.vercel.app" />

        <TypographyH3 className="mt-6">Funcionalidades</TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Blog integrado ao Strapi CMS</li>
          <li>Sistema de sorteios gerenciado pelo painel</li>
          <li>Autenticação segura com GitHub</li>
          <li>Deploy automatizado via Vercel</li>
          <li>Otimização SEO e analytics</li>
        </ul>
      </div>
    ),
  },

  {
    id: "detector-ironia",

    category: "Inteligência Artificial",

    title: "Detector de Ironia em Português com IA",

    src: `${BASE_PATH}/ironia/1.png`,

    screenshots: ["1.png"],

    live: "https://detector-ironia-br.vercel.app",

    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react],

      backend: [
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.openai,
      ],
    },

    github: "https://github.com/VitorsmX/detector_ironia_br",

    content: (
      <div>
        <TypographyP>
          Sistema experimental de **detecção automática de ironia em português
          (PT-BR)** utilizando abordagem híbrida entre heurística linguística e
          inteligência artificial.
        </TypographyP>

        <TypographyP>
          O projeto foi desenvolvido para explorar técnicas de **NLP leve** sem
          depender exclusivamente de modelos pesados.
        </TypographyP>

        <ProjectsLinks live="https://detector-ironia-br.vercel.app" />

        <TypographyH3 className="mt-6">Arquitetura do sistema</TypographyH3>

        <ul className="list-disc ml-6 font-mono">
          <li>Engine em C++ para análise heurística e estatística</li>
          <li>Node.js como camada de API</li>
          <li>Fallback inteligente utilizando OpenAI</li>
          <li>Dataset autoexpansível via scraping</li>
          <li>Classificação baseada em score de probabilidade</li>
          <li>Cache, rate limit e segurança de API</li>
        </ul>

        <TypographyH3 className="mt-6">Objetivo</TypographyH3>

        <TypographyP>
          Construir um sistema rápido, barato e eficiente para detectar ironia
          em textos em português combinando heurísticas linguísticas,
          vocabulário estatístico e modelos de linguagem.
        </TypographyP>
      </div>
    ),
  },
];

export default projects;
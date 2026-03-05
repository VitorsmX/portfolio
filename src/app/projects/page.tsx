"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Website Grupo Espírita União",
    description: `Website institucional desenvolvido para o Grupo Espírita União, incluindo blog, biblioteca virtual e galeria de mídia. O projeto foi desenvolvido utilizando **Next.js e TypeScript** com arquitetura full stack moderna, integrando banco de dados PostgreSQL via Supabase e armazenamento de mídia com Cloudinary.`,
    link: "https://www.geuuniao.com.br",
    images: [
      "/assets/projects-screenshots/geu/1.png",
      "/assets/projects-screenshots/geu/2.png",
      "/assets/projects-screenshots/geu/3.png",
      "/assets/projects-screenshots/geu/4.png",
      "/assets/projects-screenshots/geu/5.png",
    ],
  },
  {
    id: 2,
    name: "Website Rádio Web Super Crystal",
    description: `Website full stack desenvolvido para uma rádio web com sistema de gerenciamento de conteúdo utilizando **Strapi CMS**. A plataforma permite gerenciar conteúdos, posts do blog e campanhas promocionais diretamente pelo painel administrativo.`,
    link: "https://radiosupercrystal.vercel.app/",
    images: [
      "/assets/projects-screenshots/radio/1.png",
      "/assets/projects-screenshots/radio/2.png",
      "/assets/projects-screenshots/radio/3.png",
      "/assets/projects-screenshots/radio/4.png",
    ],
  },
  {
    id: 2,
    name: "Detector de Ironia em Português com IA",
    description: ` Sistema experimental de **detecção automática de ironia em português (PT-BR)** utilizando abordagem híbrida entre heurística linguística e inteligência artificial. O projeto foi desenvolvido para explorar técnicas de **NLP leve** sem depender exclusivamente de modelos pesados.`,
    link: "https://detector-ironia-br.vercel.app/",
    images: [
      "/assets/projects-screenshots/ironia/1.png",
      "/assets/projects-screenshots/ironia/2.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projetos</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;

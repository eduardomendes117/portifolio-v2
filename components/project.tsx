import React from "react";
import { Github } from "lucide-react";
import { FaXbox } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  tags: string[];
  github: string;
  cardTheme: {
    tag: string;
    color: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    category,
    description,
    icon,
    iconBg,
    iconBorder,
    tags,
    github,
    cardTheme,
  } = project;

  return (
    <a
      className="block group"
      href={github}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className={`rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center border ${iconBorder}`}
          >
            <span className={`text-2xl ${cardTheme.color}`}>{icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm">{category}</p>
          </div>
        </div>
        <p className="text-zinc-300 mb-6 text-sm leading-relaxed h-14">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${cardTheme.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Página Xbox Series",
      category: "Landing page",
      description:
        "Landing page criada no NextJS 15, apresentando princípios de design modernos e animações suaves.",
      icon: <FaXbox />,
      iconBg: "bg-green-900/20",
      iconBorder: "border-green-700/50",
      tags: ["Next.js 15", "TypeScript", "Taiwind CSS"],
      github: "https://github.com/eduardomendes117/projeto-xbox",
      cardTheme: {
        tag: "bg-green-950/50 text-green-400",
        color: "text-green-400",
      },
    },
    {
      title: "Página Netflix",
      category: "Clone",
      description:
        "Replicação da interface da Netflix, com foco em layout responsivo.",
      icon: <SiNetflix />,
      iconBg: "bg-red-900/20",
      iconBorder: "border-red-700/50",
      tags: ["JavaScript", "Node.js", "Algoritmo"],
      github: "https://github.com/eduardomendes117/projeto-netflix",
      cardTheme: {
        tag: "bg-red-950/50 text-red-400",
        color: "text-red-400",
      },
    },
    {
      title: "Notes App",
      category: "Landing page",
      description:
        "Notes App é uma aplicação web moderna e intuitiva que permite aos usuários criar, editar suas anotações de forma rápida e prática.",
      icon: <MdNoteAlt />,
      iconBg: "bg-blue-900/20",
      iconBorder: "border-blue-700/50",
      tags: ["Next.js 15", "TypeScript", "Taiwind CSS"],
      github: "https://github.com/eduardomendes117/notes-app",
      cardTheme: {
        tag: "bg-blue-950/50 text-blue-400",
        color: "text-blue-400",
      },
    },
    {
      title: "Spotify",
      category: "Landing page",
      description: "Imersão Front-End 2ª Edição: Página do Spotify",
      icon: <FaSpotify />,
      iconBg: "bg-purple-900/20",
      iconBorder: "border-purple-700/50",
      tags: ["Next.js 15", "TypeScript", "Taiwind CSS"],
      github: "https://github.com/eduardomendes117/spotify-imersao-react",
      cardTheme: {
        tag: "bg-purple-950/50 text-purple-400",
        color: "text-purple-400",
      },
    },
  ];

  return (
    <section className="bg-black min-h-screen py-16 px-6" id="projetos">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos em destaque
          </h2>
          <p className="text-gray-400 text-lg">
            Uma seleção dos meus trabalhos recentes e projetos pessoais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white text-white/80 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
            href="https://github.com/eduardomendes117"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={18} />
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

"use client";

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Netflix Clone",
    image: "/images/netflixpage2.png",
    tags: ["HTML", "CSS"],
    link: "https://github.com/eduardomendes117/projeto-netflix",
  },
  {
    title: "Projeto Spotify",
    image: "/images/spotify.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://github.com/eduardomendes117/spotify-imersao-react",
  },
  {
    title: "Página Xbox Series",
    image: "/images/xbox.png",
    tags: ["Next.js", "Typescript"],
    link: "https://github.com/eduardomendes117/projeto-xbox",
  },
];

interface CardProps {
  title: string;
  image: string;
  tags: string[];
  link: string;
}

const Card = ({ title, image, tags, link }: CardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 p-3">
      <div className="aspect-video w-full relative overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={`${title} Preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-white/5 p-2 transition-all duration-300 group-hover:bg-white/10">
              <ArrowUpRight 
                className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-45"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-opacity-90 ${getTagClasses(tag)}`}
            >
              • {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Project link overlay */}
      <a 
        href={link} 
         target="_blank"
        className="absolute inset-0" 
        aria-label={`View ${title}`}
      />
    </div>
  );
};

const getTagClasses = (tag: string): string => {
  const colors: { [key: string]: string } = {
    "Next.js": "bg-purple-400/10 text-purple-400",
    "Tailwind CSS": "bg-blue-400/10 text-blue-400",
    "React": "bg-green-400/10 text-green-400",
    "Typescript": "bg-pink-400/10 text-pink-400",
    "HTML": "bg-orange-400/10 text-orange-400",
    "CSS": "bg-blue-600/10 text-blue-600",
    "JavaScript": "bg-yellow-400/10 text-yellow-400",
  };
  return colors[tag] || "bg-gray-400/10 text-gray-400";
};

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          title={project.title} 
          image={project.image} 
          tags={project.tags} 
          link={project.link} 
        />
      ))}
    </div>
  );
};

export default ProjectCards;
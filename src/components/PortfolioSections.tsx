import { useEffect } from "react";
import { Code, Briefcase, Award, Github, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioSections() {
  useEffect(() => {
    // Importação dinâmica do ScrollReveal
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;

      const sr = ScrollReveal({
        distance: "50px",
        duration: 800,
        reset: true,
      });

      // Revelação do título principal
      sr.reveal(".section-title", {
        origin: "top",
        interval: 200,
      });

      // Revelação dos projetos
      sr.reveal(".project-card", {
        origin: "bottom",
        interval: 200,
        delay: 200,
      });

      // Revelação da experiência
      sr.reveal(".experience-item", {
        origin: "left",
        interval: 200,
        delay: 300,
      });

      // Revelação das habilidades
      sr.reveal(".skill-card", {
        origin: "right",
        interval: 200,
        delay: 300,
      });

      // Revelação das certificações
      sr.reveal(".certification-card", {
        origin: "bottom",
        interval: 200,
        delay: 200,
      });

      // Revelação da seção de contato
      sr.reveal(".contact-section", {
        origin: "bottom",
        delay: 200,
      });

      // Revelação da svg
      sr.reveal(".svg-animation", {
        origin: "bottom",
        delay: 200,
      });
    };

    loadScrollReveal();
  }, []);

  return (
    <>
      {/* Projetos em Destaque */}
      <section className="py-20 bg-gradient-to-b from-[#1A202C] to-[#1A202C]/95">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">
            Projetos em Destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Landing page Xbox",
                description:
                  "Clone de interface do Xbox com foco em design responsivo.",
                image: "/images/xbox.png",
                demoLink: "#",
                githubLink: "#",
              },
              {
                id: 2,
                title: "Clone Netflix",
                description:
                  "Página de apresentação com animações e design moderno.",
                image: "/images/netflixpage2.png",
                demoLink: "#",
                githubLink: "#",
              },
              {
                id: 3,
                title: "Página Spotify",
                description:
                  "Loja online de roupas com integração de pagamentos.",
                image: "/images/spotify.png",
                demoLink: "#",
                githubLink: "#",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="project-card group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <a
                      href={project.demoLink}
                      className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                    >
                      <Eye className="w-4 inline mr-1" /> Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 inline mr-1" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência e Habilidades */}
      <section className="py-20 bg-[#1A202C]/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experiência */}
            <div>
              <h2 className="section-title text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-400" />
                Experiência
              </h2>
              <div className="space-y-8">
                {[1, 2].map((exp) => (
                  <div
                    key={exp}
                    className="experience-item relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6.5px] top-2" />
                    <h3 className="font-semibold text-xl">Cargo na Empresa</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      Jan 2022 - Presente
                    </p>
                    <p className="text-gray-300">
                      Descrição das responsabilidades e conquistas principais.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades */}
            <div>
              <h2 className="section-title text-3xl font-bold mb-8 flex items-center gap-3">
                <Code className="text-blue-400" />
                Habilidades
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { skill: "Frontend", level: 90 },
                  { skill: "Backend", level: 75 },
                  { skill: "UI/UX", level: 85 },
                  { skill: "DevOps", level: 70 },
                ].map(({ skill, level }) => (
                  <div
                    key={skill}
                    className="skill-card bg-white/5 p-4 rounded-lg"
                  >
                    <div className="flex justify-between mb-2">
                      <span>{skill}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-20 bg-[#1A202C]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-blue-400" />
            Educação e Certificações
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Formação Frontend",
                institution: "Alura",
                description:
                  "Aprendi a construir aplicações web escaláveis e dinâmicas usando React e hooks.",
              },
              {
                title: "Programação",
                institution: "Curso em Video",
                description:
                  "Aprendi meus conhecimentos em desenvolvimento frontend com HTML, CSS e JavaScript.",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="certification-card bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="font-semibold text-xl mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.institution}</p>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 lg:flex justify-center items-center gap-10 bg-gradient-to-b from-[#1A202C] to-black">
        <motion.div
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: -50, // Sobe na vertical
            rotate: -10, // Inclina para parecer que está "voando"
          }}
          transition={{
            duration: 2, // Duração da animação
            repeat: Infinity, // Repete infinitamente
            repeatType: "reverse", // Retorna ao ponto inicial
            ease: "easeInOut", // Suaviza o movimento
          }}
          className="w-max mx-auto lg:mx-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send text-white w-28 h-28 lg:w-44 lg:h-44"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>
        </motion.div>

        <div className="contact-section max-w-3xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Estou sempre aberto a novos projetos e colaborações.
          </p>
          <div className="relative w-full max-w-md mx-auto">
            {/* Input com o email */}
            <input
              type="text"
              readOnly
              aria-label="Email"
              className="w-full px-4 py-3 text-center rounded-full bg-gray-800 text-white
            border border-gray-600 focus:outline-none cursor-pointer"
              value="eduardo12mendes2016@gmail.com"
            />
            
            {/* Span cobrindo o input */}
            <span
              className="absolute inset-0 flex items-center justify-center text-sm text-white bg-white/10 backdrop-blur-lg rounded-full cursor-pointer opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => {
                navigator.clipboard.writeText("eduardo12mendes2016@gmail.com");
                const copiedText = document.getElementById("copiedText");
                if (copiedText) {
                  copiedText.classList.remove("opacity-0");
                  setTimeout(() => copiedText.classList.add("opacity-0"), 1500);
                }
              }}
            >
              Clique para copiar
            </span>
            {/* Mensagem de confirmação */}
            <span
              id="copiedText"
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm text-green-400 font-medium opacity-0 transition-opacity duration-300"
            >
              Copiado!
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

// page.tsx
import PortfolioSections from "@/components/PortfolioSections";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="fixed w-full top-0 z-50 py-4">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="flex gap-2 bg-white/5 p-2 rounded-2xl text-sm backdrop-blur-lg border border-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl" />
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Olá, Eu sou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 hover:from-blue-500 hover:to-cyan-400 transition-colors cursor-default">
                Eduardo
              </span>
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-300">
              Front-end Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Desenvolvedor full-stack com experiência em criar interfaces
              modernas e intuitivas. Especializado em React, Next.js, TypeScript
              e design responsivo.
            </p>

            {/* CTA Button */}
            <div className=" ">
              <Link
                href="/projetos"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </section>

        {/* <section
          id="work"
          className="relative z-10 container mx-auto px-4 lg:px-8 py-24"
        >
          <div>
            <h2 className="uppercase font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Projetos Recentes
            </h2>
            <p className="font-medium py-4 text-lg text-white/60 max-w-2xl">
              Uma seleção dos meus trabalhos recentes e projetos pessoais,
              demonstrando experiencia em desenvolvimento frontend.
            </p>
          </div>

          <div className="mt-12">
            <Card />
          </div>
        </section> */}

        <PortfolioSections />
      </main>

      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© 2025 Eduardo Mendes. Todos os direitos reservados.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </div>
  );
}

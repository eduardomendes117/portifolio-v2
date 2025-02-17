// page.tsx
import Link from "next/link";
import Card from "../components/Card";

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
          <div className="flex justify-center">
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
        <section className="relative h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[-2rem]">
            {[0.05, 1, 0.05].map((opacity, index) => (
              <div
                key={index}
                className={`text-[15vw] md:text-[6vw] font-extrabold uppercase tracking-tighter`}
                style={{ opacity }}
              >
                Frontend
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        </section>

        <section id="work" className="relative z-10 container mx-auto px-4 lg:px-8 py-24">
          <div>
            <h2 className="uppercase font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Projetos Recentes
            </h2>
            <p className="font-medium py-4 text-lg text-white/60 max-w-2xl">
              Uma seleção dos meus trabalhos recentes e projetos pessoais,
              demonstrando expertise em desenvolvimento frontend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((index) => (
              <div key={index}>
                <Card />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© 2025 Eduardo Mendes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
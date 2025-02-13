import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { IconWaving } from "@/components/IconWaving";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-2xl text-center justify-center">
        <div
          className={subtitle({
            class: "my-5 flex items-center justify-center gap-3",
          })}
        >
          Olá, sou Eduardo <IconWaving />
        </div>
        <span
          className={title({
            class:
              "bg-gradient-to-r from-white/40 via-white/80 to-white/40 bg-clip-text text-transparent",
          })}
        >
          Desenvolvo interfaces web modernas e de alta performance
        </span>
      </div>
      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="#projetos"
        >
          Meus Projetos
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}

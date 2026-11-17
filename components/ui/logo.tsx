import Image from "next/image";
import logoWhite from "@/public/brand/inovetech-logo-white.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Logomarca oficial (versão branca com arco laranja) para fundos escuros. */
export function Logo({ className, priority = false, sizes = "160px" }: LogoProps) {
  return (
    <Image
      src={logoWhite}
      alt="Inovetech Soluções Tecnológicas"
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}

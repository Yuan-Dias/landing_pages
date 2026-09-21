import { createFileRoute } from "@tanstack/react-router";
import { SigacLanding } from "@/components/sigac/SigacLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIGAC — Gestão Ambiental Compartilhada" },
      {
        name: "description",
        content:
          "Licenciamento, fiscalização e comunicação ambiental em uma plataforma integrada para prefeituras e consórcios.",
      },
      { property: "og:title", content: "SIGAC — Gestão Ambiental Compartilhada" },
      {
        property: "og:description",
        content: "Do requerimento à licença, todo o licenciamento ambiental em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sigac.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "SIGAC",
          applicationCategory: "GovernmentApplication",
          operatingSystem: "Web",
          description:
            "Sistema Integrado de Gestão Ambiental Compartilhada para prefeituras e consórcios.",
        }),
      },
    ],
  }),
  component: SigacLanding,
});

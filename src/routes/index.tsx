import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Solutions } from "@/components/site/Solutions";
import { Method } from "@/components/site/Method";
import { Results } from "@/components/site/Results";
import { Differentials } from "@/components/site/Differentials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingChat } from "@/components/site/FloatingChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AG Solutions — Sites, Sistemas e Automações que Vendem" },
      {
        name: "description",
        content:
          "Sites profissionais prontos em 2 a 3 dias úteis, automações com IA e sistemas sob medida para empresas que querem vender mais e crescer com estrutura.",
      },
      { property: "og:title", content: "AG Solutions — Crescimento digital com estrutura profissional" },
      { property: "og:description", content: "Sites, sistemas e automações premium para empresas que querem vender mais." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  if (typeof window !== "undefined") {
    // Garante que ao carregar a página o usuário comece sempre no topo (Início)
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Method />
        <Results />
        <About />
        <Differentials />
        <CTA />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}

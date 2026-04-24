import { FadeIn, SectionHeader } from "./Section";
import { ArrowUpRight } from "lucide-react";
import napoli from "@/assets/case-napoli.png";
import oduh from "@/assets/case-oduh.png";

const projects = [
  {
    img: napoli,
    name: "Napoli Massas e Molhos",
    segment: "Gastronomia · Massas Artesanais",
    description:
      "Site institucional premium desenvolvido para fortalecer presença digital, valorizar marca artesanal e aumentar pedidos online.",
    url: "https://napolimassasemolhos.vercel.app/",
  },
  {
    img: oduh,
    name: "Oduh Ruggeri Barbearia",
    segment: "Barbearia Premium",
    description:
      "Landing page moderna criada para posicionamento premium, captação de clientes e fortalecimento da marca local.",
    url: "https://oduhruggeribarbearia.vercel.app/",
  },
];

const cases = [
  {
    tag: "CLÍNICA ESTÉTICA",
    title: "Bella Vita Estética",
    location: "São Paulo, SP",
    period: "Resultado em 90 dias",
    desc: "A clínica dependia de indicações e tinha agenda com buracos frequentes. Sem site, sem automação, sem presença digital estruturada.",
    metrics: [
      { v: "+180%", l: "Agendamentos online" },
      { v: "−70%", l: "Tempo em ligações" },
      { v: "+4.8★", l: "Avaliação no Google" },
    ],
    headline: "+180% em agendamentos",
    solution: "Site com agendamento + WhatsApp automático + Instagram estratégico",
  },
  {
    tag: "ESCRITÓRIO JURÍDICO",
    title: "Santos & Almeida Advocacia",
    location: "Curitiba, PR",
    period: "Resultado em 60 dias",
    desc: "Escritório consolidado com zero presença digital. Leads vinham apenas de indicação. Nenhum processo de captação ativo.",
    metrics: [
      { v: "+70", l: "Leads qualificados/mês" },
      { v: "3×", l: "Consultas agendadas" },
      { v: "R$0", l: "Investimento em ads" },
    ],
    headline: "+70 leads/mês qualificados",
    solution: "Landing page de autoridade + SEO local + funil no Instagram",
  },
  {
    tag: "EMPRESA DE SERVIÇOS",
    title: "Constrular Reformas",
    location: "Belo Horizonte, MG",
    period: "Resultado em 45 dias",
    desc: "Time sobrecarregado com orçamentos manuais, follow-ups perdidos e clientes sem retorno. Operação caótica e ineficiente.",
    metrics: [
      { v: "−60%", l: "Tempo em tarefas manuais" },
      { v: "+40%", l: "Capacidade de atendimento" },
      { v: "24h", l: "Resposta automática" },
    ],
    headline: "−60% tempo operacional",
    solution: "CRM + automação de orçamentos + painel de gestão de OS",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="04"
          eyebrow="Resultados Reais"
          title={<>Projetos <span className="italic font-serif text-foreground">entregues</span> por nós.</>}
          description="Trabalhos reais, no ar, gerando resultado para nossos clientes. Sem mockups, sem invenção — apenas execução."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.12}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block card-premium rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={p.img}
                    alt={`Projeto ${p.name} desenvolvido pela AG Solutions`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-t-2xl" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.22em] bg-background/70 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 font-mono">
                    {p.segment}
                  </span>
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/70 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground/30 pb-1 group-hover:border-primary group-hover:text-neon transition-colors">
                    Ver Projeto
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Quer ver seu projeto aqui? Vamos conversar.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold btn-glow"
            >
              Solicitar diagnóstico <ArrowUpRight size={15} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


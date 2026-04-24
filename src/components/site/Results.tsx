import { FadeIn, SectionHeader } from "./Section";
import dashboard from "@/assets/result-dashboard.jpg";
import website from "@/assets/result-website.jpg";
import landing from "@/assets/result-landing.jpg";
import system from "@/assets/result-system.jpg";
import crm from "@/assets/result-crm.jpg";
import whatsapp from "@/assets/result-whatsapp.jpg";

const gallery = [
  { img: dashboard, tag: "Dashboard", title: "Painéis de gestão em tempo real" },
  { img: website, tag: "Sites", title: "Sites institucionais premium" },
  { img: landing, tag: "Landing", title: "Landing pages de alta conversão" },
  { img: system, tag: "Sistemas", title: "Sistemas sob medida" },
  { img: crm, tag: "CRM", title: "CRM e pipeline comercial" },
  { img: whatsapp, tag: "Automação", title: "WhatsApp automatizado com IA" },
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
    <section id="resultados" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Casos reais"
          title={<>Empresas que <em className="font-serif italic text-gradient">cresceram</em> com a gente.</>}
          description="Dados reais, projetos reais. Sem inflação de números ou casos inventados."
        />

        {/* Visual gallery */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.06}>
              <div className="group card-premium rounded-2xl overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] bg-background/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    {g.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-semibold">{g.title}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-20 space-y-6">
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="card-premium rounded-2xl p-7 sm:p-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-neon">{c.tag}</div>
                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl tracking-tight">{c.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {c.location} • {c.period}
                    </div>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{c.desc}</p>

                    <div className="mt-7 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.l} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                          <div className="font-serif text-3xl text-gradient leading-none">{m.v}</div>
                          <div className="mt-2 text-[11px] text-muted-foreground leading-snug">{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l lg:border-white/8 lg:pl-8">
                    <div className="rounded-xl bg-primary/10 border border-primary/30 p-5">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-neon">Resultado</div>
                      <div className="mt-2 font-serif text-3xl">{c.headline}</div>
                    </div>
                    <div className="mt-5">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Solução aplicada
                      </div>
                      <div className="mt-2 text-sm leading-relaxed">{c.solution}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

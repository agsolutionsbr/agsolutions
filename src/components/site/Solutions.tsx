import { Instagram } from "@/components/site/icons/Instagram";
import { FadeIn, SectionHeader } from "./Section";
import { ArrowRight, Globe, LayoutDashboard, Bot, Check, Clock } from "lucide-react";

const solutions = [
  {
    tag: "WEB",
    icon: Globe,
    title: "Sites Profissionais",
    desc: "Sites rápidos, modernos e feitos para converter visitantes em clientes — não apenas para 'ter uma presença online'.",
    bullets: [
      "Landing pages de alta conversão",
      "Sites institucionais completos",
      "Catálogo online com filtros",
      "SEO técnico para o Google",
      "Agendamento online integrado",
    ],
    badge: "Pronto em 2 a 3 dias úteis",
  },
  {
    tag: "SISTEMAS",
    icon: LayoutDashboard,
    title: "Painéis de Gestão",
    desc: "Controle total da sua empresa em um sistema simples e intuitivo — chega de planilhas perdidas e informação fragmentada.",
    bullets: [
      "Controle financeiro integrado",
      "Cadastro e histórico de clientes",
      "Gestão de estoque",
      "Ordens de serviço digitais",
      "Dashboard com métricas em tempo real",
      "Acesso multiusuário com permissões",
    ],
  },
  {
    tag: "AUTOMAÇÃO",
    icon: Bot,
    title: "Automações Inteligentes",
    desc: "Reduza trabalho manual e aumente a velocidade do seu atendimento. Seu cliente responde em segundos, não em horas.",
    bullets: [
      "WhatsApp automático com IA",
      "Follow-up de clientes passivos",
      "Captação e qualificação de leads",
      "CRM integrado ao funil",
      "Atendimento com inteligência artificial",
    ],
  },
  {
    tag: "INSTAGRAM",
    icon: Instagram,
    title: "Gestão de Instagram",
    desc: "Presença digital profissional que gera confiança, autoridade e oportunidades de negócio todos os meses.",
    bullets: [
      "Conteúdo estratégico e consistente",
      "Crescimento orgânico local",
      "Captação de leads via stories",
      "Funil comercial pelo Instagram",
      "Posicionamento de autoridade",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="02"
          eyebrow="O que entregamos"
          title={<>Soluções que <span className="italic font-serif text-foreground">geram resultado</span>.</>}
          description="Não vendemos serviço solto. Montamos a estrutura digital completa que sua empresa precisa para competir e crescer."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-5 sm:gap-6">
          {solutions.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="card-premium rounded-2xl p-7 sm:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-neon">
                    <s.icon size={22} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-3xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="mt-0.5 text-neon shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {s.badge && (
                  <div className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs text-success">
                    <Clock size={13} /> {s.badge}
                  </div>
                )}

                <a
                  href="#contato"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neon hover:gap-3 transition-all"
                >
                  Saiba mais <ArrowRight size={16} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

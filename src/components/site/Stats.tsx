import { FadeIn } from "./Section";
import { Counter } from "./Counter";

const items = [
  { v: 50, suffix: "+", label: "Projetos entregues", sub: "Sites, sistemas e automações em produção" },
  { v: 98, suffix: "%", label: "Satisfação dos clientes", sub: "Empresas que voltam e indicam o trabalho" },
  { v: 300, suffix: "%", label: "Crescimento médio", sub: "Em presença digital após 90 dias" },
  { v: 7, suffix: " UF", label: "Estados atendidos", sub: "Atendimento online em todo o Brasil" },
];

const clients = [
  "Bella Vita", "Santos & Almeida", "Constrular",
  "Estúdio Prima", "MedCare+", "Tech Build",
];

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24 border-y border-white/8 bg-white/[0.012]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <span className="eyebrow eyebrow-dot">Indicadores · 2026</span>
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em]">
            Atualizado em abril
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/8 border border-white/8 rounded-2xl overflow-hidden">
          {items.map((it, i) => (
            <FadeIn key={it.label} delay={i * 0.06}>
              <div className="p-7 sm:p-9 h-full">
                <div className="font-serif font-light text-5xl sm:text-6xl text-foreground leading-none tracking-tight">
                  <Counter to={it.v} suffix={it.suffix} />
                </div>
                <div className="mt-5 text-sm font-medium">{it.label}</div>
                <div className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{it.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-16">
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
            Empresas que confiam na AG Solutions
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((c) => (
              <span
                key={c}
                className="font-serif text-xl text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

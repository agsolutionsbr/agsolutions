import { FadeIn } from "./Section";
import { Counter } from "./Counter";

const items = [
  { v: 31, suffix: "+", label: "Projetos Entregues", sub: "sites, sistemas e automações" },
  { v: 62, suffix: "%", label: "Taxa de Satisfação", sub: "clientes que voltam e indicam" },
  { v: 192, suffix: "%", label: "Crescimento Médio", sub: "em presença digital dos clientes" },
  { v: 7, suffix: "+", label: "Estados Atendidos", sub: "do Pará ao Rio Grande do Sul" },
];

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <FadeIn key={it.label} delay={i * 0.08}>
              <div className="card-premium rounded-2xl p-6 sm:p-7 h-full">
                <div className="font-serif text-5xl sm:text-6xl text-gradient leading-none">
                  <Counter to={it.v} suffix={it.suffix} />
                </div>
                <div className="mt-4 text-sm font-semibold">{it.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{it.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-16">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground text-center">
            Empresas que confiam na AG Solutions
          </div>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4">
            {[
              { i: "BV", n: "Clínica Bella Vita" },
              { i: "AS", n: "Advocacia Santos" },
              { i: "TB", n: "Tech Build" },
              { i: "EP", n: "Estúdio Prima" },
              { i: "CL", n: "Constrular" },
              { i: "MC", n: "MedCare Plus" },
            ].map((b) => (
              <div key={b.n} className="glass rounded-xl px-3 py-4 flex items-center gap-3 hover:border-primary/40 transition">
                <div className="h-9 w-9 rounded-lg bg-primary/15 text-neon font-bold text-xs flex items-center justify-center">
                  {b.i}
                </div>
                <div className="text-xs sm:text-sm truncate">{b.n}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

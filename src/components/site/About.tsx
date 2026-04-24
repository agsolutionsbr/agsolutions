import { FadeIn, SectionHeader } from "./Section";
import { TrendingUp, Layers, Cpu, HeartHandshake } from "lucide-react";

const pillars = [
  { icon: TrendingUp, title: "Crescimento real", desc: "Cada projeto é desenhado com foco em resultado comercial, não apenas visual." },
  { icon: Layers, title: "Estrutura sólida", desc: "Sistemas robustos que acompanham o crescimento da sua empresa sem quebrar." },
  { icon: Cpu, title: "Tecnologia moderna", desc: "Ferramentas e plataformas de ponta — não gambiarras improvisadas." },
  { icon: HeartHandshake, title: "Atendimento humano", desc: "Você fala com pessoas reais que entendem o seu negócio e o seu mercado." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeader
              align="left"
              index="05"
              eyebrow="Sobre a AG"
              title={<>Tecnologia aplicada ao <span className="italic font-serif text-foreground">crescimento real</span>.</>}
            />

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A AG Solutions nasceu ao perceber que muitas empresas boas perdem vendas por
                falta de estrutura digital. Negócios com excelente serviço, mas sem site
                profissional, sem processo comercial, sem automação e sem posicionamento.
              </p>
              <p>
                Nossa missão é transformar empresas comuns em negócios organizados, modernos e
                preparados para crescer. Unimos design, tecnologia e estratégia para entregar
                soluções que aumentam autoridade, melhoram operação e geram vendas.
              </p>
              <p className="text-foreground font-medium">
                Não entregamos templates. Entregamos estrutura digital sob medida para cada
                realidade de negócio.
              </p>
            </div>

            <FadeIn delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
              {["Alfredo Veloso", "Guilherme Ruggeri"].map((n) => (
                <div key={n} className="flex items-center gap-3 glass rounded-2xl px-4 py-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-neon flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {n.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{n}</div>
                    <div className="text-[11px] text-muted-foreground">Fundador</div>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="card-premium rounded-2xl p-6 h-full">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-neon">
                    <p.icon size={18} />
                  </div>
                  <h4 className="mt-5 font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

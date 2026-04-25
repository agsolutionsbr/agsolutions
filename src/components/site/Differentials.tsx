import { FadeIn, SectionHeader } from "./Section";
import { Users, Wand2, Target, Cpu, Palette, Timer } from "lucide-react";

const items = [
  { icon: Users, t: "Atendimento humano de verdade", d: "Você conversa direto com quem faz o projeto. Sem intermediários, sem tickets, sem respostas prontas. Isso significa ajustes em horas, não em semanas." },
  { icon: Wand2, t: "Projetos 100% personalizados", d: "Zero templates reaproveitados. Cada site, painel e automação é construído do zero para a realidade do seu negócio — por isso entregamos resultados, não páginas genéricas." },
  { icon: Target, t: "Foco total em vendas", d: "Nossos sites são pensados para converter: CTAs estratégicos, velocidade de carregamento e SEO aplicado. Não fazemos vitrine — fazemos máquina de captar cliente." },
  { icon: Cpu, t: "Tecnologia de verdade", d: "React, Vite, automações com IA e painéis em tempo real. O que entregamos hoje escala com seu negócio sem precisar refazer em 6 meses." },
  { icon: Palette, t: "Design premium", d: "Visual que comunica autoridade desde o primeiro segundo. Seu cliente sente que está lidando com uma empresa grande — mesmo que você tenha começado ontem." },
  { icon: Timer, t: "Sites prontos em 2 a 3 dias úteis", d: "Não é promessa — é processo. Enquanto outras agências levam semanas, a gente entrega rápido porque trabalha com stack moderna e escopo claro desde o dia 1." },
];

export function Differentials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="06"
          eyebrow="Por que a AG Solutions"
          title={<>O que nos <span className="italic font-serif text-foreground">diferencia</span>.</>}
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <FadeIn key={it.t} delay={i * 0.06}>
              <div className="card-premium rounded-2xl p-7 h-full">
                <div className="h-11 w-11 rounded-xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-neon">
                  <it.icon size={20} />
                </div>
                <h4 className="mt-5 font-semibold text-lg">{it.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-10">
            O que nossos clientes dizem
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <FadeIn delay={0.1}>
              <div className="card-premium rounded-2xl p-7">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "A AG Solutions entregou meu site em 3 dias e o resultado ficou muito acima do que eu esperava. Profissional, rápido e com um atendimento que você não encontra em agência grande."
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-sm font-semibold text-neon">
                    NM
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Napoli Massas e Molhos</div>
                    <div className="text-xs text-muted-foreground">Gastronomia · São Paulo</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="card-premium rounded-2xl p-7">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Eu precisava de uma landing page premium pra minha barbearia e eles entenderam exatamente o que eu queria. O design transmite a identidade da marca de um jeito que eu não conseguiria sozinho."
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-sm font-semibold text-neon">
                    OR
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Oduh Ruggeri Barbearia</div>
                    <div className="text-xs text-muted-foreground">Barbearia Premium · São Paulo</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FadeIn, SectionHeader } from "./Section";
import { Users, Wand2, Target, Cpu, Palette, Timer } from "lucide-react";

const items = [
  { icon: Users, t: "Atendimento humano de verdade", d: "Você conversa com quem faz o projeto. Sem terceirização, sem suporte robótico, sem enrolação." },
  { icon: Wand2, t: "Projetos 100% personalizados", d: "Nada de templates prontos ou soluções genéricas. Cada entrega é construída para o seu negócio." },
  { icon: Target, t: "Foco total em vendas", d: "Tudo que fazemos tem um objetivo: ajudar a sua empresa a vender mais e crescer com consistência." },
  { icon: Cpu, t: "Tecnologia de verdade", d: "Ferramentas modernas e escaláveis. O que você recebe hoje não vai ficar obsoleto em 6 meses." },
  { icon: Palette, t: "Design premium", d: "Visual que comunica autoridade. Seu cliente sente que está falando com uma empresa séria." },
  { icon: Timer, t: "Entrega rápida e previsível", d: "Prazos cumpridos. Comunicação clara. Você sabe exatamente o que está acontecendo a cada momento." },
];

export function Differentials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="06"
          eyebrow="Por que a AG Solutions"
          title={<>O que nos <span className="italic font-serif text-foreground">diferencia</span>.</>}
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <FadeIn key={it.t} delay={i * 0.06}>
              <div className="card-premium rounded-2xl p-7 h-full">
                <div className="h-11 w-11 rounded-xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-neon">
                  <it.icon size={20} />
                </div>
                <h4 className="mt-5 font-semibold text-lg">{it.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

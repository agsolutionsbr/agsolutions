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

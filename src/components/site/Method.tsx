import { FadeIn, SectionHeader } from "./Section";

const steps = [
  { n: "01", t: "Diagnóstico do Negócio", d: "Entendemos a fundo sua empresa, seu mercado, seus clientes e onde estão os gargalos digitais que travam o crescimento." },
  { n: "02", t: "Planejamento Estratégico", d: "Desenhamos um plano digital personalizado — o que construir, em que ordem e com qual objetivo de resultado." },
  { n: "03", t: "Desenvolvimento e Implantação", d: "Executamos com agilidade e precisão. Você acompanha cada etapa e recebe entregas funcionais — sem surpresas." },
  { n: "04", t: "Crescimento e Otimização Contínua", d: "Não largamos depois de entregar. Monitoramos, ajustamos e evoluímos sua estrutura para crescimento sustentável." },
];

export function Method() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Metodologia"
          title={<>Do diagnóstico ao <em className="font-serif italic text-gradient">resultado</em>.</>}
          description="Um processo claro, previsível e sem achismos. Você sabe exatamente o que vai acontecer e quando."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div className="relative card-premium rounded-2xl p-7 h-full">
                <div className="font-serif text-5xl text-gradient leading-none">{s.n}</div>
                <h4 className="mt-6 font-semibold text-lg">{s.t}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

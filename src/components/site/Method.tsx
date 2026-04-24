import { FadeIn, SectionHeader } from "./Section";

const steps = [
  { n: "01", t: "Diagnóstico", d: "Mergulhamos no seu negócio, mercado e clientes para identificar onde estão os gargalos digitais que travam o crescimento." },
  { n: "02", t: "Estratégia", d: "Desenhamos um plano sob medida — o que construir, em que ordem, com qual objetivo de resultado mensurável." },
  { n: "03", t: "Execução", d: "Desenvolvemos com agilidade e precisão. Você acompanha cada etapa e recebe entregas funcionais, sem surpresas." },
  { n: "04", t: "Otimização", d: "Não largamos depois de entregar. Monitoramos, ajustamos e evoluímos a estrutura para crescimento sustentável." },
];

export function Method() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="03"
          eyebrow="Metodologia"
          title={<>Do diagnóstico ao <span className="italic font-serif text-foreground">resultado</span>.</>}
          description="Um processo claro, previsível e sem achismos. Você sabe exatamente o que vai acontecer e quando."
        />

        <div className="mt-20 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[34px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <div className="relative">
                  {/* Step marker */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-[68px] w-[68px] rounded-full border border-white/15 bg-background flex items-center justify-center font-mono text-xs text-neon">
                      <span className="absolute inset-1.5 rounded-full border border-primary/20" />
                      {s.n}
                    </div>
                    <div className="font-serif font-light text-2xl tracking-tight">{s.t}</div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed lg:pr-4">
                    {s.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top meta line — like an editorial header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-[11px] font-mono text-muted-foreground/70 mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            DISPONÍVEL PARA NOVOS PROJETOS — 2026
          </span>
          <span className="hidden sm:block">EST. 2023 / SÃO PAULO — BRASIL</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-end">
          {/* Headline column */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-[2.25rem] sm:text-6xl lg:text-[5.2rem] leading-[1.02] sm:leading-[0.98] tracking-[-0.03em]"
            >
              <span className="text-gradient">Sua empresa pode</span>
              <br />
              <span className="text-foreground italic font-serif">vender mais</span>
              <span className="text-gradient">, operar melhor</span>
              <br />
              <span className="text-gradient">e </span>
              <span className="text-foreground italic font-serif">parecer maior</span>
              <span className="text-gradient">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid sm:grid-cols-2 gap-8 max-w-3xl"
            >
              <p className="text-muted-foreground leading-relaxed">
                Sites profissionais, automações com IA e sistemas sob medida para empresas
                que querem crescer com estrutura — não com improviso.
              </p>
              <div className="flex flex-col gap-2.5 text-sm">
                {[
                  "Atendimento em todo Brasil",
                  "Presencial e online",
                  "Projetos sob medida",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2.5 text-muted-foreground">
                    <Check size={14} className="text-neon shrink-0" /> {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-semibold btn-glow"
              >
                Solicitar diagnóstico gratuito
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#solucoes"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="underline decoration-dotted underline-offset-4">Ver soluções</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Side meta — number plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-white/10"
          >
            <div className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-[0.2em]">
              Indicadores
            </div>
            <div className="mt-6 space-y-7">
              <Metric n="50+" l="projetos entregues em todo Brasil" />
              <Metric n="98%" l="taxa de satisfação dos clientes" />
              <Metric n="2–3 dias" l="prazo médio de entrega de sites" />
            </div>
          </motion.div>
        </div>

        {/* Editorial showcase strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 sm:mt-28 relative"
        >
          <div className="absolute -inset-x-10 -inset-y-12 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <BrowserMock />
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif font-light text-4xl sm:text-5xl tracking-tight text-foreground leading-none">
        {n}
      </div>
      <div className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[200px]">{l}</div>
    </div>
  );
}

function BrowserMock() {
  return (
    <div className="relative card-premium rounded-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/[0.02]">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-4 flex-1 max-w-md mx-auto rounded-md bg-white/5 px-3 py-1 text-[11px] font-mono text-muted-foreground/70 text-center">
          agsolutions.com.br/dashboard
        </div>
        <div className="font-mono text-[10px] text-muted-foreground/60 hidden sm:block">SECURE</div>
      </div>

      {/* Inside layout: sidebar + content */}
      <div className="grid grid-cols-12 min-h-[420px]">
        {/* Sidebar */}
        <aside className="hidden md:flex col-span-3 lg:col-span-2 flex-col gap-1 border-r border-white/8 p-4 bg-white/[0.015]">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 px-2 mb-3">
            AG · Console
          </div>
          {["Visão geral", "Leads", "Sites", "Automações", "Clientes", "Relatórios"].map((l, i) => (
            <div
              key={l}
              className={`px-3 py-2 rounded-lg text-xs ${
                i === 0
                  ? "bg-primary/15 text-foreground border border-primary/25"
                  : "text-muted-foreground/80 hover:text-foreground"
              }`}
            >
              {l}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 p-5 sm:p-7">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Painel · Abril 2026
              </div>
              <h3 className="mt-1 font-serif font-light text-2xl sm:text-3xl tracking-tight">
                Visão geral do crescimento
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-success/12 text-success px-3 py-1 text-[11px] font-medium border border-success/20">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Ao vivo
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { l: "Leads no mês", v: "284", d: "+12% vs mar" },
              { l: "Conversão", v: "7.4%", d: "+1.8 p.p." },
              { l: "Receita gerada", v: "R$ 184k", d: "+28%" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/8 bg-white/[0.025] p-3 sm:p-4">
                <div className="text-[10px] font-mono uppercase tracking-wide text-muted-foreground/70">
                  {s.l}
                </div>
                <div className="mt-1.5 font-serif font-light text-xl sm:text-2xl">{s.v}</div>
                <div className="mt-0.5 text-[10px] text-success">{s.d}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div className="flex items-end gap-1.5 h-28">
              {[35, 48, 30, 55, 42, 65, 50, 72, 60, 82, 70, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.9, delay: 0.9 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-md bg-gradient-to-t from-primary/30 to-neon/80"
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground/60">
              <span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span>
              <span>MAI</span><span>JUN</span><span>JUL</span><span>AGO</span>
              <span>SET</span><span>OUT</span><span>NOV</span><span>DEZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ROI badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute -top-5 right-4 sm:right-8 card-premium rounded-xl px-4 py-3 shadow-elegant"
      >
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-neon">ROI médio</div>
        <div className="mt-0.5 font-serif font-light text-2xl">+312%</div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, MapPin, Rocket, Clock } from "lucide-react";

const stat = (label: string, value: string, sub: string) => ({ label, value, sub });

const dashboardStats = [
  stat("Leads", "284", "+12%"),
  stat("Sites Ativos", "47", "+3"),
  stat("Automações", "156", "+28%"),
];

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-neon"
            >
              <Sparkles size={14} /> Crescimento Digital
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
            >
              Sua empresa pode{" "}
              <em className="text-gradient not-italic font-serif italic">vender mais</em>,
              operar melhor e parecer maior.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Criamos sites profissionais, automações inteligentes e sistemas personalizados
              para empresas que querem crescer de verdade — não amanhã, agora.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm text-success"
            >
              <Clock size={16} /> Sites profissionais prontos em 2 a 3 dias úteis
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold btn-glow"
              >
                Solicitar Diagnóstico Gratuito <ArrowRight size={18} />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold hover:bg-white/10 transition"
              >
                Ver Soluções
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-neon"/> Atendimento em todo Brasil</span>
              <span className="inline-flex items-center gap-2"><Globe size={14} className="text-neon"/> Presencial e Online</span>
              <span className="inline-flex items-center gap-2"><Rocket size={14} className="text-neon"/> Projetos Sob Medida</span>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative card-premium rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  agsolutions.com.br
                </div>
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Dashboard AG Solutions
              </div>
              <div className="flex items-center justify-between mt-1">
                <h3 className="text-lg font-semibold">Visão Geral</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 text-success px-2 py-0.5 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Ao Vivo
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {dashboardStats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{s.label}</div>
                    <div className="mt-1 text-xl font-bold">{s.value}</div>
                    <div className="text-[10px] text-success mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-28 rounded-xl bg-white/[0.03] border border-white/5 p-3 flex items-end gap-1.5">
                {[40, 55, 35, 70, 50, 80, 60, 90, 75, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                    className="flex-1 rounded-md bg-gradient-to-t from-primary/40 to-neon"
                  />
                ))}
              </div>

              <div className="text-right mt-3">
                <a className="text-xs text-neon hover:underline" href="#resultados">Ver relatório →</a>
              </div>
            </div>

            {/* ROI badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -top-4 -right-2 sm:-right-6 card-premium rounded-2xl px-4 py-3 text-right shadow-elegant"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-neon">ROI Médio</div>
              <div className="text-2xl font-bold text-gradient">+312%</div>
              <div className="text-[10px] text-muted-foreground">em presença digital</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

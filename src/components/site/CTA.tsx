import { Instagram } from "@/components/site/icons/Instagram";
import { FadeIn, SectionHeader } from "./Section";
import { ArrowRight, Check, MessageCircle, Mail, Clock } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/5511961836889";
const EMAIL = "mailto:agsolutionsbr@gmail.com";
const IG = "https://instagram.com/agsolutionsbr";

export function CTA() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <LampContainer className="min-h-[22rem] sm:min-h-[26rem] -mb-32 sm:-mb-40">
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-foreground to-muted-foreground py-2 bg-clip-text text-center font-serif text-4xl sm:text-6xl font-light tracking-tight text-transparent"
          >
            Vamos construir <br /> seu próximo nível.
          </motion.h2>
        </LampContainer>

        <SectionHeader
          index="07"
          eyebrow="Próximo passo"
          title={<>Seu negócio merece <span className="italic font-serif text-foreground">estrutura profissional</span>.</>}
          description="Se você quer parar de improvisar e começar a crescer com tecnologia, a AG Solutions pode construir esse próximo nível com você."
        />

        <FadeIn delay={0.15} className="mt-14">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-premium rounded-2xl p-8 sm:p-10">
              <ul className="space-y-4">
                {[
                  "Diagnóstico gratuito, sem compromisso",
                  "Resposta em até 2 horas úteis",
                  "Proposta personalizada para o seu negócio",
                  "Sites prontos em 2 a 3 dias úteis",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="h-6 w-6 mt-0.5 rounded-full bg-success/15 ring-1 ring-success/40 flex items-center justify-center shrink-0">
                      <Check size={13} className="text-success" />
                    </span>
                    <span className="text-base">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-success text-background px-6 py-4 font-semibold btn-glow"
                  style={{ boxShadow: "0 0 0 1px oklch(0.72 0.18 155 / 0.5), 0 10px 40px -10px oklch(0.72 0.18 155 / 0.5)" }}
                >
                  <MessageCircle size={18} /> Falar no WhatsApp agora
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold hover:bg-white/10 transition"
                >
                  Ver Soluções <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="glass rounded-xl px-4 py-3.5 hover:border-primary/40 transition flex items-center gap-3 min-w-0">
                  <span className="h-9 w-9 shrink-0 rounded-lg bg-success/15 ring-1 ring-success/30 flex items-center justify-center">
                    <MessageCircle size={16} className="text-success" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                    <div className="text-xs font-semibold truncate">+55 11 96183-6889</div>
                  </div>
                </a>
                <a href={EMAIL} className="glass rounded-xl px-4 py-3.5 hover:border-primary/40 transition flex items-center gap-3 min-w-0">
                  <span className="h-9 w-9 shrink-0 rounded-lg bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
                    <Mail size={16} className="text-neon" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="text-xs font-semibold truncate">agsolutionsbr@gmail.com</div>
                  </div>
                </a>
                <a href={IG} target="_blank" rel="noreferrer" className="glass rounded-xl px-4 py-3.5 hover:border-primary/40 transition flex items-center gap-3 min-w-0">
                  <span className="h-9 w-9 shrink-0 rounded-lg bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
                    <Instagram size={16} className="text-neon" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Instagram</div>
                    <div className="text-xs font-semibold truncate">@agsolutionsbr</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <form
              action={EMAIL}
              method="post"
              encType="text/plain"
              className="card-premium rounded-2xl p-8 sm:p-10"
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-neon">
                <Clock size={13} /> Diagnóstico em 2h úteis
              </div>
              <h3 className="mt-3 font-serif text-3xl">Solicite seu diagnóstico</h3>

              <div className="mt-6 space-y-4">
                <Field name="nome" label="Seu nome" placeholder="Como podemos te chamar" />
                <Field name="empresa" label="Empresa / Negócio" placeholder="Ex: clínica, advocacia, construção..." />
                <Field name="contato" label="WhatsApp ou Email" placeholder="(11) 99999-9999 ou voce@email.com" />
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">O que você precisa?</label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    placeholder="Conte rapidamente o desafio do seu negócio"
                    className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 font-semibold btn-glow"
                >
                  Solicitar diagnóstico gratuito <ArrowRight size={18} />
                </button>
                <p className="text-[11px] text-muted-foreground text-center">
                  Resposta em até 2 horas úteis. Sem compromisso.
                </p>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder }: { name: string; label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition"
      />
    </div>
  );
}

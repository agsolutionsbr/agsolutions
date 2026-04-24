import logo from "@/assets/ag-logo.jpeg";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/10">
              <img src={logo} alt="AG Solutions" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-semibold">AG Solutions</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Soluções inteligentes • Resultados reais
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Sites profissionais, sistemas sob medida e automações inteligentes para empresas
            que querem crescer com estrutura.
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-foreground text-muted-foreground transition">Início</a></li>
            <li><a href="#solucoes" className="hover:text-foreground text-muted-foreground transition">Soluções</a></li>
            <li><a href="#resultados" className="hover:text-foreground text-muted-foreground transition">Resultados</a></li>
            <li><a href="#sobre" className="hover:text-foreground text-muted-foreground transition">Sobre</a></li>
            <li><a href="#contato" className="hover:text-foreground text-muted-foreground transition">Contato</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="https://wa.me/5511961836889" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-success transition">
                <MessageCircle size={16} className="text-success" /> +55 11 96183-6889
              </a>
            </li>
            <li>
              <a href="mailto:agsolutionsbr@gmail.com" className="inline-flex items-center gap-2 hover:text-neon transition">
                <Mail size={16} className="text-neon" /> agsolutionsbr@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/agsolutionsbr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-neon transition">
                <Instagram size={16} className="text-neon" /> @agsolutionsbr
              </a>
            </li>
            <li className="text-muted-foreground text-xs pt-2">
              Atendimento em todo Brasil • Online e Presencial
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} AG Solutions. Todos os direitos reservados.</div>
          <div>Alfredo Veloso • Guilherme Ruggeri</div>
        </div>
      </div>
    </footer>
  );
}

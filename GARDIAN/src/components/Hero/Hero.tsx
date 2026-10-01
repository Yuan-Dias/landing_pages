import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_LOGO_SRC } from "@/config/assets";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-28 text-primary-foreground sm:pt-32"
    >
      <div
        className="radar-grid absolute inset-0 opacity-[.07]"
        aria-hidden="true"
      />

      <div
        className="absolute -right-36 top-16 size-[520px] rounded-full border border-primary-foreground/10"
        aria-hidden="true"
      />

      <div
        className="absolute -right-16 top-36 size-[360px] rounded-full border border-primary-foreground/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 lg:min-h-[680px] lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8 lg:pb-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-bold">
            <span
              className="size-2 animate-pulse rounded-full bg-live"
              aria-hidden="true"
            />
            Território monitorado em tempo real
          </div>

          <h1 className="max-w-full leading-none">
            <img
              src={BRAND_LOGO_SRC}
              alt="GARDIAN - Defesa Civil"
              className="h-auto w-[min(100%,22rem)] object-contain sm:w-[25rem]"
            />
          </h1>

          <p className="mt-5 max-w-xl text-xl font-bold leading-snug sm:text-2xl">
            Sistema de Monitoramento e Gestão de Riscos Municipais
          </p>

          <p className="mt-7 text-lg font-semibold text-primary-foreground">
            Uma visão integrada do território para agir antes do desastre.
          </p>

          <p className="mt-3 max-w-xl leading-7 text-primary-foreground/75">
            Dados meteorológicos, geológicos e zonas de risco em um único
            painel.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-live text-primary hover:bg-live/90"
            >
              <a href="#contato">Solicitar demonstração</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#funcionalidades">
                Conhecer funcionalidades <ArrowDown />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6 sm:flex sm:gap-8">
            <div>
              <strong className="text-2xl">24h</strong>
              <span className="block text-xs text-primary-foreground/65">
                monitoramento
              </span>
            </div>

            <div>
              <strong className="text-2xl">360°</strong>
              <span className="block text-xs text-primary-foreground/65">
                visão territorial
              </span>
            </div>

            <div>
              <strong className="text-2xl">01</strong>
              <span className="block text-xs text-primary-foreground/65">
                painel integrado
              </span>
            </div>
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}

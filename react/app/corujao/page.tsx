import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  Clock3Icon,
  MapPinIcon,
  MessageCircleIcon,
  Gamepad2Icon,
  SparklesIcon,
} from "lucide-react";

import { SiteShell } from "@/components/shared/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  corujaoChips,
  corujaoFaqItems,
  corujaoSpecs,
} from "@/lib/corujao-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Corujão | Santos Games Arena",
  description:
    "Corujão na Santos Games Arena com horário, preço, regras, FAQs e especificações da estrutura.",
};

const supportHref =
  "https://wa.me/5516992070533?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20algumas%20informa%C3%A7%C3%B5es%20sobre%20o%20coruj%C3%A3o";

const reservationHref =
  "https://wa.me/5516992070533?text=Ol%C3%A1%2C%20quero%20reservar%20minha%20vaga%20no%20Coruj%C3%A3o%20e%20preciso%20de%20informa%C3%A7%C3%B5es";

function PillButton({
  href,
  children,
  variant = "ghost",
}: {
  href: string;
  children: ReactNode;
  variant?: "ghost" | "primary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200";
  const styles =
    variant === "primary"
      ? "border-white/15 bg-primary text-primary-foreground shadow-[0_18px_44px_rgba(228,2,26,0.22)] hover:brightness-110"
      : "border-white/12 bg-white/5 text-white/90 hover:border-white/20 hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function InfoLine({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </div>
        <div className="mt-1 text-sm leading-6 text-white">{value}</div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <Card className="border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-2">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {eyebrow}
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

export default function CorujaoPage() {
  return (
    <SiteShell>
      <main className="flex flex-1 justify-center py-6 sm:py-8 lg:py-10">
        <section className="flex w-full max-w-6xl flex-col gap-5">
          <header className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[0_28px_100px_-48px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:px-6 sm:py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-40 max-w-full overflow-hidden rounded-[0.9rem] border border-white/10 bg-white/5 sm:h-11 sm:w-44">
                  <Image
                    src="/saiba-mais/image/sga-logo.png"
                    alt="Santos Games Arena"
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 160px, 176px"
                    className="object-contain p-1.5"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {siteConfig.name}
                  </div>
                  <h1 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Corujão SGA
                  </h1>
                  <p className="mt-1 text-sm text-slate-300">
                    Tudo que você precisa saber antes de vir.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <PillButton href="/">
                  <ArrowLeftIcon className="size-4" />
                  Voltar
                </PillButton>
                <PillButton href={supportHref} variant="primary">
                  <MessageCircleIcon className="size-4" />
                  Suporte no WhatsApp
                </PillButton>
              </div>
            </div>
          </header>

          <section className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-34px_rgba(0,0,0,0.9)]">
            <div className="absolute inset-0">
              <Image
                src="/saiba-mais/image/banners/capa001.avif"
                alt=""
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,2,26,0.22),transparent_36%),linear-gradient(180deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.36)_46%,rgba(0,0,0,0.82)_100%)]" />
            </div>

            <div className="relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end lg:p-8">
              <div className="flex max-w-3xl flex-col gap-4">
                <Badge className="w-fit rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  <SparklesIcon className="mr-1 size-3.5" />
                  Corujão SGA
                </Badge>

                <div className="space-y-3">
                  <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Tudo que você precisa saber antes de vir:
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                    Horário, preço, regras, o que pode trazer, estrutura dos PCs
                    e dúvidas mais comuns.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {corujaoChips.map((chip) => (
                    <div
                      key={chip.label}
                      className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {chip.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-white">
                        {chip.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <PillButton href={reservationHref} variant="primary">
                    <MessageCircleIcon className="size-4" />
                    Reservar vaga
                  </PillButton>
                  <PillButton href="#faq">
                    <ArrowUpRightIcon className="size-4" />
                    Ver dúvidas frequentes
                  </PillButton>
                </div>
              </div>

              <div className="grid gap-3">
                <InfoLine
                  icon={<Gamepad2Icon className="size-4" />}
                  label="Experiência"
                  value="Sessão noturna com estrutura premium para jogar a madrugada toda."
                />
                <InfoLine
                  icon={<Clock3Icon className="size-4" />}
                  label="Check-in"
                  value="Entrada com check-in rápido e suporte da equipe durante o evento."
                />
                <InfoLine
                  icon={<MapPinIcon className="size-4" />}
                  label="Local"
                  value="Av. Nove de Julho, 1992, Ribeirão Preto - SP."
                />
              </div>
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-2">
            <SectionCard title="Como funciona" eyebrow="Visão geral">
              <p className="text-sm leading-7 text-slate-300">
                O Corujão é uma sessão noturna pra você jogar a madrugada toda
                com estrutura premium. Chegou, escolheu seu PC, plugou seus
                periféricos se quiser e a gameplay começa.
              </p>

              <Separator className="my-5 bg-white/10" />

              <ul className="grid gap-3 text-sm text-slate-200">
                <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Entrada com check-in rápido
                </li>
                <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Ambiente climatizado e organizado
                </li>
                <li className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Suporte da equipe durante o evento
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Perguntas frequentes" eyebrow="FAQ">
              <div id="faq" className="grid gap-3">
                {corujaoFaqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-white/95">
                      <span>{item.question}</span>
                      <span className="text-slate-400 transition group-open:rotate-180">
                        <ArrowUpRightIcon className="size-4 rotate-45" />
                      </span>
                    </summary>
                    <div className="pt-3 text-sm leading-7 text-slate-300">
                      {item.answer}
                    </div>
                  </details>
                ))}

                <details className="group rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-white/95">
                    <span>Ver especificações técnicas</span>
                    <span className="text-slate-400 transition group-open:rotate-180">
                      <ArrowUpRightIcon className="size-4 rotate-45" />
                    </span>
                  </summary>

                  <div className="pt-4">
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-white/[0.05] text-xs uppercase tracking-[0.18em] text-slate-400">
                          <tr>
                            <th className="px-4 py-3 font-medium">Item</th>
                            <th className="px-4 py-3 font-medium">
                              Especificação
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 bg-black/20 text-slate-200">
                          {corujaoSpecs.map((row) => (
                            <tr key={row.item}>
                              <td className="w-1/3 px-4 py-3 font-medium text-white">
                                {row.item}
                              </td>
                              <td className="px-4 py-3 leading-6">{row.spec}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              </div>
            </SectionCard>
          </div>

          <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Atendimento
                  </div>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">
                    Tire dúvidas no WhatsApp
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-slate-300">
                    Se quiser confirmar vaga, horário ou qualquer detalhe do
                    Corujão, o canal mais rápido é o atendimento direto.
                  </p>
                </div>

                <Separator className="my-5 bg-white/10" />

                <div className="flex flex-wrap gap-3">
                  <PillButton href={supportHref} variant="primary">
                    <MessageCircleIcon className="size-4" />
                    Falar no WhatsApp
                  </PillButton>
                  <PillButton href="/">
                    <ArrowLeftIcon className="size-4" />
                    Voltar para os atalhos
                  </PillButton>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Resumo
                  </div>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">
                    Corujão Gamer
                  </h2>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="font-medium text-white">Preço:</span> R$
                    99,90
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="font-medium text-white">Vagas:</span>{" "}
                    limitadas a 10 por edição
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="font-medium text-white">Pagamento:</span>{" "}
                    Pix, cartão e dinheiro
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <footer className="flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Santos Games Arena</span>
            <span>Corujão SGA · Ribeirão Preto - SP</span>
          </footer>
        </section>
      </main>
    </SiteShell>
  );
}

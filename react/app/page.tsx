import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  Clock3Icon,
  MapPinIcon,
} from "lucide-react";

import { SiteShell } from "@/components/shared/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { homeLinktreeLinks, linktreeLinks } from "@/lib/linktree-links";
import { siteConfig } from "@/lib/site-config";

function LinkCard({
  title,
  description,
  href,
  image,
  disabled,
  disabledLabel = "Em breve",
}: (typeof linktreeLinks)[number]) {
  const inner = (
    <Card className="group h-full overflow-hidden rounded-[1.35rem] border border-primary/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(120,8,18,0.11)_44%,rgba(8,3,3,0.66))] shadow-[0_28px_90px_-42px_rgba(255,16,38,0.42)] ring-1 ring-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.095),rgba(175,13,29,0.18)_44%,rgba(10,3,3,0.72))] hover:shadow-[0_34px_110px_-44px_rgba(255,20,42,0.58)]">
      <CardContent className="grid h-full gap-3 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate font-heading text-sm font-semibold tracking-[-0.03em] text-white sm:text-base">
                {title}
              </h2>
              {disabled ? (
                <Badge
                  variant="secondary"
                  className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-red-100"
                >
                  {disabledLabel}
                </Badge>
              ) : null}
            </div>
            <p className="mt-1 max-w-md text-xs leading-5 text-stone-300 sm:text-sm">
              {description}
            </p>
          </div>

          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-red-100 shadow-[0_0_24px_rgba(255,25,45,0.12)] transition group-hover:border-primary/55 group-hover:bg-primary group-hover:text-primary-foreground">
            {disabled ? (
              <Clock3Icon className="size-4" aria-hidden="true" />
            ) : (
              <ArrowUpRightIcon className="size-4" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="relative h-28 overflow-hidden rounded-[0.95rem] border border-primary/15 bg-black/60 sm:h-44 md:h-56 lg:h-64">
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition duration-500 group-hover:scale-[1.04] ${
              disabled
                ? "grayscale saturate-0 contrast-90 opacity-55"
                : "saturate-[1.12] contrast-[1.08]"
            }`}
            priority={title === "Suporte"}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,20,40,0.28),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.2)_34%,rgba(0,0,0,0.78))]" />
          {disabled ? (
            <div className="absolute inset-0 flex items-end justify-start p-4">
              <span className="rounded-full border border-primary/25 bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-red-50 shadow-[0_0_26px_rgba(255,20,40,0.16)] backdrop-blur-md">
                {disabledLabel}
              </span>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );

  const isInternalLink = href.startsWith("/");

  if (disabled) {
    return <div aria-disabled="true">{inner}</div>;
  }

  if (isInternalLink) {
    return (
      <Link href={href} aria-label={`${title} - abrir link`} className="block h-full">
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${title} - abrir link`}
      className="block h-full"
    >
      {inner}
    </a>
  );
}

export default function Home() {
  return (
    <SiteShell>
      <main className="flex flex-1 items-center py-6 sm:py-8">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <header className="relative overflow-hidden rounded-[1.65rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(164,11,26,0.12)_42%,rgba(10,3,3,0.68))] px-4 py-5 shadow-[0_30px_110px_-48px_rgba(255,22,42,0.5)] ring-1 ring-white/5 backdrop-blur-xl sm:px-6 sm:py-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,28,48,0.2),transparent_38%),linear-gradient(110deg,transparent,rgba(255,255,255,0.055),transparent)]" />
            <div className="relative grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
              <div className="relative size-16 overflow-hidden rounded-[1.1rem] border border-primary/25 bg-black/35 shadow-[0_18px_50px_-24px_rgba(255,25,45,0.75)] ring-1 ring-white/10 sm:size-20">
                <Image
                  src="/saiba-mais/image/logo-sg.png"
                  alt="Santos Games Arena"
                  fill
                  unoptimized
                  sizes="72px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              <div className="flex min-w-0 flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full border border-primary/30 bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_0_30px_rgba(255,25,45,0.28)]">
                    Atalhos oficiais
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-stone-200">
                    <MapPinIcon className="size-3.5" aria-hidden="true" />
                    Ribeirão Preto - SP
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="font-heading text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                    {siteConfig.name}
                  </h1>
                  <p className="max-w-3xl text-sm leading-7 text-stone-300 sm:text-base">
                    Central de links da SGA para suporte, campeonatos e canais
                    oficiais. Os estados de “em breve” continuam visíveis.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <Separator className="bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {homeLinktreeLinks.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>

          <footer className="flex flex-col gap-2 border-t border-primary/15 pt-4 text-xs uppercase tracking-[0.16em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Santos Games Arena</span>
            <span>Linktree oficial da SGA</span>
          </footer>
        </section>
      </main>
    </SiteShell>
  );
}

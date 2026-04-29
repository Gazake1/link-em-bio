import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,31,55,0.26),transparent_34%),radial-gradient(circle_at_88%_14%,rgba(132,8,18,0.24),transparent_28%),linear-gradient(135deg,#070303_0%,#130707_45%,#050202_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.035)_46%,transparent_47%),linear-gradient(to_bottom,transparent,rgba(255,64,64,0.045)_1px,transparent_1px)] bg-[size:88px_88px,100%_13px] opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

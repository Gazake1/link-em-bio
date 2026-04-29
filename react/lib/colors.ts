export type ThemeMode = "light" | "dark";

export type ColorToken =
  | "background"
  | "foreground"
  | "card"
  | "cardForeground"
  | "popover"
  | "popoverForeground"
  | "primary"
  | "primaryForeground"
  | "secondary"
  | "secondaryForeground"
  | "muted"
  | "mutedForeground"
  | "accent"
  | "accentForeground"
  | "destructive"
  | "border"
  | "input"
  | "ring";

export type ChartColorToken = "chart1" | "chart2" | "chart3" | "chart4" | "chart5";

export type SidebarColorToken =
  | "sidebar"
  | "sidebarForeground"
  | "sidebarPrimary"
  | "sidebarPrimaryForeground"
  | "sidebarAccent"
  | "sidebarAccentForeground"
  | "sidebarBorder"
  | "sidebarRing";

export const themeColors = {
  light: {
    background: "oklch(0.985 0.01 72)",
    foreground: "oklch(0.23 0.03 43)",
    card: "oklch(1 0.005 72)",
    cardForeground: "oklch(0.23 0.03 43)",
    popover: "oklch(1 0.005 72)",
    popoverForeground: "oklch(0.23 0.03 43)",
    primary: "oklch(0.58 0.16 40)",
    primaryForeground: "oklch(0.985 0.01 72)",
    secondary: "oklch(0.94 0.025 64)",
    secondaryForeground: "oklch(0.3 0.04 43)",
    muted: "oklch(0.955 0.015 68)",
    mutedForeground: "oklch(0.48 0.02 43)",
    accent: "oklch(0.935 0.04 52)",
    accentForeground: "oklch(0.3 0.04 43)",
    destructive: "oklch(0.62 0.22 25)",
    border: "oklch(0.89 0.015 60)",
    input: "oklch(0.89 0.015 60)",
    ring: "oklch(0.58 0.16 40)",
  },
  dark: {
    background: "oklch(0.19 0.02 35)",
    foreground: "oklch(0.95 0.012 72)",
    card: "oklch(0.23 0.02 36)",
    cardForeground: "oklch(0.95 0.012 72)",
    popover: "oklch(0.23 0.02 36)",
    popoverForeground: "oklch(0.95 0.012 72)",
    primary: "oklch(0.72 0.13 46)",
    primaryForeground: "oklch(0.18 0.02 35)",
    secondary: "oklch(0.28 0.02 42)",
    secondaryForeground: "oklch(0.95 0.012 72)",
    muted: "oklch(0.27 0.02 39)",
    mutedForeground: "oklch(0.73 0.02 64)",
    accent: "oklch(0.3 0.04 44)",
    accentForeground: "oklch(0.95 0.012 72)",
    destructive: "oklch(0.68 0.2 23)",
    border: "oklch(1 0 0 / 10%)",
    input: "oklch(1 0 0 / 14%)",
    ring: "oklch(0.72 0.13 46)",
  },
} as const satisfies Record<ThemeMode, Record<ColorToken, string>>;

export const chartColors = {
  light: {
    chart1: "oklch(0.58 0.16 40)",
    chart2: "oklch(0.67 0.15 72)",
    chart3: "oklch(0.74 0.12 105)",
    chart4: "oklch(0.61 0.1 18)",
    chart5: "oklch(0.42 0.05 45)",
  },
  dark: {
    chart1: "oklch(0.72 0.13 46)",
    chart2: "oklch(0.78 0.1 80)",
    chart3: "oklch(0.66 0.1 140)",
    chart4: "oklch(0.67 0.12 14)",
    chart5: "oklch(0.5 0.04 45)",
  },
} as const satisfies Record<ThemeMode, Record<ChartColorToken, string>>;

export const sidebarColors = {
  light: {
    sidebar: "oklch(0.97 0.012 72)",
    sidebarForeground: "oklch(0.23 0.03 43)",
    sidebarPrimary: "oklch(0.58 0.16 40)",
    sidebarPrimaryForeground: "oklch(0.985 0.01 72)",
    sidebarAccent: "oklch(0.93 0.03 54)",
    sidebarAccentForeground: "oklch(0.3 0.04 43)",
    sidebarBorder: "oklch(0.89 0.015 60)",
    sidebarRing: "oklch(0.58 0.16 40)",
  },
  dark: {
    sidebar: "oklch(0.21 0.02 35)",
    sidebarForeground: "oklch(0.95 0.012 72)",
    sidebarPrimary: "oklch(0.72 0.13 46)",
    sidebarPrimaryForeground: "oklch(0.18 0.02 35)",
    sidebarAccent: "oklch(0.28 0.03 40)",
    sidebarAccentForeground: "oklch(0.95 0.012 72)",
    sidebarBorder: "oklch(1 0 0 / 10%)",
    sidebarRing: "oklch(0.72 0.13 46)",
  },
} as const satisfies Record<ThemeMode, Record<SidebarColorToken, string>>;

export const radiusConfig = {
  base: "1rem",
  sm: "calc(var(--radius) * 0.6)",
  md: "calc(var(--radius) * 0.8)",
  lg: "var(--radius)",
  xl: "calc(var(--radius) * 1.4)",
  "2xl": "calc(var(--radius) * 1.8)",
  "3xl": "calc(var(--radius) * 2.2)",
  "4xl": "calc(var(--radius) * 2.6)",
} as const;

export const colorCssVars = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  popover: "--popover",
  popoverForeground: "--popover-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  destructive: "--destructive",
  border: "--border",
  input: "--input",
  ring: "--ring",
  chart1: "--chart-1",
  chart2: "--chart-2",
  chart3: "--chart-3",
  chart4: "--chart-4",
  chart5: "--chart-5",
  sidebar: "--sidebar",
  sidebarForeground: "--sidebar-foreground",
  sidebarPrimary: "--sidebar-primary",
  sidebarPrimaryForeground: "--sidebar-primary-foreground",
  sidebarAccent: "--sidebar-accent",
  sidebarAccentForeground: "--sidebar-accent-foreground",
  sidebarBorder: "--sidebar-border",
  sidebarRing: "--sidebar-ring",
} as const;

export const colorConfig = {
  theme: themeColors,
  chart: chartColors,
  sidebar: sidebarColors,
  radius: radiusConfig,
  cssVars: colorCssVars,
} as const;

export function getThemeColor(mode: ThemeMode, token: ColorToken) {
  return themeColors[mode][token];
}

export function getChartColor(mode: ThemeMode, token: ChartColorToken) {
  return chartColors[mode][token];
}

export function getSidebarColor(mode: ThemeMode, token: SidebarColorToken) {
  return sidebarColors[mode][token];
}

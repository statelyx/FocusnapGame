"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Languages, MoonStar, SunMedium } from "lucide-react";
import { useAppContext } from "@/components/app-providers";

export function Header() {
  const { locale, setLocale, theme, setTheme, t } = useAppContext();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel sticky top-4 z-40 mt-2 flex items-center justify-between rounded-3xl px-4 py-3"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="FocusnapGame"
          width={220}
          height={60}
          priority
          className="h-12 w-auto sm:h-14"
        />
      </div>

      <div className="hidden items-center gap-6 text-sm text-muted md:flex">
        <a href="#how">{t.navHow}</a>
        <a href="#benefits">{t.navBenefits}</a>
        <a href="#session">{t.navSession}</a>
        <a href="#group">{t.navGroup}</a>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setLocale(locale === "tr" ? "en" : "tr")}
          className="flex h-11 items-center gap-2 rounded-2xl border border-border bg-surface-soft px-3 text-sm text-foreground transition hover:border-accent/35 hover:bg-accent/8"
        >
          <Languages size={16} />
          <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-11 items-center gap-2 rounded-2xl border border-border bg-surface-soft px-3 text-sm text-foreground transition hover:border-accent/35 hover:bg-accent/8"
        >
          {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
          <span className="hidden sm:inline">
            {theme === "dark" ? t.themeLight : t.themeDark}
          </span>
        </button>
      </div>
    </motion.header>
  );
}

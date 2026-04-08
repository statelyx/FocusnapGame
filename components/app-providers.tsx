"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";

type Theme = "dark" | "light";

type AppContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  t: typeof translations.en;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr");
  const [theme, setTheme] = useState<Theme>("dark");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("focusnap-locale") as Locale | null;
    const storedTheme = window.localStorage.getItem("focusnap-theme") as Theme | null;

    if (storedLocale === "tr" || storedLocale === "en") {
      setLocale(storedLocale);
    }

    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }

    const storedNickname = window.localStorage.getItem("focusnap-nickname");
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("focusnap-locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("focusnap-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!nickname) {
      return;
    }

    window.localStorage.setItem("focusnap-nickname", nickname);
  }, [nickname]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      nickname,
      setNickname,
      t: translations[locale],
    }),
    [locale, nickname, theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProviders");
  }

  return context;
}

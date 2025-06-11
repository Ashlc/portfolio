// originally written by @imoaazahmed

import { useCallback, useEffect, useMemo, useState } from "react";

const ThemeProps = {
  key: "theme",
  light: "light",
  dark: "dark",
} as const;

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return ThemeProps.light;
    }
    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null;

    if (storedTheme) {
      return storedTheme;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? ThemeProps.dark : ThemeProps.light;
  });

  const isDark = useMemo(() => {
    return theme === ThemeProps.dark;
  }, [theme]);

  const isLight = useMemo(() => {
    return theme === ThemeProps.light;
  }, [theme]);

  const setLightTheme = useCallback(() => {
    setTheme(ThemeProps.light);
  }, []);

  const setDarkTheme = useCallback(() => {
    setTheme(ThemeProps.dark);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === ThemeProps.dark ? ThemeProps.light : ThemeProps.dark,
    );
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(ThemeProps.light, ThemeProps.dark);
    root.classList.add(theme);
    localStorage.setItem(ThemeProps.key, theme);
  }, [theme]);

  return { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme };
};

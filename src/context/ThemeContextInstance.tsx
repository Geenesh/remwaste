import { createContext } from "react";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export type Theme = "light" | "dark";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

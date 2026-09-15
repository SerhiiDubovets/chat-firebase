// export const themes = {
//   light: "light",
//   dark: "dark",
//   telegram: "telegram",
// } as const;

// export type ThemeName = keyof typeof themes;

// export type ThemeMode = ThemeName | "system";

export type SystemTheme = "light" | "dark";

export type ThemeName = "light" | "dark" | "telegram";

export type ThemeMode = ThemeName | "system";

export const baseTheme = {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "JetBrains Mono, monospace",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.5rem", // 24px
    xxl: "2rem", // 32px
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  sizes: {
    sidePanel: "20rem",
    container: "1200px",
  },

  space: {
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    9: "2.25rem", //36px
  },

  radii: {
    sm: "0.375rem", //6px
    md: "0.625rem", //10px
    lg: "1rem",

    surface: "1.563rem", //25px,
    bubbleIn: "1.125rem 1.125rem 1.125rem 0.25rem",
    bubbleOut: "1.125rem 1.125rem 0.25rem 1.125rem",

    full: "999px",
  },

  iconSizes: {
    sm: "1rem", // 16px
    md: "1.25rem", // 20px
    lg: "1.5rem", // 24px
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },

  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.2)",
    md: "0 4px 10px rgba(0,0,0,0.3)",
    lg: "0 10px 20px rgba(0,0,0,0.5)",

    sideRight: "-4px 0 12px rgb(0 0 0 / 16%)",
  },

  zIndex: {
    base: 1,
    sidebarRight: 10,
    dropdown: 10,
    modal: 100,
    tooltip: 1000,
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease",
  },
};

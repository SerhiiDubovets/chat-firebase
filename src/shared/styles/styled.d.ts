import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      mono: string;
    };

    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };

    sizes: {
      sidePanel: string;
      container: string;
    };

    space: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      9: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;

      surface: string;
      bubbleIn: string;
      bubbleOut: string;

      full: string;
    };

    iconSizes: {
      sm: string;
      md: string;
      lg: string;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;

      sideRight: string;
    };

    zIndex: {
      base: number;
      sidebarRight: number;
      dropdown: number;
      modal: number;
      tooltip: number;
    };

    transition: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}

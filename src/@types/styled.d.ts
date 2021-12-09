import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      BACKGROUND: string;
      PRIMARY: string;

      TITLE: string;
      SPAN: string;
      NEUTRAL: string;
      TEXT_WHITE: string;
      TEXT_BLACK: string;

      GRADIENT_COLOR_1: string;
      GRADIENT_COLOR_2: string;
      GRADIENT_COLOR_3: string;

      RED: string;
      GREEN: string;
    };
    fonts: {
      LOGO: string;
      REGULAR: string;
      BOLD: string;
    };
  }
}

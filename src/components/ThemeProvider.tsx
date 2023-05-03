import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { QUERIES } from "../constants";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme: DefaultTheme = {
  queries: {
    laptopAndDown: QUERIES.laptopAndDown,
    tabletAndDown: QUERIES.tabletAndDown,
    phoneAndDown: QUERIES.phoneAndDown,
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;

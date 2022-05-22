import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import "../styles/app.scss";
import { ThemeCTXProvider } from "../theme/ThemeProvider";
import { GlobalStyles, lightTheme } from "../ThemeConfig";

// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <ThemeCTXProvider>
      {/* theme value seem to be changing propaply for some reason it's not updated on theme provider */}
      <ThemeProvider theme={theme == "light" ? lightTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeCTXProvider>
  );
}

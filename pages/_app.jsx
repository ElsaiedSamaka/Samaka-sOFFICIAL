import { useRouter } from "next/router";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { useTheme } from "../hooks/useTheme";
import "../styles/app.scss";
import { ThemeCTXProvider } from "../theme/ThemeProvider";
import { GlobalStyles, lightTheme } from "../ThemeConfig";
import getDirection from "../utils/translations/getDirections";
// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();
  const { locale } = useRouter();

  return (
    <ThemeCTXProvider>
      {/* theme value seem to be changing propaply for some reason it's not updated on theme provider */}
      <StyleSheetManager
        stylisPlugins={getDirection(locale) === "rtl" ? [stylisRTLPlugin] : []}
      >
        <ThemeProvider theme={theme == "light" ? lightTheme : lightTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyleSheetManager>
    </ThemeCTXProvider>
  );
}

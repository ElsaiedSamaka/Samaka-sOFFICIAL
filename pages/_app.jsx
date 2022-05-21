import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "../styles/app.scss";
import { darkTheme, GlobalStyles, lightTheme } from "../ThemeConfig";
// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
      {/* <input id='toggle' class='toggle' type='checkbox' onClick={toggleTheme} /> */}
    </ThemeProvider>
  );
}

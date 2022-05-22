import aboutTranslations from "./pages/about";
import contactTranslations from "./pages/contact";
import homeTranslations from "./pages/home";

const allTranslations = {
  en: Object.assign(
    {},
    homeTranslations.en,
    aboutTranslations.en,
    contactTranslations.en
  ),
  ar: Object.assign(
    {},
    homeTranslations.ar,
    aboutTranslations.ar,
    contactTranslations.ar
  ),
};

/*
  Other translations are to be added as arguments to .assign()
  i.e. Object.assign({}, homeTranslations.en, loginTranslations.en)
*/

export default allTranslations;

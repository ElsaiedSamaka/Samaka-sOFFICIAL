import Link from "next/link";
import { withRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import useTranslation from "../hooks/useTranslation";
import LangRadioBtn from "./LangRadioBtn";

function Navbar({ router }) {
  const { theme, toggleTheme } = useTheme();
  const { locale } = router;
  const { t } = useTranslation(locale);

  const navs = [
    {
      en: "Home",
      ar: "الرئيسية",
      href: "/",
    },
    {
      en: "About",
      ar: "عني",
      href: "/about",
    },
    {
      en: "Portfolio",
      ar: "بورتفوليو",
      href: "/portfolio",
    },
    {
      en: "Contact",
      ar: "تواصل",
      href: "/contact",
    },
    // { text: '', href: '' },
  ];

  return (
    <nav className='navbar'>
      <div className='container'>
        <Link href='/'>
          <a className='logo'>{t("home.nav")}</a>
        </Link>

        <ul className='nav-links'>
          {navs.map((nav, i) => (
            <li key={i}>
              <Link href={nav.href}>
                <a
                  className={`nav-item ${
                    router.pathname == nav.href ? "active" : ""
                  }`}
                >
                  {nav[locale]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <input
          id='toggle'
          className='toggle'
          type='checkbox'
          onClick={toggleTheme}
        />
        {/* <LangSwitchBtn /> */}
        <LangRadioBtn />
      </div>
    </nav>
  );
}

export default withRouter(Navbar);

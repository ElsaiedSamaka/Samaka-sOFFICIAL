import Link from "next/link";
import { withRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import LangSwitchBtn from "./LangSwitchBtn";

function Navbar({ router }) {
  const { theme, toggleTheme } = useTheme();
  const { locale } = router;

  const navs = [
    {
      en: "Home",
      ar: "الرئيسية",
      href: "/",
    },
    {
      en: "About",
      ar: "عن",
      href: "/about",
    },
    {
      en: "Portfolio",
      ar: "بروتوفوليو",
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
          <a className='logo'>Samaka. {theme}</a>
        </Link>
        <LangSwitchBtn />

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
      </div>
    </nav>
  );
}

export default withRouter(Navbar);

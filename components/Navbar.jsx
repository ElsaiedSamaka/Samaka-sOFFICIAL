import Link from "next/link";
import { withRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import LangSwitchBtn from "./LangSwitchBtn";

function Navbar({ router }) {
  const { theme, toggleTheme } = useTheme();

  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
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
          {navs.map((nav) => (
            <li key={nav.text}>
              <Link href={nav.href}>
                <a
                  className={`nav-item ${
                    router.pathname == nav.href ? "active" : ""
                  }`}
                >
                  {nav.text}
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

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <div className='container'>
        <input type='checkbox' id='drop-down-cbox' />
        <label htmlFor='drop-down-cbox'>
          <span></span>
          <span></span>
          <span></span>
        </label>

        <h1 className='site-logo'>Homepage</h1>

        <ul className='main-nav small-caps'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <span>List of Work</span>
            <ul>
              <li>
                <a href='#'>Codepen</a>
              </li>
              <li>
                <a href=''>Behance</a>
              </li>
              <li>
                <a href='#'>Github</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

import logo from '../assets/images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/appContext';
import { MouseEvent } from 'react';

export const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e: MouseEvent<HTMLButtonElement>) => {
    const targetElement = e.target as HTMLElement;
    const page = targetElement.textContent;
    const tempBtn = targetElement.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e: MouseEvent<HTMLButtonElement>) => {
    const targetElement = e.target as HTMLElement;

    if (!targetElement.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="signin-btn btn">Sing in</button>
      </div>
    </nav>
  );
};

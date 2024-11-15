import Button from "../components/Buttons/Button";

import { NAV_LISTS } from "../constants";
import HeaderLogo from "../components/Logo/HeaderLogo";

const Header = () => {
  return (
    <header className="header-blur h-16 fixed top-0 left-0 right-0">
      <div className="screen-max-width flex h-full justify-between items-center">
        <HeaderLogo />

        <div className="flex max-lg:hidden">
          <ul className="flex gap-12 items-center">
            {NAV_LISTS.map((list, i) => (
              <li key={i}>
                <a href={list.anchor} className="text-base leading-5">
                  {list.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#form">
                <Button>Book now</Button>
              </a>
            </li>
          </ul>
        </div>
        <div className="max-lg:block hidden">
          <button>BurgerMenu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

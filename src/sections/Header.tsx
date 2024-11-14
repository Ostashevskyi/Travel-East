import Button from "../components/Buttons/Button";

import { logo } from "../utils";
import { NAV_LISTS } from "../constants";

const Header = () => {
  return (
    <header className="header-blur h-16 fixed top-0 left-0 right-0">
      <div className="screen-max-width flex h-full justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="waves-logo" width={90} height={88} />
          <a className="uppercase max-md:hidden" href="#">
            Travel East
          </a>
        </div>

        <div className="flex max-lg:hidden">
          <ul className="flex gap-12 items-center">
            {NAV_LISTS.map((list, i) => (
              <li key={i}>
                <a href="#" className="text-base leading-5">
                  {list}
                </a>
              </li>
            ))}
            <li>
              <Button>Book now</Button>
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

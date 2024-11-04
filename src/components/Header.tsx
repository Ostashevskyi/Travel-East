import { NAV_LISTS } from "../constants";
import { logo } from "../utils";
import Button from "./Buttons/Button";

const Header = () => {
  return (
    <header className="screen-max-width flex justify-between items-center">
      <section className="flex items-center">
        <img src={logo} alt="waves-logo" width={90} height={88} />
        <h2 className="uppercase max-md:hidden">Travel East</h2>
      </section>

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
            <Button>
              <p className="font-semibold text-black">Book now</p>
            </Button>
          </li>
        </ul>
      </div>
      <div className="max-lg:block hidden">
        <button>BurgerMenu</button>
      </div>
    </header>
  );
};

export default Header;

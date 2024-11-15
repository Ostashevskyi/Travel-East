import { logo } from "../../utils";

type THeaderLogo = {
  cn?: string;
};

const HeaderLogo = ({ cn }: THeaderLogo) => {
  return (
    <div className={`${cn} flex items-center`}>
      <img src={logo} alt="waves-logo" width={90} height={88} />
      <a className="uppercase max-md:hidden" href="#hero">
        Travel East
      </a>
    </div>
  );
};

export default HeaderLogo;

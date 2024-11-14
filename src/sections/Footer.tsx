import {
  callIcn,
  facebookIcn,
  geoIcn,
  instagramIcn,
  logo,
  telegramIcn,
  twitterIcn,
} from "../utils";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="screen-max-width flex h-full justify-between items-start max-md:grid max-md:grid-cols-2 max-md:place-content-center max-md:gap-x-2 max-md:justify-items-center">
        <div className="flex items-center max-md:col-span-2">
          <img src={logo} alt="waves-logo" width={90} height={88} />
          <a className="uppercase" href="#">
            Travel East
          </a>
        </div>
        <div className="flex flex-col gap-7 pt-8">
          <div className="font-semibold">
            <div className="flex gap-1 items-center">
              <img src={geoIcn} alt="geo" />
              <p className="text-sm">Office Address</p>
            </div>
            <p className="text-form-input text-xs">
              France | Paris | St. Ampere 56
            </p>
          </div>
          <div className="font-semibold">
            <p className="texxt-sm">2016-2024 © Content Tour</p>
            <a
              className="text-form-input text-xs"
              href="mailto:info@content.tour"
            >
              info@content.tour
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-7 pt-8 ">
          <div className="font-semibold">
            <div className="flex gap-1">
              <img src={callIcn} alt="phone" />
              <a href="tel:+33100000000" className="text-sm">
                +33 1 00 00 00 00
              </a>
            </div>
            <p className="text-form-input">Free Calls</p>
          </div>
          <div className="flex gap-2 items-center">
            <a href="https://instagram.com" target="_blank">
              <img src={instagramIcn} alt="instagram" />
            </a>{" "}
            <a href="https://facebook.com" target="_blank">
              <img src={facebookIcn} alt="facebook" />
            </a>{" "}
            <a href="https://web.telegram.org" target="_blank">
              <img src={telegramIcn} alt="telegram" />
            </a>{" "}
            <a href="https://x.com" target="_blank">
              <img src={twitterIcn} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

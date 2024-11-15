import SectionWrapper from "../components/Wrappers/SectionWrapper";

import { aboutUsImg } from "../utils";
import { ABOUT_US_BLOCKS } from "../constants";

const AboutUs = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex w-full gap-2 justify-between  max-lg:gap-6 max-lg:items-center max-lg:flex-col">
        <section className="flex-1 max-w-[505px] justify-between">
          <h2 className="text-3xl mb-[18px]">About Us</h2>
          <section className="font-semibold max-w-[478px] py-[14.5px] mb-1">
            <h3 className="text-xl mb-6">
              Open new horizons with TRAVEL EAST!
            </h3>
            <p className="text-base font-light px-2.5">
              We create unique trips, taking into account your interests and
              wishes. Our tourism experts will help you find the perfect
              itinerary for an unforgettable vacation.
            </p>
          </section>
          <section className="py-[14.5px]">
            <h3 className="text-xl font-semibold mb-6">Why choose us?</h3>
            <ul className="text-base font-light list-disc px-10">
              <li>
                Expert knowledge: We know all about the best places to travel.
              </li>
              <li>
                Personalized service: Every trip is created especially for you.
              </li>
              <li>
                Quality and value: We offer the best tours at great prices.
              </li>
              <li>
                Customer satisfaction: Your comfort and satisfaction is our top
                priority.
              </li>
            </ul>
          </section>
          <section className="py-[14.5px]">
            <h3 className="text-xl font-semibold mb-6">Join Us</h3>
            <p className="text-base font-light mb-6">
              Planning a trip? Contact us and we will help make your dream come
              true!
            </p>
            <div className="flex max-[424px]:flex-wrap gap-y-4 max-[424px]:justify-center ">
              {ABOUT_US_BLOCKS.map((block) => (
                <div
                  key={block.id}
                  className="border-x md:flex-1 flex flex-col px-5 items-center gap-1.5"
                >
                  <p className="font-semibold text-xl">{block.number}</p>
                  <p className="text-center font-semibold text-white/80 max-w-[100px]">
                    {block.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
        <div className="flex-1 h-full max-w-fit">
          <img src={aboutUsImg} alt="sunset people" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;

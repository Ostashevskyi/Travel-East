import { useState } from "react";

import { Swiper as SwiperInstance } from "swiper/types";

import SliderButton from "../components/Buttons/SliderButton";
import FeedbackSlider from "../components/Sliders/FeedbackSlider";
import SectionWrapper from "../components/Wrappers/SectionWrapper";

const Feedbacks = () => {
  const [swiper, setSwiper] = useState<SwiperInstance>();
  return (
    <section>
      <SectionWrapper>
        <div className="flex items-center justify-between gap-6 mb-8">
          <section>
            <h2 className="font-semibold text-2xl md:text-3xl mb-7">
              Clients Feedback
            </h2>
          </section>
          <div className="flex gap-4">
            <SliderButton prev onClick={() => swiper && swiper.slidePrev()} />

            <SliderButton onClick={() => swiper && swiper.slideNext()} />
          </div>
        </div>
      </SectionWrapper>
      <FeedbackSlider setSwiper={setSwiper} />
      <p className="mt-11 uppercase font-medium text-2xl max-w-[700px] m-auto text-center">
        Discover a world of adventure in Japan, China and Korea with our
        exclusive tours. Join us and experience the true beauty of Asia!
      </p>
    </section>
  );
};

export default Feedbacks;

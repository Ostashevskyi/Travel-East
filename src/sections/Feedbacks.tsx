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
    </section>
  );
};

export default Feedbacks;

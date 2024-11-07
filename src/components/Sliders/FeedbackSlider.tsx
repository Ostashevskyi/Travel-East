import { Swiper, SwiperSlide } from "swiper/react";
import { FEEDBACKS } from "../../constants";
import FeedbackCard from "../Cards/FeedbackCard";

import "swiper/swiper-bundle.css";

import { Swiper as SwiperInstance } from "swiper/types";

const FeedbackSlider = ({
  setSwiper,
}: {
  setSwiper: (swiper: SwiperInstance) => void;
}) => {
  return (
    <div className="mt-11 max-md:px-4">
      <Swiper
        spaceBetween={100}
        slidesPerView={1.5}
        centeredSlides
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1580: {
            slidesPerView: 2,
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {FEEDBACKS.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <FeedbackCard feedback={feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;

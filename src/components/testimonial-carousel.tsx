import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './testimonial-card';

export default function TestimonialCarousel() {
  return (
    <div className="w-max max-w-3xl">
      <Swiper
        spaceBetween={24}
        slidesPerView={2}
        style={{ width: '100%' }}
        grabCursor
      >
        <SwiperSlide>
          <TestimonialCard
            name="Jack F"
            title="Ex Blackrock PM"
            text="Love how Loch integrates portfolio analytics and whale watching into one unified app."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Yash P"
            title="Research, 3poch Crypto Hedge Fund"
            text="I use Loch everyday now. I don't think I could analyze crypto whale trends and markets without it. I'm addicted!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Shiv S"
            title="Co-Founder Magik Labs"
            text="Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import NotificationCard from './notification-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CarouselCard } from './carousel-card';

function CarouselCardHeader({
  iconSrc,
  iconAlt,
}: {
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <img src={iconSrc} alt={iconAlt} />
      <img src={'/checkmark.svg'} alt="checkmark icon" />
    </div>
  );
}

function MoneySelectCardBody() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 font-medium text-[11.2px] text-[#19191A]">
      <p>Notify me when any wallets move more than</p>
      <img src="/money-select.svg" alt="money select icon" />
    </div>
  );
}

function DaySelectCardBody() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 font-medium text-[11.2px] text-[#19191A]">
      <p>Notify me when any wallet dormant for</p>
      <img src="/day-select.svg" alt="day select icon" />
      <p>becoms active</p>
    </div>
  );
}

export default function TopCarousel() {
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full z-[20] p-5"
        style={{
          background: `radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)`,
        }}
      />
      <div className="flex gap-4 w-[300px]">
        <Swiper
          spaceBetween={8}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
          effect="cards"
          className="rounded-l-lg z-0"
        >
          <SwiperSlide className="!w-[189.69px]">
            <NotificationCard />
          </SwiperSlide>
          <SwiperSlide className="!w-[189.69px]">
            <CarouselCard
              header={
                <CarouselCardHeader
                  iconSrc="/bar-chart-2.svg"
                  iconAlt="bar chart icon"
                />
              }
              body={<MoneySelectCardBody />}
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[189.69px]">
            <CarouselCard
              header={
                <CarouselCardHeader iconSrc="/clock.svg" iconAlt="clock icon" />
              }
              body={<DaySelectCardBody />}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

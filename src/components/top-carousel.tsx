import NotificationCard from './notification-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CarouselCard } from './carousel-card';

export function CarouselCardHeader({
  iconSrc,
  iconAlt,
}: {
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <div className="flex items-start justify-between">
      <img src={iconSrc} alt={iconAlt} />
      <img src={'/checkmark.svg'} alt="checkmark icon" />
    </div>
  );
}

export function MoneySelectCardBody() {
  return (
    <div className="flex flex-col items-start justify-between mb-[10px] font-medium text-[11.2px] text-[#19191A] leading-[1.2] gap-1">
      <p>Notify me when any wallets move more than</p>
      <img src="/money-select.svg" alt="money select icon" />
    </div>
  );
}

export function DaySelectCardBody() {
  return (
    <div className="flex flex-col items-start justify-between mb-[10px] font-medium text-[11.2px] text-[#19191A] leading-[1.2] gap-1">
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
          spaceBetween={14}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
          effect="cards"
          className="rounded-l-lg z-0"
        >
          <SwiperSlide className="!w-[189.69px] !h-[171.5px]">
            <NotificationCard />
          </SwiperSlide>
          <SwiperSlide className="!w-[189.69px] !h-[171.5px]">
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
          <SwiperSlide className="!w-[189.69px] !h-[171.5px]">
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

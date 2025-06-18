import GetNotifiedBanner from './get-notified-banner';
import TopCarousel from './top-carousel';
import WhaleInsightsSection from './whale-insights-section';
import TestimonialCarousel from './testimonial-carousel';

export default function Hero() {
  return (
    <div className="relative w-full h-full" style={{ isolation: 'isolate' }}>
      {/* Radial gradient background */}
      <div
        className="pointer-events-none absolute z-[1]"
        style={{
          width: '1334px',
          height: '1257.84px',
          top: '-114px',
          right: '0',
          background:
            'radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
      {/* Main Hero Content: stack in column on mobile */}
      <div className="relative flex flex-col gap-6 items-center justify-center w-full px-4 py-8 md:pl-16 md:py-16 md:px-0 z-[20]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-4 md:gap-0">
          <GetNotifiedBanner />
          <TopCarousel />
        
        </div>
      </div>
      <div className="relative w-full px-4 md:px-16 z-[20]">
        <WhaleInsightsSection />
      </div>
      <div className="relative flex flex-col w-full pb-4 box-border px-4 md:px-16 mt-6 md:mt-0 z-[20]">
        <h2 className="text-left md:text-right mb-4 md:mb-[16px] text-[22px] md:text-[25px] font-medium text-[#F2F2F2]">
          Testimonials
        </h2>
        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#E5E5E680] mt-1 mb-6 md:mb-[50px]" />
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between w-full gap-4 md:gap-0">
          {/* Testimonial Carousel at bottom right */}
          <div className="flex justify-center md:justify-end w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
      {/* Loch SVG: top right on mobile, bottom left on md+ */}
      <img
        src="/loch.svg"
        alt="Loch logo"
        className="w-[60px] h-[60px] fixed right-0 top-0 mr-4 mt-4 z-50 block md:hidden"
      />
      <img
        src="/loch.svg"
        alt="Loch logo"
        className="w-[60px] h-[60px] fixed left-0 md:bottom-0 md:top-auto ml-4 mt-4 md:mb-4 md:ml-4 z-50 hidden md:block"
      />
    </div>
  );
}

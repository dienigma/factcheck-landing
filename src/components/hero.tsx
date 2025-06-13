import GetNotifiedBanner from './get-notified-banner';
import TopCarousel from './top-carousel';
import WhaleInsightsSection from './whale-insights-section';
import TestimonialCarousel from './testimonial-carousel';

export default function Hero() {
  return (
    <div className="relative w-full h-full">
      {/* Main Hero Content */}
      <div className="flex flex-col items-center justify-center w-full pl-16 py-16">
        <div className="flex items-center justify-between w-full">
          <GetNotifiedBanner />
          <TopCarousel />
        </div>
      </div>
      <WhaleInsightsSection />
      <div className="flex flex-col  w-full pb-4 box-border px-16">
        <h2 className="text-right mb-[16px] text-[25px] font-medium text-[#F2F2F2]">Testimonials</h2>
        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#E5E5E680] mt-1 mb-[50px]" />
        <div className="mt-0 flex flex-row items-end justify-between w-full">
          {/* Testimonial Carousel at bottom right */}
          <div className="flex justify-end w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
      {/* Fixed Loch SVG at bottom left of the page */}
      <img
        src="/loch.svg"
        alt="Loch logo"
        className="w-[60px] h-[60px] fixed left-0 bottom-0 ml-4 mb-4 z-50"
      />
    </div>
  );
}

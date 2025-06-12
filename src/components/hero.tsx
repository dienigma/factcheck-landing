import GetNotifiedBanner from "./get-notified-banner";
import TopCarousel from "./top-carousel";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <GetNotifiedBanner />
        <div>
          <TopCarousel />
        </div>
      </div>
    
    </div>
  );
}

// Use card component to create a testimonial card
import { Card } from './ui/card';

export default function TestimonialCard({
  name,
  title,
  text,
  active = false, // Optional: for blue border if active
}: {
  name: string;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <Card
      className={`bg-white rounded-xl py-2 pl-2 pr-[24px] md:p-4 text-left shadow-sm border max-w-[95vw] md:min-w-[320px] md:max-w-[450px] h-auto md:h-[136px] leading-[1.2] ${
        active ? 'border-[#2684FF] border-2' : 'border-[#E5E5E5]'
      }`}
    >
      <div className="mb-[20px]">
        <span className="font-semibold text-black text-[16px] mr-2">{name}</span>
        <span className="ml-1 text-gray-400 text-[13px]">{title}</span>
      </div>
      <p className="text-[#1D2129] text-base leading-[1.2] text-[16px]">{text}</p>
    </Card>
  );
}
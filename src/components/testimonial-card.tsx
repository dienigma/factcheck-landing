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
      className={`bg-white rounded-xl p-4 text-left shadow-sm border min-w-[320px] max-w-[450px] h-[136px] ${
        active ? 'border-[#2684FF] border-2' : 'border-[#E5E5E5]'
      }`}
    >
      <div className="mb-2">
        <span className="font-bold text-black">{name}</span>
        <span className="ml-1 text-gray-400 text-sm">{title}</span>
      </div>
      <p className="text-black text-base leading-snug">{text}</p>
    </Card>
  );
}
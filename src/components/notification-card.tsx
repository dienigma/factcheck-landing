import { Card } from './ui/card';

export default function NotificationCard() {
  return (
    <Card className="w-full h-full py-4 pr-[15px] pl-[16px]">
      <div className="flex items-start justify-between leading-[1.2] mb-[17px]">
        <img src="/notif-bell.svg" alt="notification bell icon" />
        <p className="text-[#19191A] text-[9.1px] font-semibold">Save</p>
      </div>
      <div className="flex flex-col items-start justify-center leading-[1.2]">
        <p className="text-[14px] text-[#19191A] mb-[11px]">
          We'll be sending notifications to you here
        </p>
        <input
          type="email"
          className="w-full p-2 rounded-[8.4px] border-[0.7px] border-[#D4D4D4] cursor-default text-[9.1px] text-[#19191A] leading-[1.2] font-medium"
          readOnly
          disabled
          value="hello@gmail.com"
        />
      </div>
    </Card>
  );
}

import { Card } from './ui/card';

export default function NotificationCard() {
  return (
    <Card
      className="w-full h-full"
    >
      <div className="flex items-center justify-between">
        <img src="/src/assets/notif-bell.svg" alt="notification bell icon" />
        <p className="text-[#19191A]">Save</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[14px] text-[#19191A]">
          We'll be sending notifications to you here
        </p>
        <input
          type="text"
          className="w-full p-2 rounded-[8.4px] border border-[#19191A]"
        />
      </div>
    </Card>
  );
}

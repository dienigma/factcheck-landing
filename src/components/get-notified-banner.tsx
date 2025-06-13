export default function GetNotifiedBanner() {
  return (
    <div className="flex flex-col w-[322px] items-start justify-center gap-4">
      <img src="/bell.svg" alt="bell-icon" />
      <h2 className="text-[31px] font-medium text-[#F2F2F2]">
        Get notified when a highly correlated whale makes a move
      </h2>
      <p className="text-[16px] font-medium text-[#F2F2F2]">
        Find out when a certain whale moves more than any preset amount on-chain
        or when a dormant whale you care about becomes active.
      </p>
    </div>
  );
}

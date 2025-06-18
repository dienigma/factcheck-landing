import { Text, Title } from './ui/typography';

export default function WhaleInsightsSection() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:mr-16 md:ml-0 w-full gap-6 md:gap-0 leading-[1.2]">
      <img 
        src="/cohorts.png" 
        alt="cohort" 
        className="w-[335px] rounded-[12px] border-[1.5px] border-[rgba(255,255,255,0.68)]" 
        style={{
          boxShadow: '0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)',
        }} 
      />

      <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-8">
        <div className="flex items-end justify-end mb-4">
          <img src="/eye-updated.svg" alt="eye" />
        </div>
        <Title className="mb-4 text-right">
          Watch what the
          <br /> whales are doing
        </Title>
        <Text className="text-right">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </Text>
      </div>
    </div>
  );
}

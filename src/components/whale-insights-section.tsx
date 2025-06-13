import { Text, Title } from './ui/typography';

export default function WhaleInsightsSection() {
  return (
    <div className="flex items-start justify-between mr-16 ml-0">
      <img src="/src/assets/cohorts-1.svg" alt="cohort" />
      <div className="w-1/2 pl-10 mt-8">
        <div className="flex items-end justify-end mb-4">
          <img src="/src/assets/eye.svg" alt="eye" />
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

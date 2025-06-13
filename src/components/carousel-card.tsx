import { Card } from './ui/card';

export function CarouselCard({
  header,
  body,
  ...props
}: {
  header: React.ReactNode;
  body: React.ReactNode;
} & React.ComponentProps<typeof Card>) {
  return (
    <Card className="w-full h-full justify-between" {...props}>
      {header}
      {body}
    </Card>
  );
}

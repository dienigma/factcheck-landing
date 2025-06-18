export default function Layout({
  leftSection,
  rightSection,
}: {
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col md:flex-row items-center h-auto md:h-screen bg-[#18191B]"
    >
      <div className="w-full md:w-[55.6%] h-auto md:h-full overflow-y-auto overflow-x-hidden scrollbar-hide order-1 md:order-1 px-4 py-6 md:px-0 md:py-0">
        {leftSection}
      </div>
      <div
        className="w-full md:w-[44.4%] h-auto md:h-full bg-white order-2 md:order-2 px-4 py-6 md:px-0 md:py-0"
        style={{
          boxShadow:
            '0px 14px 64px -4px #18274B1F, 0px 8px 22px -6px #18274B1F',
        }}
      >
        {rightSection}
      </div>
    </div>
  );
}

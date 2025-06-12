export default function Layout({leftSection, rightSection}: {leftSection: React.ReactNode, rightSection: React.ReactNode}) {
    return (
      <div className="flex items-center h-screen">
        <div
          className="w-[55.6%] h-full"
          style={{
            backgroundColor: '#18191B',
            backgroundImage: 'url("/src/assets/bg.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {leftSection}
        </div>
        <div
          className="w-[44.4%] h-full"
          style={{
            boxShadow: '0px 14px 64px -4px #18274B1F, 0px 8px 22px -6px #18274B1F',
          }}
        >
          {rightSection}
        </div>
      </div>
    );
  }
  
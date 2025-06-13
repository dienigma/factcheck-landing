export default function SignupForm() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = 'https://app.loch.one/welcome';
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-start justify-center w-full max-w-[365px]">
        <h1 className="text-[28px] md:text-[39px] font-medium text-[#B0B1B3] mb-2">
          <p>Sign up for</p> <p>exclusive access.</p>
        </h1>
        <form className="flex flex-col items-center justify-center w-full gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full placeholder:text-[#CACBCC] px-3 md:px-4 py-2 md:py-3 rounded-md border border-[#E5E5E6] shadow-[0px_1px_1px_0px_#0000000A] hover:shadow-[0px_4px_10px_0px_#0000000A] h-[44px] md:h-[59px] text-sm md:text-base"
          />
          <button
            type="submit"
            className="text-white text-sm md:text-base bg-[#19191A] rounded-md w-full h-[44px] md:h-[59px] cursor-pointer mt-2"
          >
            Get started
          </button>
        </form>
        <p className="text-[#19191A] text-[13px] md:text-[16px] font-semibold mt-8">
          You'll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
}

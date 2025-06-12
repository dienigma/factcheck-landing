export default function SignupForm() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-[39px] font-medium text-[#B0B1B3]">
          <p>Sign up</p> <p>for exclusive access.</p>
        </h1>
        <form className="flex flex-col items-center justify-center w-full gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full placeholder:text-[#CACBCC] px-4 py-3 rounded-md border border-[#E5E5E6] shadow-[0px_1px_1px_0px_#0000000A] hover:shadow-[0px_4px_10px_0px_#0000000A] h-[59px]"
          />
          <button
            type="submit"
            className="text-white text-base bg-[#19191A] rounded-md px-4 py-3 w-full h-[59px] cursor-pointer"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

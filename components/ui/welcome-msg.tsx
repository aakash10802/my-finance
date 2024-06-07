import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4 ">
      <h2
        className="text-white text-2xl mt-6 lg:text-4xl font-medium"
      
      >
         &nbsp;Welcome Back {isLoaded ? ",":" "} {user?.firstName}👋
      </h2>
      <p className="text-sm lg:text-base text-[#dde0e6]">
      &nbsp;&nbsp;&nbsp;This is your financial overview report
      </p>
    </div>
  );
};

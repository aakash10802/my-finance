import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-gray-800">
            Join Us Today!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Sign up to create an account and start your journey!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full box-shadow-md bg-[#7dfca393] hidden lg:flex items-center justify-center">
        <Image src="/logo6.svg" height={100} width={700} alt="logo" className="object-contain" />
      </div>
    </div>
  );
}

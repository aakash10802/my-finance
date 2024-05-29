import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>
        THis is an authenticated route
        <UserButton 
          afterSignOutUrl="/"
          /> 
      </p>
    </div>
  );
}

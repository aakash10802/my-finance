"use client"

import {ClerkLoaded,ClerkLoading,UserButton  } from "@clerk/nextjs";
import { HeaderLogo } from "./headerlogo"
import { Navigation } from "./navigation"
import { Loader2 } from "lucide-react";
import { WelcomeMsg } from "./ui/welcome-msg";

export const  Header =()=>{
    return(
         <header className="bg bg-gradient-to-b from-blue-600 to-blue-400 px-4 py-8 lg:px 14 pb-36 ">
           <div className="max-w-screen-2xl mx-auto">

            <div className="w-full flex items-center justify-between md-14">
                <div className="flex items-center lg:gap-x-16 ">

                    <HeaderLogo/>
                    <Navigation/>
                </div>
                <ClerkLoaded >
                        <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2  className="size-8 animate-spin text-white/20"/>
                </ClerkLoading>
            </div>
            <WelcomeMsg />
           </div>

         </header>
    )        
}
import type { Metadata } from "next";
import {QueryProvider} from "@/providers/querry-provider";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import { ClerkProvider  } from "@clerk/nextjs";
import "./globals.css";
import { SheetProvider } from "@/providers/sheet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-Finance",
  description: "saas app developed by aakash10802",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <SheetProvider />
          <Toaster/>
        {children}
        </QueryProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}

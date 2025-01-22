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
    <head>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/vision-v2-af602.appspot.com/o/favicon.ico?alt=media&token=06e69069-62bd-45a9-9038-249a34338d60"
          sizes="any"
        />
      </head>
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

import type { Metadata } from "next";
import localFont from 'next/font/'
import "./globals.css";

const workSans = localFont({
  src:[
    {path:'./fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal' 
    },
  ]
})

export const metadata: Metadata = {
  title: "Pitch Startup",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "My full statck Project Using Next JS",
  description: "this is my  first project of Ultimate Backend Course ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body>
      {children}
       </body>
    </html>
  );
}

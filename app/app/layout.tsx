import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StellarBlockchain.com",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://unpkg.com/aos@3.0.0-beta.6/dist/aos.css" />
        <script src="https://kit.fontawesome.com/585f6cc58c.js" crossOrigin="anonymous" async></script>
        <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossOrigin="anonymous" async></script>
        <script src="https://unpkg.com/aos@3.0.0-beta.6/dist/aos.js" async></script>
      </head>
      <body style={{ fontFamily: 'Montserrat' }}>
        {children}
      </body>
    </html>
  );
}

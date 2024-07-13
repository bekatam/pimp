import type { Metadata } from "next";
import "./globals.css";
import YouTubePlayer from "./components/YoutubePlayer";

export const metadata: Metadata = {
  title: "PIMP",
  description: "PIMP coin",
  icons: {
    icon: ['/img/favicon.ico']
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <YouTubePlayer />
        {children}
      </body>
    </html>
  );
}

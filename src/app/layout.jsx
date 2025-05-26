import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({subsets:["latin"]})

export const metadata = {
  title: "kibunime",
  description: "Anime List Terbaik Di Indoensia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.className} bg-color-bacground px-1`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../styles/globals.css";
import ThemeProviders from "./theme-providers";
// import dynamic from "next/dynamic";

// const  ThemeProviders = dynamic(() => import('./theme-providers'), { ssr: false })

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Thesrii",
  description: "Service Research & Innovation Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}

import { Ubuntu } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Subhankar",
  description: "Full Stack Developer",
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(font.className, "bg-white dark:bg-[#09090b] scroll-smooth")}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

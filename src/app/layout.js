import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});
;

export const metadata = {
  title: "Wanderlust - Explore the World with Us",
  description: "Discover unforgettable travel experiences with Wanderlust. Explore top destinations, book your dream vacation, and create lasting memories. Your adventure starts here!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer/>
        <Toaster />
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}

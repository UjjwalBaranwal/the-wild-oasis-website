import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
// getting font from the google
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
//configure the font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
// and then we use it as below
// console.log(josefin);

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites,surrounded by beutiful mountains and dark forests",
};
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
//       >
//         {/* <header>
//           <Logo />
//         </header>
//         <Navigation /> */}
//         <main>{children}</main>
//         <footer>Copyright by the Wild Oasis</footer>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

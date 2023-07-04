import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer.jsx";
import Redes from "./components/Redes";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indiana Jeans Mayorista",
  description: "Catálogo online de pantalones jeans de todas las variedades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="z-10 w-full items-center font-mono flex flex-col text-center">
          <div className="border-b w-full text-center border-gray-300 p-2 text-white text-xs md:text-base">
            Jeans de calidad. Precios increíbles. Venta solo por Mayor.{" "}
          </div>
          <Redes/>
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}

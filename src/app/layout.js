import "./globals.css";
import { Inter } from "next/font/google";
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
          <div className="border-b w-full flex flex-col md:flex-row justify-center text-center border-gray-300 p-2 text-white text-xs md:text-base bg-slate-800">
            <p>Jeans de calidad. Precios increíbles.</p>
          </div>
          <p className="font-bold text-sky-950">- Venta solo por Mayor -</p>
        </div>

        {children}
        
      </body>
    </html>
  );
}

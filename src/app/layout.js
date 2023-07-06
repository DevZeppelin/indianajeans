import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indiana Jeans Mayorista",
  description: "Catálogo online de pantalones jeans de todas las variedades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>        
        {children}        
      </body>
    </html>
  );
}

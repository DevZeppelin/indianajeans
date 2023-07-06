import TopText from "./components/TopText";
import Logo from "./components/Logo";
import BajoLogo from "./components/BajoLogo";
import TiraBlack from "./components/TiraBlack";
import Catalogo from "./components/Catalogo";
import CuentasAmigas from "./components/CuentasAmigas";
import Footer from "./components/Footer";
import FloatIcons from "./components/FloatIcons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center"> 

      <TopText />
      <FloatIcons />
      <Logo />
      <BajoLogo />
      <TiraBlack />
      <Catalogo />
      <CuentasAmigas />
      <Footer />
    </main>
  );
}

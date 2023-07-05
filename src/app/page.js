import Image from "next/image";
import GridComponent from "./components/GridComponent";
import { Jeans } from "./products.js";
import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import Redes from "./components/Redes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="relative flex place-items-center mt-4">
        <a href="#damas">
          <AiOutlineWoman className="fixed bottom-40 z-30 right-0 md:right-5 text-right text-6xl text-violet-500 hover:scale-125 hover:text-violet-700" />
        </a>
        
        <a href="#hombre">
          <AiOutlineMan className="fixed bottom-24 z-20 right-0 md:right-5 text-left text-6xl text-sky-700 hover:scale-125 hover:text-sky-900" />
        </a>
      </div>

      <div className="relative flex place-items-center animate-logo p-4 py-10 md:py-4">
        <Image
          className="relative"
          src="/logo3.png"
          alt="Indiana Jeas Logo"
          width={600}
          height={600}
          priority
        />
      </div>

      <section
        name="BAJO LOGO"
        className="flex flex-col text-center mx-auto lg:w-96 px-6 pb-8 space-y-2 text-slate-800"
      >
        <span className="text-2xl">⭐⭐⭐</span>
        <p className="text-center p-4 mx-6">
          Pantalones de calidad, directo desde la fábrica hasta su domicilio
        </p>
        <Redes />
      </section>

      <section name="TIRA BLACK" className="w-full bg-gray-800 p-4 md:p-6 pb-16 text-center text-base">
        <div className="text-white flflex-col text-center p-4 text-xl">
          <code>Mirá nuestro catálogo 👖 </code>
          <p className="mb-2">¡no vas a creer los precios! 😎</p>
        </div>
        <div className="p-2 border-2 w-48 flex mx-auto mt-4 border-sky-700 rounded-lg hover:bg-sky-900">
          Compra mínima: 20 unidades
        </div>
      </section>

      <section className="p-4 md:p-24">
        <AiOutlineWoman id="damas" className="mx-auto text-6xl text-violet-500 hover:scale-125 hover:text-violet-800" />
        <h1  className="text-3xl text-center px-6 font-black text-black">
          DAMAS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-12 mt-12 text-center">
          {Jeans.dama.map((dama) => (
            <GridComponent
              key={dama.name}
              name={dama.name}
              src={dama.src}
              text={dama.text}
              talles={dama.talles}
              precio={dama.precio}
            />
          ))}
        </div>

        <AiOutlineMan id="hombre" className="mx-auto text-6xl text-sky-700 hover:scale-125 hover:text-sky-500" />
        <h1 className="text-3xl text-center px-6 font-black">
          HOMBRES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-12 mt-12 text-center">
          {Jeans.hombre.map((hombre) => (
            <GridComponent
              key={hombre.name}
              name={hombre.name}
              src={hombre.src}
              text={hombre.text}
              talles={hombre.talles}
              precio={hombre.precio}
            />
          ))}
        </div>
      </section>
      <Image
          className="relative"
          src="/cartoon.png"
          alt="Indiana Jeas Logo"
          width={200}
          height={75}
          priority
        />
    </main>
  );
}

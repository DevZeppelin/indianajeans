import Image from "next/image";
import GridComponent from "./components/GridComponent";
import { Jeans } from "./products.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="relative flex place-items-center mt-4">
        <Image
          className="relative"
          src="/cartoon.png"
          alt="Indiana Jeas Logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="relative flex place-items-center animate-logo">
        <Image
          className="relative p-4"
          src="/logo.png"
          alt="Indiana Jeas Logo"
          width={600}
          height={150}
          priority
        />
      </div>

      <section
        name="BAJO LOGO"
        className="flex flex-col text-center lg:w-96 px-6 pb-8"
      >
        <span className="text-3xl">⭐⭐⭐</span>
        <p className="text-center">
          Pantalones de calidad, directo desde la fábrica hasta su domicilio
        </p>
      </section>

      <section
        name="TIRA BLACK"
        className="w-full bg-gray-800 p-6 text-center"
      >
        <div className="text-white text-center p-8 text-xl">
          ¡Mirá el catálogo, hacé tu pedido, y esperá la entrega!
        </div>
        <span className="p-2 border-2 border-sky-700 rounded-lg hover:bg-sky-900">
          Compra mínima: 20 unidades
        </span>
      </section>

      <section className="p-4 md:p-24">
        <h1 className="text-3xl text-center px-6 mt-12 font-black">DAMAS</h1>
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
        <h1 className="text-3xl text-center px-6 mt-32 font-black">HOMBRE</h1>
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
    </main>
  );
}

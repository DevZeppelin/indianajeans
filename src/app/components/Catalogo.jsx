import { Jeans } from "../products.js";
import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import GridComponent from "./GridComponent";

const Catalogo = () => {
  return (
    <section id="Catalogo" className="p-1 -z-20 md:p-20">
        <AiOutlineWoman
          id="damas"
          className="mx-auto text-6xl text-violet-500 hover:scale-125 hover:text-violet-800"
        />
        <h1 className="text-3xl text-center px-6 font-black text-black">
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

        <AiOutlineMan
          id="hombre"
          className="mx-auto text-6xl text-sky-700 hover:scale-125 hover:text-sky-500"
        />
        <h1 className="text-3xl text-center px-6 font-black">HOMBRES</h1>
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
  )
}

export default Catalogo
import React from "react";

const TiraBlack = () => {
  return (
    <section
      name="TIRA BLACK"
      className="w-full z-50 bg-gray-800 p-4 md:p-6 pb-16 text-center text-base"
    >
      <div className="text-white flflex-col text-center p-4 text-xl">
        <code>Escribinos al Whatsapp para comprar 👖 </code>
        <p className="mb-2">¡no vas a creer los precios! 😎</p>
      </div>
      <div className="p-2 border-2 w-48 flex flex-col mx-auto mt-4 border-sky-700 rounded-lg hover:bg-sky-900">
        <p>Compra mínima: </p>
        <p>20 unidades</p>
      </div>
    </section>
  );
};

export default TiraBlack;

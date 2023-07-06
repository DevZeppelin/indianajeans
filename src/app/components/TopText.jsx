import React from "react";

const TopText = () => {
  return (
    <div className="z-10 w-full items-center font-mono flex flex-col text-center">
      <div className="border-b w-full flex flex-col md:flex-row justify-center text-center border-gray-300 p-2 text-white text-xs md:text-base bg-slate-800">
        <p>Jeans de calidad. Precios increíbles.</p>
      </div>
      <p className="font-bold text-sky-950">- Venta solo por Mayor -</p>
    </div>
  );
};

export default TopText;

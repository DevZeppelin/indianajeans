import Image from "next/image";

const GridComponent = ({name, src, text, talles,precio,bg}) => {

    return (
  <div className="relative">
        <div>
          <div className="uppercase rounded-t-lg text-sm bg-zinc-600 mx-3 p-1 font-semibold drop-shadow-sm shadow-black">{name}</div>
          <Image
            src={src}          
            alt={text}
            width={800}
            height={800}
            className="rounded-t-2xl border-2 border-gray-800"  
            />
        </div>
        <div className="bg-zinc-800 py-2 rounded-b-xl border-1 border-sky-900 h-28">
          <code className="text-base ">{talles}</code>
          <p className="pt-1 italic text-sm md:text-base p-1">{text}</p>
          <span className="text-xl italic font-semibold">$ {precio}</span>
        </div>
         
      </div>
    );
  };
  
  export default GridComponent;
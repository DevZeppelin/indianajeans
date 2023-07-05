import Image from "next/image";

const GridComponent = ({name, src, text, talles,precio,bg}) => {

    return (
  <div className="relative ">
        <div>
          <div className="p-3 uppercase rounded-b-xl text-lg h-10 font-semibold">{name}</div>
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
          <p className="pt-1 italic">{text}</p>
          <span className="text-xl italic font-semibold">$ {precio}</span>
        </div>
         
      </div>
    );
  };
  
  export default GridComponent;
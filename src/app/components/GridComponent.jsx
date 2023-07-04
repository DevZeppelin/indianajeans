import Image from "next/image";

const GridComponent = ({name, src, text, talles,precio}) => {

    return (
  <div className="relative">
        <div>
          <div className="p-3 uppercase rounded-b-2xl">{name}</div>
          <Image
            src={src}          
            alt={text}
            width={800}
            height={800}
            className="rounded-2xl h-80 border-2 border-slate-400"  
            />
        </div>
        <p className="text-base italic ">{talles}</p>
        <p className="pt-1 font-thin">{text}</p>
        <span className="text-xl italic font-extralight">$ {precio}</span>
         
      </div>
    );
  };
  
  export default GridComponent;
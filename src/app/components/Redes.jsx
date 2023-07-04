import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Redes = () => {
  return (
    <div className=" flex text-2xl md:text-4xl gap-4 text-right p-3">
      <div className="hover:scale-150">
      <a
            href="https://instagram.com/indianajeans.ar"
            target="_blank"
            rel="noreferrer"
          >
          <FaInstagram />
        </a>
      </div>
      <div className="hover:scale-150">
        <a
          href="https://api.whatsapp.com/send?phone=5492616708100"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Redes;

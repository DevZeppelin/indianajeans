import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

const FloatIcons = () => {
  return (
    <div className="relative flex place-items-center mt-4">
        <a href="#damas">
          <AiOutlineWoman className="fixed bottom-40 z-20 right-0 md:right-5 text-right text-6xl text-violet-500 hover:scale-125 hover:text-violet-700" />
        </a>
        <a href="#hombre">
          <AiOutlineMan className="fixed bottom-24 z-20 right-0 md:right-5 text-left text-6xl text-sky-700 |hover:scale-125 hover:text-sky-900" />
        </a>
        <a href="#">
          <BiHomeAlt2 className="fixed bottom-6 z-0 right-0 md:right-5 text-left text-6xl text-gray-400 hover:scale-125 hover:text-amber-700" />
        </a>
      </div>
  )
}

export default FloatIcons
import Redes from "./Redes";
import { BiArrowToTop} from "react-icons/bi";

const Footer = () => {
  return (
    <div className=" text-white grid grid-cols-3 justify-items-center p-12">
      <div> Indiana Jeans &copy; &nbsp; {new Date().getFullYear()} </div>
      <a href="#"><BiArrowToTop className="text-6xl"/></a>
      <Redes/>      
    </div>
  );
};

export default Footer;

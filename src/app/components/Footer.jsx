import Redes from "./Redes";

const Footer = () => {
  return (
    <div className=" text-white flex justify-between p-12">
      <div> Indiana Jeans &copy; &nbsp; {new Date().getFullYear()} </div>
      <Redes/>      
    </div>
  );
};

export default Footer;

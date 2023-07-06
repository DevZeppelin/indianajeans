import Redes from "./Redes";

const Footer = () => {
  return (
    <section
        id="FOOTER"
        className="grid grid-cols-3  text-white text-sm md:text-base text-center z-30 bg-black p-4 md:p-12"
      >
        <div className="my-auto">
          {" "}
          Indiana Jeans &copy; &nbsp; {new Date().getFullYear()}{" "}
        </div>

        <Redes />

        <div className="w-full text-right">
          <a
            className="flex flex-col"
            href="https://www.devzeppelin.ar"
            target="_blank"
          >
            <p className="text-xs">Web programada por</p>
            <p>DevZeppelin.ar</p>
          </a>
        </div>
      </section>
  )
}

export default Footer
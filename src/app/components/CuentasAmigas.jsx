import Image from "next/image";

const CuentasAmigas = () => {
  return (
    <section id="AMIGOS" className="flex flex-col justify-center">
      <p className="text-2xl mx-auto mt-12 uppercase">Marcas amigas</p>

      <div className="grid md:grid-cols-3 mx-16">
        <a href="https://www.devzeppelin.ar" target="_blank">
          <Image
            className="p-4"
            src="/friends/devzeppelin.png"
            alt="dev zeppelin programacion"
            width={300}
            height={300}
            priority
          />
        </a>
        <a href="https://www.instagram.com/mimatemates" target="_blank">
          <Image
            className="p-4"
            src="/friends/mimate.png"
            alt="dev zeppelin programacion"
            width={300}
            height={300}
            priority
          />
        </a>
        <a href="https://www.instagram.com/cripto.beer/" target="_blank" className="my-auto">
          <Image
            className="p-4 my-auto"
            src="/friends/criptobeer.png"
            alt="dev zeppelin programacion"
            width={300}
            height={300}
            priority
          />
        </a>
      </div>
      <Image
        className="relative mx-auto mt-12"
        src="/cartoon.png"
        alt="Indiana Jeas Logo"
        width={200}
        height={75}
        priority
      />
    </section>
  );
};

export default CuentasAmigas;

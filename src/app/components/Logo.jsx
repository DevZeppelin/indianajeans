import Image from "next/image"

const Logo = () => {
  return (
    <div className="relative flex place-items-center animate-logo p-4 py-10 md:py-4">
        <Image
          className="relative"
          src="/logo3.png"
          alt="Indiana Jeas Logo"
          width={600}
          height={600}
          priority
        />
      </div>
  )
}

export default Logo
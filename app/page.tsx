import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <main className="relative flex flex-wrap max-w-[1920px] max-h-[1080px] w-full h-full">
        <div className="relative w-1/2 h-1/2 custom-transform">
          <a className="relative block w-full h-full group" href="/vinarstvi">
            <Image
              src="/vinarstvi.png"
              alt="Víno Šílová"
              fill={true}
              className="object-cover"
            />
            <div className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-15 transition-all duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 w-full h-8 lg:h-[45px] bg-[#001427] flex justify-end items-center pr-20 lg:pr-48 border-b border-[#AF9953]">
              <h2 className=" text-[#AF9953] group-hover:underline text-sm lg:text-xl">
                VINAŘSTVÍ
              </h2>
            </div>
          </a>
        </div>
        <div className="w-1/2 h-1/2">
          <a className="relative block w-full h-full group" href="/vinarstvi">
            <Image
              src="/restaurace.png"
              alt="Víno Šílová"
              fill={true}
              className="object-cover"
            />
            <div className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-15 transition-all duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 w-full h-8 lg:h-[45px] bg-[#001427] flex justify-start items-center pl-20 lg:pl-48 border-b border-[#AF9953]">
              <h2 className=" text-[#AF9953] group-hover:underline text-sm lg:text-xl">
                RESTAURACE
              </h2>
            </div>
          </a>
        </div>
        <div className="w-1/2 h-1/2">
          <a className="relative block w-full h-full group" href="/vinarstvi">
            <Image
              src="/ubytovani.png"
              alt="Víno Šílová"
              fill={true}
              className="object-cover"
            />
            <div className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-15 transition-all duration-500 ease-in-out"></div>
            <div className="absolute top-0 w-full h-8 lg:h-[45px] bg-[#001427] flex justify-end items-center pr-20 lg:pr-48">
              <h2 className=" text-[#AF9953] group-hover:underline text-sm lg:text-xl">
                UBYTOVÁNÍ
              </h2>
            </div>
          </a>
        </div>
        <div className="w-1/2 h-1/2">
          <a className="relative block w-full h-full group" href="/vinarstvi">
            <Image
              src="/vinoteka.png"
              alt="Víno Šílová"
              fill={true}
              className="object-cover"
            />
            <div className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-15 transition-all duration-500 ease-in-out"></div>
            <div className="absolute top-0 w-full h-8 lg:h-[45px] bg-[#001427] flex justify-start items-center pl-20 lg:pl-48">
              <h2 className=" text-[#AF9953] group-hover:underline text-sm lg:text-xl">
                VINOTÉKA
              </h2>
            </div>
          </a>
        </div>
        <a
          className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] bg-[#001427] border border-[#AF9953] rounded-full transition-all duration-500 ease-in-out"
          href="/kontakty"
        >
          <Image
            src="/logo.png"
            alt="Víno Šílová"
            fill={true}
            className="object-contain p-6 sm:p-10 md:p-16 lg:p-20"
          />
        </a>
      </main>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  )
}

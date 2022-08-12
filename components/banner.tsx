import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/assets/banner.jpg"
        layout="fill"
        objectFit="cover"
        alt=" Not sure where to go? Perfect!"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg md:text-xl text-white shadow-md">
          Not sure where to go? Perfect!
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          {"I'm flexible"}
        </button>
      </div>
    </div>
  );
}

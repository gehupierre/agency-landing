import Image from "next/image";
import { MainDataType } from "../types/data";

export default function LargeCard({
  image,
  title,
  text,
  buttonLabel,
}: MainDataType) {
  return (
    <div className="cursor-pointer py-16 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={`/assets/explore/${image}`}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt={title}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-1 w-124 font-bold">{title}</h3>
        <p>{text}</p>

        <button className="text-md text-white bg-orange-500 px-4 py-2 rounded-lg mt-8">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

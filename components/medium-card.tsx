import Image from "next/image";
import { ExploreDataType } from "../types/data";

export default function MediumCard({
  image,
  location,
  distance,
}: ExploreDataType) {
  return (
    <div className="cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={`/assets/explore/${image}`}
          layout="fill"
          className="rounded-lg"
          alt={location}
        />
      </div>
      <h3 className="text-2xl mt-3">{location}</h3>
    </div>
  );
}

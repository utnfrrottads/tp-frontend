import Image from "next/image";
import { useEffect, useState } from "react";
import { defaultSrc } from "../../utils/constants";

export default function HeaderProfile({ friend }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [friend]);

  return (
    <div className="relative flex items-center h-16 px-4 border-b border-l text-white bg-neutral-800 border-black">
      <Image
        className="object-cover rounded-full"
        height="40px"
        width="40px"
        src={imageError ? defaultSrc : friend.profileImage}
        alt="username profile picture"
        onErrorCapture={(e) => {
          setImageError(true);
        }}
        onLoa
      />
      <span className="block ml-2 font-bold">{friend.name}</span>

      {/* <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span> */}
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { urlForImage } from "~/sanity/lib/sanity.image";
import type { Image as ImageType } from "sanity";

type ItemProps = {
  image: ImageType;
  alt?: string;
  description?: string;
};

const Item: React.FC<ItemProps> = ({ image, alt, description }) => {
  return (
    <div className="group relative cursor-pointer">
      <Image
        src={urlForImage(image)?.url() || ""}
        alt={alt ?? ""}
        className="rounded-lg"
        width={300}
        height={300}
      />
      <div className="absolute bg-beige/[0.8] bottom-0 invisible group-hover:visible p-2">
        {description}
      </div>
    </div>
  );
};

export default Item;

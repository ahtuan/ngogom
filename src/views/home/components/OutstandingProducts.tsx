"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { Carousel } from "@/components";
import Image from "next/image";
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const OutstandingProducts = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="container mx-auto">
      <Carousel options={OPTIONS}>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="relative">
            <Image
              src={`/images/asset-${index}.jpeg`}
              alt="outstanding products"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OutstandingProducts;

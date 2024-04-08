"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
// @ts-ignore
import { Carousel } from "@/components";
import Image from "next/image";
import Item from "@/views/home/components/OutstandingProducts/Item";
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const mockData = [
  {
    src: "/images/asset-1.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/images/asset-2.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/images/asset-3.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/images/asset-4.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/images/asset-5.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/images/asset-6.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const Index = ({ className = "" }) => {
  return (
    <div className={`container mx-auto ${className}`}>
      <Carousel options={OPTIONS}>
        {mockData.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Carousel>
    </div>
  );
};

export default Index;

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
// @ts-ignore
import { Carousel } from "@/components";
import Image from "next/image";
import Item from "@/views/home/components/OutstandingProducts/Item";
import { getClient } from "~/sanity/lib/sanity.client";
import { getFeatures } from "~/sanity/lib/sanity.query";
import { readToken } from "~/sanity/lib/sanity.api";
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const getFeaturesData = async () => {
  "use server";
  const client = getClient({ token: readToken });
  const response = await getFeatures(client);
  return response;
};

const Index = async ({ className = "" }) => {
  const data = await getFeaturesData();

  return (
    <div className={`container mx-auto ${className}`}>
      <Carousel options={OPTIONS}>
        {data?.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Carousel>
    </div>
  );
};

export default Index;

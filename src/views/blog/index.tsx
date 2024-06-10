import React from "react";
import { getClient } from "~/sanity/lib/sanity.client";
import { readToken } from "~/sanity/lib/sanity.api";
import { getPosts } from "~/sanity/lib/sanity.query";
import BlogCard from "@/views/blog/BlogCard";

const getPostsData = async () => {
  "use server";
  const client = getClient({ token: readToken });
  const response = await getPosts(client);
  return response;
};

const Index = async () => {
  const data = await getPostsData();
  return (
    <div className="container p-4 sm:mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {data?.map((post, index) => (
          <BlogCard post={post} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Index;

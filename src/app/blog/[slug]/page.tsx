import React from "react";
import { getClient } from "~/sanity/lib/sanity.client";
import { readToken } from "~/sanity/lib/sanity.api";
import { getPost, getRecentPosts } from "~/sanity/lib/sanity.query";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { RichTextComponents } from "@/components/RichText";
import { urlForImage } from "~/sanity/lib/sanity.image";
import Image from "next/image";
import Error from "/public/images/404-error.svg";

import { ArrowLeftIcon } from "@sanity/icons";
import BlogCard from "@/views/blog/BlogCard";

const getPostData = async (slug: string) => {
  "use server";
  const client = getClient({ token: readToken });
  const post = await getPost(client, slug);
  const recentPosts = await getRecentPosts(client, slug);
  return { post, recentPosts };
};

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { post, recentPosts } = await getPostData(params.slug);

  return (
    <section className="container p-4 sm:p-0 sm:mx-auto grid gap-6 lg:grid-cols-4">
      {post ? (
        <article className="grid lg:col-span-3 space-y-2.5 mb-4">
          <Image
            src={urlForImage(post.image)?.url() as string}
            alt={post.image.alt as string}
            width={300}
            height={300}
            className="w-full h-48 object-cover !mb-3 mt-10"
          />
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl my-2">
            {post.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 ">{post.excerpt}</p>

          <div className="flex justify-center my-2 ">
            <span>---------------</span>
          </div>

          {post.body?.length && (
            <PortableText value={post.body} components={RichTextComponents} />
          )}
        </article>
      ) : (
        <div className="lg:col-span-3 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image
              src={Error}
              alt="Error 404"
              className="w-full h-64 mb-4 object-cover"
            />
            <p className="text-xl font-medium mb-2">
              {" "}
              Không tìm thấy bài viết này
            </p>
            <Link
              href={"/blog"}
              className="w-52 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Trở về Chuyện &ldquo;Gốm&rdquo;
            </Link>
          </div>
        </div>
      )}

      <div className="">
        <h2 className="text-2xl font-bold mb-3">Bài viết gần gây</h2>
        {recentPosts?.map((post, index) => (
          <BlogCard post={post} key={index} size="small" />
        ))}
      </div>
    </section>
  );
};

export default Page;
export const dynamic = "force-dynamic";

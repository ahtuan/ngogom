import React from "react";
import { PostItem } from "~/sanity/lib/sanity.query";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "~/sanity/lib/sanity.image";
import { ArrowRightIcon } from "@sanity/icons";

type BlogCardProps = {
  post: PostItem;
  size?: "default" | "small";
};
const BlogCard = ({ post, size = "default" }: BlogCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950 ${
        size === "small" ? "h-[330px]" : "h-[375px]"
      }`}
    >
      <Image
        src={urlForImage(post.image)?.url() || ""}
        alt={(post.image.alt as string) || ""}
        width={300}
        height={300}
        className={`w-full ${size === "small" ? "h-36" : "h-48"} object-cover`}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link
            href={"/blog/" + post.slug}
            prefetch={false}
            className="hover:underline"
          >
            {post.title}
          </Link>
        </h3>
        <p
          className={`text-gray-500 dark:text-gray-400  ${
            size === "small" ? "text-sm mb-2" : "mb-4"
          } line-clamp-3`}
        >
          {post.excerpt}
        </p>
        <div className="flex justify-end pb-2">
          <Link
            href={"/blog/" + post.slug}
            className={`inline-flex items-center text-primary hover:underline ${
              size == "small" ? "text-sm" : ""
            }`}
            prefetch={false}
          >
            Đọc thêm
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

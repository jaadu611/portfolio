"use client";

import windowWrapper from "@/Hight-order-components/windowWrapper";
import SafariExtention from "@/components/Extentions/SafariExtention";
import { blogPosts } from "@/constants/safari.constants";
import Image from "next/image";

const Safari = () => {
  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-gray-900 rounded-b-lg overflow-auto p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        My Developer Blogs
      </h2>

      <div className="space-y-6">
        {blogPosts.map(({ id, date, title, image, link }) => (
          <div
            key={id}
            className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
          >
            {/* Thumbnail */}
            <div className="shrink-0">
              <Image
                src={image}
                alt={title}
                width={80}
                height={60}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {title}
              </h3>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline w-fit mt-1"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default windowWrapper(Safari, "safari", undefined, SafariExtention);

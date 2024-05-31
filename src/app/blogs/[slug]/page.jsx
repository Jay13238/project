//this is new

import React from "react";
import { sanityClient, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Button from "@/app/components/Button"; // Assuming Button is a component in your project

export const revalidate = 30 // revalidate at most every hour


async function getData(slug) {
  const query = `*[_type =='blog' && slug.current == $slug ] {
    title,
    slug,
    titleImage,
    content,
    releaseDate,
    smallDescription,
    "currentSlug": slug.current,
  }[0]`;

  const data = await sanityClient.fetch(query, { slug });
  return data;
}

async function getBlogs() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      slug,
      titleImage,
      smallDescription,
      "currentSlug": slug.current
    }`;

  const blogPosts = await sanityClient.fetch(query);
  return blogPosts;
}

export default async function Article({ params }) {
  const data = await getData(params.slug);
  const blogPosts = await getBlogs();

  return (
    <div>
      <article className="pt-[147px]">
        <h1 className="text-center text-secondary font-medium mb-10">
          {data.title}
        </h1>
        <div className="mx-auto relative max-w-[800px] h-[250px] -z-10">
          <Image
            src={urlFor(data.titleImage).url()}
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
          />
        </div>
        <div className="my-10 px-8 prose prose-blue mx-auto">
          <PortableText value={data.content} />
          <div className="flex justify-end">
            <span className="prose prose-blue font-semibold text-right">
              Updated Last: {data.releaseDate}
            </span>
          </div>
        </div>
      </article>

      <div>
        <h2 className="text-center mt-16 mb-10">Check Out Our Other Blogs</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {blogPosts.map((post, idx) => (
          <div
            className="w-[365px] h-[580px] bg-accent-100 rounded-lg pb-5 relative"
            key={idx}
          >
            <div className="relative w-[365px] h-[265px] rounded-t-lg -z-10">
              <Image
                src={urlFor(post.titleImage).url()}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="rounded-t-lg -z-50"
              />
            </div>
            <div className="px-8 py-4">
              <h3 className="text-secondary mb-2">{post.title}</h3>
              <p>{post.smallDescription}</p>
            </div>
            <div className="items-end absolute bottom-[20px] left-[98px]">
              <Link href={`/blogs/${post.currentSlug}`}>
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

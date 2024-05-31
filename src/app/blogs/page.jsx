import React from "react";
import Image from "next/image";
import { sanityClient, urlFor } from "../lib/sanity";
import Link from "next/link";
import Button from "../components/Button";

export const revalidate = 30;

async function getBlogs() {
  const query = `
*[_type =='blog'] | order(_createdAt desc) {
 title,
  slug,
   titleImage,
   smallDescription,
  "currentSlug": slug.current
  
}`;

  const data = await sanityClient.fetch(query);

  return data;
}

export default async function page() {
  const data = await getBlogs();

  console.log(data);
  return (
    <section className="pt-[150px] bg-accent-200">
      <div>
        <h1 className="text-secondary text-center mb-8">Blogs</h1>
        <p className="text-secondary text-center mx-20">
          Explore a world of insightful narratives and enriching perspectives by
          delving into the captivating array of blogs on our website. Engage
          your curiosity and broaden your horizons as you immerse yourself in
          diverse topics crafted with precision and passion. Whether you seek
          inspiration, knowledge, or simply a moment of escape, our carefully
          curated collection of blogs offers something for every reader. From
          thought-provoking analyses to heartwarming anecdotes, let each click
          unveil a new adventure waiting to be discovered. Embrace the joy of
          exploration and embark on a journey of enlightenment through the pages
          of our blogosphere. Start reading today and unlock the door to endless
          possibilities
        </p>
      </div>
      <div className=" pt-20 grid grid-cols-1 md:grid-cols-2 md:mx-[8%] lg:grid-cols-3 lg:mx-[10%] xl:grid-cols-4  px-8 gap-4 ">
        {data.map((post, idx) => (
          <div
            className="w-[400px] h-[510px] bg-white rounded-lg  relative mb-10 "
            key={idx}
          >
            <div className="relative w-[400px] h-[265px] rounded-t-lg ">
              <Image
                src={urlFor(post.titleImage).url()}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className=" rounded-t-lg"
              />
            </div>
            <div className=" flex flex-col h-[230px]">
              <div className=" px-8 py-4">
                <h3 className=" text-secondary mb-2">{post.title}</h3>
                <p>{post.smallDescription}</p>
              </div>
              <div className=" items-end mt-auto  bottom-[20px] flex justify-center ">
                <Link className="" href={`/blogs/${post.currentSlug}`}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { MetadataRoute } from "next";
import { sanityClient } from "@/app/lib/sanity";

async function getBlogs() {
  const query = `
*[_type == 'blog'] | order(_createdAt desc) {
  title,
  slug,
  titleImage,
  releaseDate,
  smallDescription,
  "currentSlug": slug.current
}`;

  const posts = await sanityClient.fetch(query);

  return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogs();

  const postEntries: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${post.currentSlug}`,
    lastmod: post.releaseDate,
    
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/packages`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/policy`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const blogId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const blogDataSet = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityClient = createClient({
  projectId: blogId,
  dataset: blogDataSet,
  apiVersion: "2024-05-23",
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export const image = {
  title: "Poster",
  name: "poster",
  type: "document",
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "attribution",
      type: "string",
      title: "Attribution",
    },
  ],
};
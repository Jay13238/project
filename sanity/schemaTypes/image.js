export const image = {
  title: "Poster",
  name: "poster",
  type: "image",
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
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
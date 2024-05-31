

export const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of Article",
    },
    {
  title: 'Release date',
  name: 'releaseDate',
  type: 'date',
  options: {
    dateFormat: 'YYYY-MM-DD',
    calendarTodayLabel: 'Today'
  }
},
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      }
    },
    {
      name: "titleImage",
      type: "image",
      title: "Head Image",
    },
    {
      name: "smallDescription",
      type: "text",
      title: "Small Description",
    },
    {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
            {
                type: 'block',
            },
        ],
    }
  ],
};
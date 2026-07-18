function titleCase(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Directory data file, scoped to src/notes/ only (§2.2, §2.3).
export default {
  layout: "layouts/note.njk",
  tags: ["notes"],
  eleventyComputed: {
    permalink: (data) => (data.page.fileSlug ? `/${data.page.fileSlug}/` : false),
    title: (data) => data.title || titleCase(data.page.fileSlug || ""),
  },
};

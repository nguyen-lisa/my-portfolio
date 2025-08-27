import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,   // Contentlayer will look inside /content/projects/
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    year: { type: "number" },
    image: { type: "string" },
    demoSlug: { type: "string" },
    figmaUrl: { type: "string" },
    screenshots: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.flattenedPath.split("/").pop()! },
    url:  { type: "string", resolve: (doc) => `/projects/${doc._raw.flattenedPath.split("/").pop()}` },
    demoUrl: {
      type: "string",
      resolve: (doc) => (doc.demoSlug ? `/demos/${doc.demoSlug}` : undefined)
    },
    _id: { type: "string", resolve: (doc) => doc._id }
  }
}));

export default makeSource({
  contentDirPath: "content", // 👈 This means you need a /content folder
  documentTypes: [Project],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] }
});

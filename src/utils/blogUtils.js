import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  }

  const text = await readFile(`./src/lib/resources/${fileSlug}.md`, "utf8");
  const {
    content,
    data: { title, excerpt, short_description, seo_title, seo_description, thumbnail, subtitle },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, excerpt, short_description,  seo_title, seo_description, thumbnail, subtitle, body };
}

export async function getSlugs() {
  const files = await readdir("./src/lib/resources");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getPosts(locale = "en") {
  const slugs = await getSlugs();
  const posts = [];

  for (const slug of slugs) {
    try {
      const post = await getPost(slug, locale);
      posts.push(post);
    } catch (error) {
      console.error(`Error reading post with slug: ${slug}`, error);
    }
  }

  return posts;
}

export async function getPage(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  }

  const text = await readFile(`./src/lib/policies/${fileSlug}.md`, "utf8");
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, date, body };
}

export async function getPageSlugs() {
  const files = await readdir("./src/lib/policies/");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
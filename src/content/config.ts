import { defineCollection } from "astro:content"

export const collections = {
  data: defineCollection({ type: "data" }),
  service: defineCollection({ type: "content" }),
  software: defineCollection({ type: "content" }),
}

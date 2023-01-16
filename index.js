import { serve } from "https://deno.land/std/http/server.ts";

const url = "http://hn.algolia.com/api/v1/search?query=javascript";

const result = await fetch(url).then((result) => result.json());

const stories = result.hits.map((hit) => ({
  title: hit.title,
  url: hit.url,
  createdAt: hit.created_at_i,
}));

serve((_req) => new Response(JSON.stringify(stories)), {
  port: 8000,
});

console.log("Hello Deno");

import { serve } from "https://deno.land/std/http/server.ts";
import { config } from "https://deno.land/x/dotenv/mod";

import { mapStory } from "./stories.ts";

const url = "http://hn.algolia.com/api/v1/search?query=javascript";

const result = await fetch(url).then((result) => result.json());

const stories = result.hits.map(mapStory);

serve((_req) => new Response(JSON.stringify(stories)), {
  port: parseInt(config()["PORT"]),
});

console.log("Hello Deno");

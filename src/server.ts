import { Application } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello Deno";
});

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });

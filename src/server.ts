import { Application, Context } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const app = new Application();

const logging = async (ctx, next) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  await next();
};

app.use(logging);

app.use((ctx) => {
  console.log("returning a response ...");
  ctx.response.body = "Hello Deno";
});

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });

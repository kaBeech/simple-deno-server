import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const app = new Application();

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
}).get("/1", (ctx) => {
  ctx.response.body = "Hello Deno 1";
}).get("/2", (ctx) => {
  ctx.response.body = "Hello Deno 2";
});

app.use(router.routes());
app.use(router.allowedMethods());

const routerThree = new Router();

routerThree.get("/3", (ctx) => {
  ctx.response.body = "Hello Deno 3";
});

const routerFour = new Router();

routerFour.get("/4", (ctx) => {
  ctx.response.body = "Hello Deno 4";
});

app.use(routerThree.routes());
app.use(routerThree.allowedMethods());

app.use(routerFour.routes());
app.use(routerFour.allowedMethods());

// const logging = async (ctx: Context, next: Function) => {
//   console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
//   await next();
// };

// app.use(logging);

// app.use((ctx) => {
//   console.log("returning a response ...");
//   ctx.response.body = "Hello Deno!";
// });

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });

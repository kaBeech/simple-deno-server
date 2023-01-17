import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

import models from "./models/index.ts";
import routes from "./routes/index.ts";

const port = 8000;
const app = new Application();

const router = new Router();

const logging = async (ctx: Context, next: Function) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  console.log("Hello Deno!!");
  console.log("returning a response ...");
  await next();
};

app.use(logging);

app.use(async (ctx, next) => {
  ctx.state = {
    models,
    me: models.users.get("1"),
  };

  await next();
});

app.use(routes.session.allowedMethods());
app.use(routes.session.routes());
app.use(routes.user.allowedMethods());
app.use(routes.user.routes());
app.use(routes.message.allowedMethods());
app.use(routes.message.routes());

// router.get("/", (ctx) => {
//   ctx.response.body = "Hello Deno!";
// }).get("/1", (ctx) => {
//   ctx.response.body = "Hello Deno 1!";
// }).get("/2", (ctx) => {
//   ctx.response.body = "Hello Deno 2!";
// });

// app.use(router.routes());
// app.use(router.allowedMethods());

// const routerThree = new Router();

// routerThree.get("/3", (ctx) => {
//   ctx.response.body = "Hello Deno 3!";
// });

// const routerFour = new Router();

// routerFour.get("/4", (ctx) => {
//   ctx.response.body = "Hello Deno 4!";
// });

// app.use(routerThree.routes());
// app.use(routerThree.allowedMethods());

// app.use(routerFour.routes());
// app.use(routerFour.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });

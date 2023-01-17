import {
  Application,
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak/mod.ts";

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

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
}).get("/1", (ctx) => {
  ctx.response.body = "Hello Deno 1!";
}).get("/2", (ctx) => {
  ctx.response.body = "Hello Deno 2!";
});

router.get("/users", (ctx) => {
  ctx.response.body = "GET HTTP method on user resource";
});

router.post("/users", (ctx) => {
  ctx.response.body = "POST HTTP method on user resource";
});

router.put("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `PUT HTTP method on user/${userId} resource`;
});

router.delete("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `PUT DELETE method on user/${userId} resource`;
});

app.use(router.routes());
app.use(router.allowedMethods());

const routerThree = new Router();

routerThree.get("/3", (ctx) => {
  ctx.response.body = "Hello Deno 3!";
});

const routerFour = new Router();

routerFour.get("/4", (ctx) => {
  ctx.response.body = "Hello Deno 4!";
});

app.use(routerThree.routes());
app.use(routerThree.allowedMethods());

app.use(routerFour.routes());
app.use(routerFour.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });

import { Hono } from "hono";
import { cors } from "hono/cors";
import { config } from "./config.js";
import { serveStatic } from "@hono/node-server/serve-static";
import { compress } from "hono/compress";
import logger from "./utils/logger.js";
import registry from "./registry.js";
import robotstxt from "./robots.txt.js";
import NotFound from "./views/NotFound.js";
import Home from "./views/Home.js";
import Error from "./views/Error.js";

const app = new Hono();

// 压缩响应
app.use(compress());

// CORS
app.use(
  "*",
  cors({
    // 可写为数组
    origin: config.ALLOWED_DOMAIN,
    allowMethods: ["POST", "GET", "OPTIONS"],
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    credentials: true,
  }),
);

// 静态资源
app.use(
  "/*",
  serveStatic({
    root: "./public",
    rewriteRequestPath: (path) => (path === "/trands/favicon.ico" ? "favicon.png" : path),
  }),
);

// 主路由
app.route("/trands/", registry);

// robots
app.get("/trands/robots.txt", robotstxt);
// 首页
app.get("/trands/", (c) => c.html(<Home />));
// 404
app.notFound((c) => c.html(<NotFound />, 404));
// error
app.onError((err, c) => {
  logger.error(`出现致命错误：${err}`);
  return c.html(<Error error={err?.message} />, 500);
});

export default app;

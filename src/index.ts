import { serve } from "@hono/node-server";
import { config } from "./config.js";
import logger from "./utils/logger.js";
import app from "./app.js";

logger.info(`Trands API 成功在端口 ${config.PORT} 上运行`);
logger.info(`Local: http://localhost:${config.PORT}`);

// 启动服务器
const server = serve({
  fetch: app.fetch,
  port: config.PORT,
});

export default server;

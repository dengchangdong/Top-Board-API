import { serve } from "@hono/node-server";
import { config } from "./config.js";
import logger from "./utils/logger.js";
import app from "./app.js";

// 启动服务器
const serveHotApi = (port: number = config.PORT) => {
  try {
    const apiServer = serve({
      fetch: app.fetch,
      port,
    });
    logger.info(`FEEF API 成功在端口 ${port} 上运行`);
    logger.info(`Local: http://localhost:${port}`);
    return apiServer;
  } catch (error) {
    logger.error(error);
  }
};

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "docker") {
  serveHotApi(config.PORT);
}

export default serveHotApi;

import type { FC } from "hono/jsx";
import { html } from "hono/html";
import Layout from "./Layout.js";

const NotFound: FC = () => {
  return (
    <Layout title="404 Not Found | FEEF API">
      <main className="not-found">
        <div className="title">
          <h1 className="title-text">404 Not Found</h1>
          <span className="title-tip">请检查您的路径</span>
        </div>
      </main>
    </Layout>
  );
};

export default NotFound;

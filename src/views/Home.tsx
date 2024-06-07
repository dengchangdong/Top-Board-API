import type { FC } from "hono/jsx";
import { html } from "hono/html";
import Layout from "./Layout.js";

const Home: FC = () => {
  return (
    <Layout title="DailyHot API">
      <main className="home">
        <div className="title">
          <h1 className="title-text">服务已正常运行</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

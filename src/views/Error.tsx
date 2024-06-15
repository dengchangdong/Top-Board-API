import type { FC } from "hono/jsx";
import { html } from "hono/html";
import Layout from "./Layout.js";

const Error: FC = (props) => {
  return (
    <Layout title="Error | Trands API">
      <main className="error">
        <div className="title">
          <h1 className="title-text">Looks like something went wrong</h1>
          <span className="title-tip">程序执行出错</span>
          {props?.error ? <p className="content">{props.error}</p> : null}
        </div>
    </Layout>
  );
};

export default Error;

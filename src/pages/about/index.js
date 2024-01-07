import Layout from "../../components/Layout";
import Helmet from "react-helmet";
import React from "react";
export default function Access() {
  return (
    <Layout>
      <section className="section">
        <Helmet title={"Bakery Lico 営業日"} />
        <div className="container content">
          <div>
            <h3>営業日</h3>
            <img src="/img/1704601707741.jpg" alt="2024年 1月の営業日" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

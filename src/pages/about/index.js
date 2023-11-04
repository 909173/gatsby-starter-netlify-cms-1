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
            <img src="/img/bed1ca1db6f661dcbb326a777462749a-jpg.jpg" alt="2023年 11月の営業日" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

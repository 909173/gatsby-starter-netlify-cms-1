import Layout from "../../components/Layout";
import Helmet from "react-helmet";
import React from "react";
export default function Access() {
  return (
    <Layout>
      <section className="section">
        <Helmet title={"アクセス"} />
        <div className="container content">
          <div>
            <h3>アクセス</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.923173133584!2d140.05929217631655!3d35.65426443145401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602283d4fc94a6af%3A0xd12cfb181cd42c70!2z44CSMjYyLTAwMzIg5Y2D6JGJ55yM5Y2D6JGJ5biC6Iqx6KaL5bed5Yy65bmV5by155S677yV5LiB55uu77yS77yT77yY4oiS77yT!5e0!3m2!1sja!2sjp!4v1687156711668!5m2!1sja!2sjp"
              style={{ border: "0px", width: "700px", height: "500px" }}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}

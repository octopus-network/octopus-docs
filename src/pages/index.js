import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/Card";

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Octopus Network Docs" description="">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: "750" }}>
          Welcome to Octopus Network Docs
        </h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./validate"
                header={{
                  label: "🛡️ Become a Validator",
                }}
                body={{
                  label:
                    "Join Octopus Network's LPoS to help secure the Appchain network and earn rewards",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

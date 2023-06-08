import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return <Layout title="Homepage" description="Octopus Network Docs"></Layout>;
}

export default Home;

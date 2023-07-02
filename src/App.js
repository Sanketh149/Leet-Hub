import React from "react";
import Card from "./components/Card";
import styles from "./App.module.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card
          image="leetmate.png"
          name="LeetMate"
          description="Compare the recently solved 20 Problems"
          href="https://leet-mate-sanketh.vercel.app/"
          target="_blank"
        />
        <Card
          image="leetgraph.png"
          name="LeetGraph"
          description="Compare all ratings from the Contests"
          href="#"
        />
        <Card
          image="leetcompare.png"
          name="LeetCompare"
          description="Compare based on Total Problems solved"
          href="https://leet-compare-sanketh.vercel.app/"
        />
      </div>
    </>
  );
};

export default App;

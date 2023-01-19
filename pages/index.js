import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: "#87d1d4" }}>Game Library App</span>
        </h1>

        <p className={styles.description}>
          Get started by searching for a game
        </p>
      </main>
    </PageLayout>
  );
};
export default Home;

import Head from "next/head";
import styles from "./MainLayout.module.css";
import Navbar from "../../components/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jimmy</title>
        <meta name="description" content="Pagina de ejemplo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

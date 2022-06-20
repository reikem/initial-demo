import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";
import styles from "../components/layout/MainLayout.module.css";
export default function HomePage() {
  return (
    <MainLayout>
      <>
        <h1>Home Page</h1>

        <h2 className={styles.title}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h2>
      </>
    </MainLayout>
  );
}

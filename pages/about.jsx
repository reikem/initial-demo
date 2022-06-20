import Link from "next/link";
import { DarkLayout } from "../components/layout/DarkLayout";
import styles from "../components/layout/MainLayout.module.css";
import { MainLayout } from "../components/layout/MainLayout";
export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
        <>
          <h1>About Page</h1>

          <h1 className={styles.title}>
            Ir a <Link href="/">Home</Link>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={"code"}>pages/about.jsx</code>
          </p>
        </>
      </DarkLayout>
    </MainLayout>
  );
}

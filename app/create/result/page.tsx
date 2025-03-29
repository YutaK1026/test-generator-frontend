import { TestResultForm } from "@/components/TestResultForm";
import styles from "./page.module.scss";

export default function TestResultPage() {
  return (
    <main className={styles.main}>
      <TestResultForm />
    </main>
  );
}

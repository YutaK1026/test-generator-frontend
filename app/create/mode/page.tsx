import { QuestionModeForm } from "@/components/QuestionModeForm";
import styles from "./page.module.scss";

export default function QuestionModePage() {
  return (
    <main className={styles.main}>
      <QuestionModeForm />
    </main>
  );
}

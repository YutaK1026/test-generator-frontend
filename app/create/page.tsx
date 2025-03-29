import { VocabularySelectForm } from "@/components/VocabularySelectForm";
import styles from "./page.module.scss";

export default function CreatePage() {
  return (
    <main className={styles.main}>
      <VocabularySelectForm />
    </main>
  );
}

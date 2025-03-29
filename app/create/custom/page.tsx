import { CustomSettingsForm } from "@/components/CustomSettingsForm";
import styles from "./page.module.scss";

export default function CustomSettingsPage() {
  return (
    <main className={styles.main}>
      <CustomSettingsForm />
    </main>
  );
}

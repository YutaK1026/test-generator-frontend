import { LoginForm } from "@/components/LoginForm";
import styles from "./page.module.scss";
export default function LoginPage() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}

import { SigninForm } from "@/components/SigninForm";
import styles from "./page.module.scss";
export default function SigninPage() {
  return (
    <main className={styles.main}>
      <SigninForm />
    </main>
  );
}

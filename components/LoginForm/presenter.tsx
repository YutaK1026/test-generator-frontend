import React from "react";
import * as Label from "@radix-ui/react-label";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./presenter.module.scss";
import { Card } from "@radix-ui/themes";

interface LoginFormPresenterProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleSecondary: () => void;
}

export const LoginFormPresenter: React.FC<LoginFormPresenterProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
  isError,
  handleSubmit,
  handleSecondary,
}) => {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Login</h2>
        <p className={styles.cardDescription}>
          emailとpasswordを入力してください
        </p>
      </div>
      <div className={styles.cardContent}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <Label.Root htmlFor="email" className={styles.label}>
              email
            </Label.Root>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <Label.Root htmlFor="password" className={styles.label}>
              password
            </Label.Root>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroupCheckbox}>
            <Checkbox.Root
              id="remember"
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
              className={styles.checkbox}
            >
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <FaRegCheckCircle />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root htmlFor="remember" className={styles.checkboxLabel}>
              Remember me
            </Label.Root>
          </div>
          {isError && (
            <div className={styles.error}>
              emailまたはpasswordが間違っています
            </div>
          )}
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={handleSecondary}
          >
            サインインがまだな方はこちら
          </button>
        </form>
      </div>
    </Card>
  );
};

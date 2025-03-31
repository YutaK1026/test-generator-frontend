import React from "react";
import * as Label from "@radix-ui/react-label";
import { Card } from "@radix-ui/themes";

import styles from "./presenter.module.scss";

interface SigninFormPresenterProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const SigninFormPresenter: React.FC<SigninFormPresenterProps> = ({
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Signin</h2>
        <p className={styles.cardDescription}>
          email，nameとpasswordを入力してください
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
            <Label.Root htmlFor="name" className={styles.label}>
              name
            </Label.Root>
            <input
              type="name"
              id="name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <button type="submit" className={styles.submitButton}>
            Signin
          </button>
        </form>
      </div>
    </Card>
  );
};

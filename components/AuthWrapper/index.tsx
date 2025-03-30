"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import styles from "./index.module.scss";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div className={styles.unauthenticatedContainer}>
        <p>機能を使うにはログインが必要です</p>
        <Button
          label="login"
          variant="primary"
          onClick={() => router.push("/login")}
        />
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthWrapper;

"use client";

import styles from "./presenter.module.scss";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { useSession } from "next-auth/react";

const TestCreateButtonPresenter: React.FC = () => {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <Link href="/create" className={styles.menu_link}>
          <FaPlus className={styles.icon} size={32} color="white" />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default TestCreateButtonPresenter;

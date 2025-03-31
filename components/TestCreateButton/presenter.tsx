import styles from "./presenter.module.scss";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import type { status } from "@/app/types/nextAuthStatus";
interface TestCreateButtonPresenterProps {
  status: status;
}

const TestCreateButtonPresenter: React.FC<TestCreateButtonPresenterProps> = ({
  status,
}) => {
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

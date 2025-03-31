import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./presenter.module.scss";
import { MobileMenu } from "./HambergerMenu";
import type { status } from "@/app/types/nextAuthStatus";

export interface HeaderPresenterProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  status: status;
  logout: () => void;
}

export const HeaderPresenter: React.FC<HeaderPresenterProps> = ({
  isMobile,
  isMenuOpen,
  toggleMenu,
  status,
  logout,
}) => {
  return (
    <header className={styles.header}>
      {!isMobile && (
        <>
          <Link href="/" className={styles.header__logo}>
            <Image
              src="/icon.png"
              alt="Logo"
              width={64}
              height={64}
              className={styles.header__logo_image}
            />
          </Link>
          <nav className={styles.header__nav}>
            <Link href="/" className={styles.header__nav_link}>
              home
            </Link>
            <Link href="/help" className={styles.header__nav_link}>
              help
            </Link>
            {status === "unauthenticated" ? (
              <Link href="/login" className={styles.header__nav_link}>
                login
              </Link>
            ) : (
              <div onClick={() => logout()} className={styles.header__nav_link}>
                logout
              </div>
            )}
          </nav>
        </>
      )}

      {isMobile && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          status={status}
          logout={logout}
        />
      )}
    </header>
  );
};

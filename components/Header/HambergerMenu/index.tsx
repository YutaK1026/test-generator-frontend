"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import { IconButton } from "@/components/ui/IconButton";
import styles from "./index.module.scss";
import { ButtonSizeProp } from "@/app/types/button";

export interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  status: "authenticated" | "loading" | "unauthenticated";
  logout: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  status,
  logout,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.mobile_menu_container}>
      <div className={styles.hamburger_button}>
        <IconButton
          handleClick={toggleMenu}
          Icon={RxHamburgerMenu}
          disable={false}
          size={ButtonSizeProp.medium}
        />
      </div>
      <div
        ref={menuRef}
        className={`${styles.menu} ${isMenuOpen ? styles.open : styles.closed}`}
      >
        <div className={styles.menu_icon}>
          <IconButton
            handleClick={toggleMenu}
            Icon={HiMiniXMark}
            disable={false}
            size={ButtonSizeProp.medium}
          />
        </div>
        <nav className={styles.menu_nav}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link href="/" className={styles.menu_link} onClick={toggleMenu}>
                home
              </Link>
              <Link
                href="/help"
                className={styles.menu_link}
                onClick={toggleMenu}
              >
                help
              </Link>
              {status === "unauthenticated" ? (
                <Link href="/login" className={styles.menu_link}>
                  login
                </Link>
              ) : (
                <div onClick={() => logout()} className={styles.menu_link}>
                  logout
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {/* メニューが開いている時，外側をクリックした時に閉じて欲しい為 */}
      {isMenuOpen && (
        <div
          className={styles.menu_overlay}
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

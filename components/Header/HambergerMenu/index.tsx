"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import { IconButton } from "@/components/ui/IconButton";
import { GoogleAuthButton } from "../Google";
import styles from "./index.module.scss";
import { ButtonSizeProp } from "@/app/types/button";

export interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  toggleMenu
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                ホーム
              </Link>
            </li>
          </ul>

          <div className={styles.menu_auth}>
            <GoogleAuthButton />
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div
          className={styles.menu_overlay}
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
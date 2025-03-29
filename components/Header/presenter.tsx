import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './presenter.module.scss';
import { GoogleAuthButton } from './Google';
import { MobileMenu } from './HambergerMenu';

export interface HeaderPresenterProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const HeaderPresenter: React.FC<HeaderPresenterProps> = ({
  isMobile,
  isMenuOpen,
  toggleMenu
}) => {
  return (
    <header className={styles.header}>
      {/* PC版 */}
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
          </nav>
          <div className={styles.header__login}>
            <GoogleAuthButton />
          </div>
        </>
      )}

      {/* モバイル版：ハンバーガーメニュー */}
      {isMobile && (
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      )}
    </header>
  );
};

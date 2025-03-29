import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './presenter.scss';
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
    <header className="header">
      {/* PC版 */}
      {!isMobile && (
        <>
          <Link href="/" className="header__logo">
            <Image
              src="/icon.png"
              alt="Logo"
              width={64}
              height={64}
              className="header__logo-image"
            />
          </Link>
          <nav className="header__nav">
            <Link href="/" className="header__nav-link">
              home
            </Link>
            <Link href="/help" className="header__nav-link">
              help
            </Link>
          </nav>
          <div className="header__login">
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

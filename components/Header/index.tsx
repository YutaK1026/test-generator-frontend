"use client";

import React from "react";
import { HeaderPresenter } from "./presenter";
import { useHeaderHooks } from "./hooks/hooks";

export const Header: React.FC = () => {
  const { isMobile, isMenuOpen, toggleMenu } = useHeaderHooks();

  return (
    <HeaderPresenter
      isMobile={isMobile}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
    />
  );
};

export default Header;

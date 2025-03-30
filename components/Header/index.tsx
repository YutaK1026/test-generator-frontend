"use client";

import React from "react";
import { HeaderPresenter } from "./presenter";
import { useHeaderHooks, useLogout } from "./hooks/hooks";
import { useSession } from "next-auth/react";

export const Header: React.FC = () => {
  const { status } = useSession();
  const { isMobile, isMenuOpen, toggleMenu } = useHeaderHooks();

  return (
    <HeaderPresenter
      isMobile={isMobile}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      status={status}
      logout={useLogout}
    />
  );
};

export default Header;

"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export const useHeaderHooks = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMobile,
    isMenuOpen,
    toggleMenu,
  };
};

export const useLogout = () => {
  signOut();
};

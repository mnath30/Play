import { useState } from "react";

const useShowNavigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return { showMobileNav, setShowMobileNav };
};

export { useShowNavigation };

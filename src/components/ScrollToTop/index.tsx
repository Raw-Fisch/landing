import { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return children;
}

export default ScrollToTop;

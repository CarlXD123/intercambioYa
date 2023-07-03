import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return null;
}

export default ScrollToTopOnMount;

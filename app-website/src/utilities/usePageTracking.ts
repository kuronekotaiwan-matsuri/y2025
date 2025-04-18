import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const usePageTracking = (title: string) => {
  const location = useLocation();

  useEffect(() => {
    // タイトル変更
    document.title = title;

    // Google Analytics トラッキング
    if (window.gtag) {
      const pagePath = location.hash
        ? location.hash.replace(/^#/, '')  // HashRouter 対応
        : location.pathname + location.search;
      window.gtag("config", "G-PQ0WELTF8R", {
        page_path: pagePath,
        page_title: title,
        anonymize_ip: true,
      });
    }
  }, [location]);
};

export default usePageTracking;

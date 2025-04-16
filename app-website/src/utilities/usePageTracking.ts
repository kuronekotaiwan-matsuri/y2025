import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-PQ0WELTF8R", {
        page_path: location.pathname + location.search,
        anonymize_ip: true,
      });
    }
  }, [location]);
};

export default usePageTracking;

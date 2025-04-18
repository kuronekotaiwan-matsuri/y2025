import { ReactNode } from "react";
import usePageTracking from "../utilities/usePageTracking";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  usePageTracking(title);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};


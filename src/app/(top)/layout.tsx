"use client";

import { Header } from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Header />
      <main className={`h-full flex w-full flex-col`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

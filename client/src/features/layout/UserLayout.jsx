import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = ({ children, title, desc }) => {
  return (
    <div className="h-screen bg-background flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        {/* PAGE */}
        <main className="flex-1 min-h-0 p-6 flex flex-col">
          <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;

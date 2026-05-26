import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = ({ children, title, desc }) => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        {/* PAGE */}
        <main className="flex-1 overflow-y-auto p-6">
          {(title || desc) && (
            <div className="mb-6">
              {title && (
                <h1 className="text-3xl font-bold text-primary">{title}</h1>
              )}

              {desc && <p className="mt-1 text-muted">{desc}</p>}
            </div>
          )}

          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;

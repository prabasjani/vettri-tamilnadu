import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const OnboardHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="flex h-18 min-w-7xl items-center justify-between px-6 lg:px-10">
        <div>
          <h2 className="text-primary!">Vettri TamilNadu</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Help</Button>
          <Button variant="outline" onClick={() => navigate("/login")}>
            Login here
          </Button>
        </div>
      </div>
    </header>
  );
};

export default OnboardHeader;

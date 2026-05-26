import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@/components/ui/Button";
import { navItems } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import PopupModal from "@/components/ui/PopupModal";
import { TriangleAlert  } from "lucide-react";

const Sidebar = () => {
  const { handleLogout } = useAuth();
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <aside className="hidden lg:block w-72 border-r border-border bg-card">
      <div className="sticky top-0 flex h-screen flex-col">
        {/* LOGO */}
        <div className="px-6 py-5">
          <h3 className="tracking-wide text-primary! font-display!">
            VETTRI TamilNadu
          </h3>

          <p className="text-xs! text-text-muted! font-mono! mt-2!">
            Tamilaga Vettri Kazhagam
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-2 overflow-y-auto p-4 mt-5">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `
                group flex items-center rounded-xl px-4 py-3
                text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }
                `
              }
            >
              {item.title}
            </NavLink>
          ))}

          <Button
            fullWidth
            variant="outline"
            className="rounded-xl mt-1.5 border-primary hover:bg-primary/10! hover:text-primary text-sm! font-medium!"
            onClick={() => setLogoutModal(true)}
          >
            Logout
          </Button>

          <PopupModal
            open={logoutModal}
            type="danger"
            icon={<TriangleAlert  />}
            title="Logout"
            message="Are you sure you want to logout from your account?"
            confirmText="Logout"
            cancelText="Stay"
            onCancel={() => setLogoutModal(false)}
            onConfirm={handleLogout}
          />
        </nav>

        {/* BOTTOM CARD */}
        <div className="p-4">
          <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
            <h5 className="text-primary!">Digital Tamil Nadu</h5>

            <p className="mt-1! text-xs! leading-relaxed text-text-muted">
              Transparent governance platform for citizens and public services.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

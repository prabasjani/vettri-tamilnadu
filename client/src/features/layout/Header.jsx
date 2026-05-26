import ThemeToggle from "@/components/ui/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-20 items-center justify-between border-b border-border bg-surafce-hover/80 px-6 backdrop-blur-xl">
      {/* LEFT */}
      <div>
        <h3 className="font-display!">Welcome Back 👋</h3>

        <p className="mt-1! text-sm text-text-muted!">
          Manage complaints, services and government activities.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="hidden xl:flex">
          <input
            type="text"
            placeholder="Search services, complaints..."
            className="
              h-11 w-80 rounded-lg border border-border
              bg-background px-4 text-sm outline-none
              transition-all focus:border-primary
            "
          />
        </div>

        {/* NOTIFICATION */}
        <button
          className="
            relative flex h-11 w-11 items-center justify-center
            rounded-lg border border-border bg-background
            transition-all hover:border-primary hover:bg-primary/5
          "
        >
          🔔
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* THEME */}
        <ThemeToggle size="lg" />

        {/* PROFILE */}
        <button
          className="
            flex items-center gap-3 rounded-lg border
            border-border bg-background px-3 py-2
            transition-all cursor-pointer hover:border-primary
          "
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
            P
          </div>

          <div className="hidden text-left md:block">
            <h4 className="text-sm! font-semibold text-foreground">
              Prabanjan
            </h4>

            <p className="text-xs! text-text-muted">Salem District</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

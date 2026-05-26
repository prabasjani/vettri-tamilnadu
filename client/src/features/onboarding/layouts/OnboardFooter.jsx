const OnboardFooter = () => {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 lg:px-10 py-4">
      <div className="flex min-w-7xl flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" />
            256-bit SSL Encryption
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" />
            Secure Document Storage
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" />
            Privacy Protected
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="hover:text-primary cursor-pointer">
            Privacy Policy
          </button>
          <button className="hover:text-primary cursor-pointer">
            Terms & Conditions
          </button>
        </div>
      </div>
    </footer>
  );
};

export default OnboardFooter;

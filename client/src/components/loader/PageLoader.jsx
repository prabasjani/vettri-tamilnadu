const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-5">
        {/* LOGO / BRAND */}
        <img
          src="/logo.png"
          alt="TVKLogo"
          className="w-30 opacity-75 animate-pulse"
        />

        <div className="flex items-center gap-3 mt-4">
          <span className="h-4 w-4 animate-bounce rounded-full bg-primary [animation-delay:-0.32s]" />
          <span className="h-4 w-4 animate-bounce rounded-full bg-secondary [animation-delay:-0.16s]" />
          <span className="h-4 w-4 animate-bounce rounded-full bg-primary" />
        </div>

        {/* TEXT */}
        <p className="tracking-wide text-base! text-text-muted">
          Connecting TVK Services...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;

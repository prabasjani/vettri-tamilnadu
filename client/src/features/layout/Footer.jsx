const Footer = () => {
  return (
    <footer className="h-10 border-t border-border bg-surface px-6 flex items-center justify-between">
      {/* LEFT */}
      <p className="text-xs! text-text-muted! font-mono!">
        © 2026 VETTRI Tamil Nadu | Tamilaga Vettri Kazhagam
      </p>

      {/* CENTER */}
      <p className="hidden md:block text-xs! text-text-muted! font-mono!">
        Transparent Digital Governance Platform
      </p>

      {/* RIGHT */}
      <p className="text-xs! text-text-muted! font-mono!">
        Designed & Developed by{" "}
        <span className="font-semibold text-primary">Prabanjan</span>
      </p>
    </footer>
  );
};

export default Footer;

import cn from "@/utils/cn";

export default function Button({
  children,
  variant = "primary",
  size = "sm",
  fullWidth = false,
  disabled = false,
  loading = false,
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white/90 hover:opacity-90",
    outline: "border border-border bg-transparent hover:bg-surface-hover",
    ghost: "hover:bg-surface text-foreground",
    danger: "bg-danger text-white",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm rounded-md",
    md: "py-2.5 px-5 text-base rounded-md",
    lg: "py-3 px-6 text-lg rounded-lg",
    xl: "py-3 px-7 text-xl rounded-xl",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "font-medium transition-all duration-200 inline-flex items-center justify-center cursor-pointer",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        disabled && "opacity-50 pointer-events-none",
        className,
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

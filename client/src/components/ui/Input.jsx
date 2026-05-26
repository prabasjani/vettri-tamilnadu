import cn from "@/utils/cn";

export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        className={cn(
          "h-11 rounded-lg border border-border bg-surface px-4 outline-none transition-all",
          "focus:border-primary",
          error && "border-danger",
          className,
        )}
        {...props}
      />

      {error && <p className="text-xs! text-danger!">{error}</p>}
    </div>
  );
}

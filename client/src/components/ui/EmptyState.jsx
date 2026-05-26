import { Inbox } from "lucide-react";

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display right now.",
  actionLabel,
  action,
  icon,
}) => {
  const Icon = icon || Inbox;

  return (
    <div className="flex min-h-100 items-center justify-center px-6">
      <div className="flex w-full max-w-md flex-col items-center rounded-xl border border-border bg-surface-alt/75 p-8 text-center shadow-sm">
        {/* ICON */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>

        {/* TITLE */}
        <h2 className="mt-5! text-text-primary!">{title}</h2>

        {/* DESCRIPTION */}
        <p className="mt-3! text-sm leading-relaxed text-text-secondary!">
          {description}
        </p>

        {/* ACTION */}
        {action && actionLabel && (
          <button
            onClick={action}
            className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;

// Usage Example

{
  /* 
  <EmptyState
    title="No Complaints Yet"
    description="Start by creating your first complaint."
    actionLabel="Create Complaint"
    action={() => navigate("/complaints/create")}
  />

  <EmptyState
    icon={Users}
    title="No Members Found"
    description="No members are available in this area."
  />
*/
}

import Button from "@/components/ui/Button";

export default function EmptyComplaints({ handleCreateComplaint = null }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-linear-to-br from-primary/8 via-transparent to-secondary/10 p-10 text-center">
      <h3>No complaints yet</h3>

      <p className="mt-2! text-text-muted!">
        You haven't raised any complaints yet. Start by reporting an issue in
        your community.
      </p>

      {handleCreateComplaint && (
        <Button className="mt-6" onClick={handleCreateComplaint}>
          Raise Complaint
        </Button>
      )}
    </div>
  );
}

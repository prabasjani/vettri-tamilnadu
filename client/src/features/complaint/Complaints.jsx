import React from "react";
import UserLayout from "../layout/UserLayout";
import ComplaintCard from "./components/ComplaintCard";
import EmptyComplaints from "./components/EmptyComplaints";
import Button from "@/components/ui/Button";
import useComplaints from "@/hooks/complaints/useComplaints";

const Complaints = () => {
  const { complaints, loading, summary, handleSupport, handleCreateComplaint } =
    useComplaints();

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className=" flex items-end justify-between">
          <div className="">
            <h2 className="mb-2!">Complaints</h2>
            <p>
              Track the complaints you have submitted and monitor their current
              status. Raise new issues to help improve your community.
            </p>
          </div>
          <Button onClick={handleCreateComplaint}>Raise Complaint</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs!">Total Complaints</p>

            <h3 className="mt-2!">{summary.total}</h3>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs!">Pending</p>

            <h3 className="mt-2!">{summary.pending}</h3>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs!">Resolved</p>

            <h3 className="mt-2!">{summary.resolved}</h3>
          </div>
        </div>

        {loading && (
          <div className="text-center py-10">Loading complaints...</div>
        )}

        {!loading && complaints.length === 0 && (
          <EmptyComplaints handleCreateComplaint={handleCreateComplaint} />
        )}

        {!loading && complaints.length > 0 && (
          <div className="grid gap-4">
            {complaints.map((complaint) => (
              <ComplaintCard
                key={complaint._id}
                complaint={complaint}
                handleSupport={handleSupport}
              />
            ))}
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default Complaints;

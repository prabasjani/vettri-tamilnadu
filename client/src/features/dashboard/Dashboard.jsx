import React from "react";
import UserLayout from "../layout/UserLayout";
import QuickActionSlider from "./QuickActionSlider";
import useComplaints from "@/hooks/complaints/useComplaints";
import useCommunityFeed from "@/hooks/complaints/useCommunityFeed";
import EmptyComplaints from "../complaint/components/EmptyComplaints";
import ComplaintCard from "../complaint/components/ComplaintCard";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { summary } = useComplaints();
  const { loading, complaints, handleSupport } = useCommunityFeed();
  const navigate = useNavigate();
  return (
    <UserLayout>
      <QuickActionSlider />

      <div className="my-4 pb-6 border-b border-surface-hover">
        <div className="">
          <h3 className="font-display!">Your Complaint Overview</h3>
          <p className="mt-1.5!">
            Track the status and progress of complaints you have raised.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
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
      </div>

      <div className="">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-display!">Community Highlights</h3>
            <p className="mt-1.5!">
              Stay informed about recent issues and concerns raised in your
              constituency.
            </p>
          </div>

          <Button onClick={() => navigate("/community")}>View All →</Button>
        </div>

        {!loading && complaints.length === 0 && <EmptyComplaints />}

        {!loading && complaints.length > 0 && (
          <div className="grid gap-4">
            {complaints
              .map((complaint) => (
                <ComplaintCard
                  key={complaint._id}
                  complaint={complaint}
                  handleSupport={handleSupport}
                />
              ))
              .slice(0, 3)}
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default Dashboard;

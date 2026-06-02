import React from "react";
import UserLayout from "../layout/UserLayout";
import useCommunityFeed from "@/hooks/complaints/useCommunityFeed";
import EmptyComplaints from "../complaint/components/EmptyComplaints";
import ComplaintCard from "../complaint/components/ComplaintCard";

const Community = () => {
  const { loading, complaints, handleSupport } = useCommunityFeed();
  return (
    <UserLayout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className=" flex items-end justify-between">
          <div className="">
            <h2 className="mb-2!">Community Issues</h2>
            <p>
              Explore issues raised by fellow citizens and support the concerns
              that matter most to your community.
            </p>
          </div>
        </div>

        {!loading && complaints.length === 0 && <EmptyComplaints />}

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

export default Community;

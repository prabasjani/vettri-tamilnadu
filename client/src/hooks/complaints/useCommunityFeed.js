import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getCommunityFeed,
  supportComplaint,
} from "@/services/api/complaint.api";

export default function useCommunityFeed() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCommunityFeed = async () => {
    try {
      setLoading(true);
      const response = await getCommunityFeed();
      setComplaints(response.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSupport = async (complaintId) => {
    try {
      const response = await supportComplaint(complaintId);
      const { supportCount, supported } = response.data.data;

      setComplaints((prev) =>
        prev.map((complaint) =>
          complaint?.complaintId === complaintId
            ? {
                ...complaint,
                supportCount,
                supported,
              }
            : complaint,
        ),
      );
      toast.success(response.data?.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCommunityFeed();
  }, []);

  return {
    complaints,
    loading,
    handleSupport,
  };
}

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
  getMyComplaints,
  supportComplaint,
} from "@/services/api/complaint.api";
import { useAuthContext } from "@/context/AuthContext";

export default function useComplaints() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadComplaints = async () => {
    try {
      setLoading(true);
      const response = await getMyComplaints();
      setComplaints(response.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const summary = useMemo(() => {
    return complaints.reduce(
      (acc, complaint) => {
        acc.total += 1;

        if (complaint.status === "PENDING") {
          acc.pending += 1;
        }

        if (complaint.status === "RESOLVED") {
          acc.resolved += 1;
        }

        return acc;
      },
      {
        total: 0,
        pending: 0,
        resolved: 0,
      },
    );
  }, [complaints]);

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

  const handleCreateComplaint = () => {
    navigate("/complaints/create");
  };

  return {
    complaints,
    loading,
    summary,
    handleSupport,
    handleCreateComplaint,
  };
}

import { Link } from "react-router-dom";
import { Calendar, ThumbsUp } from "lucide-react";

import ComplaintStatusBadge from "./ComplaintStatusBadge";
import { formatDate } from "@/utils/date";

const ComplaintCard = ({ complaint, handleSupport }) => {
  return (
    <div className="rounded-xl border border-border bg-linear-to-br from-primary/8 via-transparent to-secondary/10 p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h4 className="line-clamp-2! font-primary!">{complaint.title}</h4>

          <ComplaintStatusBadge status={complaint.status} />
        </div>

        <p className="line-clamp-2! text-sm text-gray-600">
          {complaint.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            <span
              className={`flex items-center gap-2 text-sm cursor-pointer ${
                complaint.supported ? "text-primary" : "text-gray-500"
              }`}
              onClick={() => handleSupport(complaint.complaintId)}
            >
              <ThumbsUp size={16} />
              {complaint.supportCount || 0} Supports
            </span>

            <span className="h-1 w-1 rounded-full bg-text-muted" />

            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Calendar size={16} />
              <span>{formatDate(complaint.createdAt)}</span>
            </div>
          </div>

          <Link
            // to={`/complaints/${complaint.complaintId}`}
            className="text-sm font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard;

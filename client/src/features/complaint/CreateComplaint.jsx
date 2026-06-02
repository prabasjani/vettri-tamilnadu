import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { COMPLAINT_CATEGORY_OPTIONS } from "@/constants";
import useCreateComplaint from "@/hooks/complaints/useCreateComplaint";
import UserLayout from "../layout/UserLayout";
import { useNavigate } from "react-router-dom";

export default function CreateComplaint() {
  const { values, errors, loading, handleChange, handleSubmit } =
    useCreateComplaint();
  const navigate = useNavigate();
  return (
    <UserLayout>
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="mb-2!">Raise a Complaint</h2>
          <p className="text-text-muted">
            Report issues affecting your community, such as roads, water supply,
            sanitation, public safety, and other local concerns.
          </p>
        </div>
        <Button onClick={() => navigate(-1)}>Back to Complaints</Button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Complaint Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          error={errors.title}
          placeholder="Enter complaint title"
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Category</label>

          <select
            name="category"
            value={values.category}
            onChange={handleChange}
            className="h-11 flex items-center rounded-lg border border-border bg-surface px-4 outline-none focus:border-primary"
          >
            <option value="">Select Category</option>

            {COMPLAINT_CATEGORY_OPTIONS.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="text-xs! text-danger!">{errors.category}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Description</label>

          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            rows={6}
            placeholder="Describe the issue in detail"
            className="rounded-lg border border-border bg-surface p-4 outline-none focus:border-primary"
          />

          {errors.description && (
            <p className="text-xs! text-danger!">{errors.description}</p>
          )}
        </div>

        <Button type="submit" size="md" loading={loading} fullWidth>
          Submit Complaint
        </Button>
      </form>
    </UserLayout>
  );
}

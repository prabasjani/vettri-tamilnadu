import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "@/services/api/complaint.api";

export default function useCreateComplaint() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!values.title.trim()) {
      newErrors.title = "Complaint title is required";
    }

    if (!values.category) {
      newErrors.category = "Category is required";
    }

    if (!values.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await createComplaint(values);
      navigate("/complaints");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
}

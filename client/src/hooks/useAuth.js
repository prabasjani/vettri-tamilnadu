import { useState } from "react";
import { loginUser, logoutUser } from "@/services/api/auth.api";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { login, logout: clearAuth } = useAuthContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await loginUser(formData);
      login(response.data.user);
      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong! Try Later!",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutUser();
      clearAuth();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
    handleChange,
    handleLogout,
    formData,
    setFormData,
  };
};

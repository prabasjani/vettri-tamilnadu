import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import {
  registerUser,
  updateIdentity,
  updateInterests,
  updateLocation,
  updatePersonalInfo,
} from "@/services/api/onboarding.api";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",

  fullname: "",
  gender: "",
  dob: "",

  mobile: "",
  state: "Tamil Nadu",
  district: "",
  constituency: "",
  address: "",
  pincode: "",

  identityType: "",
  identityNumber: "",

  interests: [],
};

const useOnboarding = () => {
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(() => {
    return Number(localStorage.getItem("onboardingStep")) || 1;
  });

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [showCompletionModal, setShowCompletionModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("onboardingStep", currentStep);
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));

    setErrors("");
  };

  // VALIDATIONS
  // STEP 1
  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // STEP 2
  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    // if (!formData.profilePicture) {
    //   newErrors.profilePicture = "Profile picture is required";
    // }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // STEP 3
  const validateStep3 = () => {
    const newErrors = {};

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = "Enter valid mobile number";
    }

    if (!formData.district) {
      newErrors.district = "Please select district";
    }

    if (!formData.constituency) {
      newErrors.constituency = "Please select constituency";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (formData.pincode.length !== 6) {
      newErrors.pincode = "Enter valid pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // STEP 4
  const validateStep4 = () => {
    const newErrors = {};

    if (!formData.identityType) {
      newErrors.identityType = "Please select identity type";
    }

    if (!formData.identityNumber.trim()) {
      newErrors.identityNumber = "Identity number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // STEP 5
  const validateStep5 = () => {
    if (formData.interests.length === 0) {
      setError("Please select at least one interest");

      return false;
    }

    setShowCompletionModal(true);
    return true;
  };

  // VALIDATION MAP
  const stepValidations = {
    1: validateStep1,
    2: validateStep2,
    3: validateStep3,
    4: validateStep4,
    5: validateStep5,
  };

  // STEP ACTIONS MAP
  const stepActions = {
    1: async () => {
      const response = await registerUser({
        email: formData.email,
        password: formData.password,
      });

      login(response.data.user);
    },

    2: async () => {
      await updatePersonalInfo({
        fullname: formData.fullname,
        gender: formData.gender,
        dob: formData.dob,
      });
    },

    3: async () => {
      await updateLocation({
        mobile: formData.mobile,
        state: formData.state,
        district: formData.district,
        constituency: formData.constituency,
        address: formData.address,
        pincode: formData.pincode,
      });
    },

    4: async () => {
      await updateIdentity({
        identityType: formData.identityType,
        identityNumber: formData.identityNumber,
      });
    },

    5: async () => {
      await updateInterests({
        interests: formData.interests,
      });

      toast.success("Onboarding completed");

      localStorage.removeItem("onboardingStep");
    },
  };

  const handleNext = async () => {
    const validate = stepValidations[currentStep];

    if (validate && !validate()) {
      return;
    }

    try {
      setLoading(true);

      await stepActions[currentStep]();

      if (currentStep < 5) {
        setCurrentStep((prev) => prev + 1);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    currentStep,
    formData,
    setFormData,
    handleChange,
    toggleInterest,
    errors,
    setErrors,
    handleNext,
    showCompletionModal,
  };
};

export default useOnboarding;

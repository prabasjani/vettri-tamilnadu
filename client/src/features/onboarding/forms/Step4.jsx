import { useState } from "react";
import Input from "@/components/ui/Input";
import InfoCard from "../components/InfoCard";
import { capitalizeWords } from "@/utils";

const identityTypes = ["aadhaar", "voterId", "pan"];

const Step4 = ({ formData, setFormData, handleChange, errors, setErrors }) => {
  const handleUppercase = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div>
      <div className="space-y-6">
        {/* IDENTITY TYPE */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Identity Type</label>

          <div className="grid grid-cols-3 gap-3 mt-2!">
            {identityTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    identityType: type,
                  }))
                }
                className={`h-11 rounded-lg border text-sm font-medium transition-all
                  ${
                    formData.identityType === type
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-background hover:border-primary"
                  }
                  ${errors.identityType ? "animate-shake border-danger" : ""}`}
              >
                {capitalizeWords(type)}
              </button>
            ))}
          </div>

          {errors.identityType && (
            <p className="text-xs! text-danger!">{errors.identityType}</p>
          )}
        </div>

        {/* IDENTITY NUMBER */}
        <Input
          label="Identity Number"
          name="identityNumber"
          placeholder={`Enter your ${
            formData.identityType || "identity"
          } number`}
          value={formData.identityNumber}
          onChange={handleUppercase}
          error={errors.identityNumber}
          className={
            errors.identityNumber ? "animate-shake focus:border-danger" : ""
          }
        />
      </div>

      {/* INFO CARD */}
      <InfoCard
        title="Identity Verification"
        desc="Your identity details are securely encrypted and used only for
          verification and member authenticity purposes."
      />
    </div>
  );
};

export default Step4;

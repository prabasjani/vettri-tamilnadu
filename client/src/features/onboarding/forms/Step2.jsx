import { useState } from "react";
import Input from "@/components/ui/Input";
import InfoCard from "../components/InfoCard";
import { capitalizeWords } from "@/utils";

const Step2 = ({ formData, setFormData, handleChange, errors }) => {
  // const [preview, setPreview] = useState(null);
  return (
    <div>
      <div className="space-y-6">
        {/* PROFILE UPLOAD */}
        {/* <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div
              className={`flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 bg-muted
              ${
                errors.profilePicture
                  ? "border-danger animate-shake"
                  : "border-border"
              }`}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm text-muted-foreground">Upload</span>
              )}
            </div>

            <label className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-sm text-white shadow-md">
              +
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {errors.profilePicture && (
            <p className="mt-2 text-xs text-danger">{errors.profilePicture}</p>
          )}

          <p className="mt-3 text-sm text-muted-foreground">
            Upload your profile picture
          </p>
        </div> */}

        {/* FULL NAME */}
        <Input
          label="Full Name"
          name="fullname"
          placeholder="Enter your full name"
          value={formData.fullname}
          onChange={handleChange}
          error={errors.fullname}
          className={errors.fullname ? "animate-shake focus:border-danger" : ""}
        />

        {/* GENDER */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Gender</label>

          <div className="grid grid-cols-3 gap-3">
            {["male", "female", "other"].map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    gender,
                  }))
                }
                className={`h-11 rounded-lg border text-sm font-medium transition-all
                  ${
                    formData.gender === gender
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-background hover:border-primary"
                  }
                  ${errors.gender ? "animate-shake border-danger" : ""}`}
              >
                {capitalizeWords(gender)}
              </button>
            ))}
          </div>

          {errors.gender && (
            <p className="text-xs text-danger">{errors.gender}</p>
          )}
        </div>

        {/* DATE OF BIRTH */}
        <Input
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          error={errors.dob}
          className={errors.dob ? "animate-shake focus:border-danger" : ""}
        />
      </div>

      {/* INFO CARD */}
      <InfoCard
        title="Personal Information Privacy"
        desc=" Your personal details are securely encrypted and only used for member
          verification purposes."
      />
    </div>
  );
};

export default Step2;

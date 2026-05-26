import { useState } from "react";
import { tamilNaduData } from "@/features/onboarding/data/tnData";
import Input from "@/components/ui/Input";
import InfoCard from "../components/InfoCard";

const districts = Object.keys(tamilNaduData);

const Step3 = ({ formData, setFormData, handleChange, errors, setErrors }) => {
  // HANDLE DISTRICT CHANGE
  const handleDistrictChange = (e) => {
    const district = e.target.value;

    setFormData((prev) => ({
      ...prev,
      district,
      constituency: "",
    }));

    if (errors.district) {
      setErrors((prev) => ({
        ...prev,
        district: "",
      }));
    }
  };

  // CONSTITUENCIES
  const constituencies = tamilNaduData[formData.district] || [];

  return (
    <div>
      <div className="space-y-6">
        {/* MOBILE */}
        <Input
          label="Mobile Number"
          type="tel"
          name="mobile"
          maxLength={10}
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          error={errors.mobile}
          className={errors.mobile ? "animate-shake focus:border-danger" : ""}
        />

        {/* STATE */}
        <div className="space-y-2">
          <label className="text-sm font-medium">State</label>

          <select
            disabled
            name="state"
            value={formData.state}
            className="h-11 w-full cursor-not-allowed rounded-lg border border-border bg-muted px-4 text-muted-foreground outline-none flex items-center"
          >
            <option>Tamil Nadu</option>
          </select>

          <p className="text-xs! text-muted-foreground">
            Currently onboarding is available only for Tamil Nadu.
          </p>
        </div>

        {/* DISTRICT */}
        <div className="space-y-2">
          <label className="text-sm font-medium">District</label>

          <select
            name="district"
            value={formData.district}
            onChange={handleDistrictChange}
            className={`h-11 w-full rounded-lg border bg-background px-4 outline-none transition-all flex items-center
              ${
                errors.district
                  ? "animate-shake border-danger"
                  : "border-border focus:border-primary"
              }`}
          >
            <option value="">Select district</option>

            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          {errors.district && (
            <p className="text-xs! text-danger!">{errors.district}</p>
          )}
        </div>

        {/* CONSTITUENCY */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Constituency</label>

          <select
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            disabled={!formData.district}
            className={`h-11 w-full rounded-lg border bg-background px-4 outline-none transition-all flex items-center
              ${
                errors.constituency
                  ? "animate-shake border-danger"
                  : "border-border focus:border-primary"
              }
              ${!formData.district ? "cursor-not-allowed opacity-60" : ""}`}
          >
            <option value="">
              {formData.district
                ? "Select constituency"
                : "Choose district first"}
            </option>

            {constituencies.map((constituency) => (
              <option key={constituency} value={constituency}>
                {constituency}
              </option>
            ))}
          </select>

          {errors.constituency && (
            <p className="text-xs! text-danger!">{errors.constituency}</p>
          )}
        </div>

        {/* ADDRESS */}
        <Input
          label="Address"
          name="address"
          placeholder="Enter your full address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
          className={`min-h-28 resize-none py-3 ${
            errors.address ? "animate-shake focus:border-danger" : ""
          }`}
        />

        {/* PINCODE */}
        <Input
          label="Pincode"
          type="text"
          name="pincode"
          maxLength={6}
          placeholder="Enter pincode"
          value={formData.pincode}
          onChange={handleChange}
          error={errors.pincode}
          className={errors.pincode ? "animate-shake focus:border-danger" : ""}
        />
      </div>

      {/* INFO CARD */}
      <InfoCard
        title="Constituency Mapping"
        desc="Your district and constituency help us connect you with local TVK
          activities, announcements, and volunteer opportunities."
      />
    </div>
  );
};

export default Step3;

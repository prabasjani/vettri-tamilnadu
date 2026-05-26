import { useState } from "react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import InfoCard from "../components/InfoCard";

const Step1 = ({ formData, handleChange, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="my-5">
      {/* FORM */}
      <div className="space-y-6">
        {/* EMAIL */}
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          className={errors.email ? "animate-shake focus:border-danger" : ""}
        />

        {/* PASSWORD */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Password</label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            className={
              errors.password ? "animate-shake focus:border-danger" : ""
            }
          />

          {/* PASSWORD STRENGTH */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <div
                className={`h-1 flex-1 rounded-full ${
                  formData.password.length >= 2 ? "bg-green-500" : "bg-muted"
                }`}
              />

              <div
                className={`h-1 flex-1 rounded-full ${
                  formData.password.length >= 4 ? "bg-green-500" : "bg-muted"
                }`}
              />

              <div
                className={`h-1 flex-1 rounded-full ${
                  formData.password.length >= 6 ? "bg-green-500" : "bg-muted"
                }`}
              />

              <div
                className={`h-1 flex-1 rounded-full ${
                  formData.password.length >= 8 ? "bg-green-500" : "bg-muted"
                }`}
              />
            </div>

            <p className="text-xs! text-muted-foreground">
              Use at least 8 characters with uppercase, lowercase, numbers, and
              symbols.
            </p>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <Input
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          className={
            errors.confirmPassword ? "animate-shake focus:border-danger" : ""
          }
        />
      </div>

      {/* SECURITY INFO */}
      <InfoCard
        title="Secure Account Protection"
        desc="Your credentials are encrypted and securely protected using modern
          authentication standards."
      />
    </div>
  );
};

export default Step1;

import { useState } from "react";
import CompletionModal from "../components/CompletionModal";
import InfoCard from "../components/InfoCard";
import { INTERESTS } from "@/constants";

const Step5 = ({ formData, toggleInterest, errors, showCompletionModal }) => {
  return (
    <div>
      {/* TITLE */}
      <div className="mb-6">
        <h4>Select Your Interests</h4>

        <p className="mt-1! text-sm! text-muted-foreground!">
          Choose the areas you care about most. This helps us personalize
          updates and local initiatives.
        </p>
      </div>

      {/* INTERESTS */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {INTERESTS.map((interest) => {
          const isSelected = formData.interests.includes(interest);

          return (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`rounded-lg border px-4 py-3 text-sm font-medium capitalize transition-all cursor-pointer
                ${
                  isSelected
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background hover:border-primary"
                }
                ${errors.interests ? "animate-shake" : ""}`}
            >
              {interest.replaceAll("_", " ")}
            </button>
          );
        })}
      </div>

      {/* ERROR */}
      {errors.interests && (
        <p className="mt-3 text-xs! text-danger!">{errors.interests}</p>
      )}

      {/* SUMMARY */}
      <InfoCard
        title="Final Step Completed"
        desc=" You’re almost done. After submission, your onboarding details will be
          securely saved and verified."
      />

      {showCompletionModal && <CompletionModal />}
    </div>
  );
};

export default Step5;

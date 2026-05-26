import { useState } from "react";
import onboardingSteps from "./data/onboardingSteps";
import OnboardLayout from "./layouts/OnboardLayout";
import Button from "@/components/ui/Button";
import useOnboarding from "@/hooks/useOnboarding";
import Step1 from "./forms/Step1";
import Step2 from "./forms/Step2";
import Step3 from "./forms/Step3";
import Step4 from "./forms/Step4";
import Step5 from "./forms/Step5";

const Onboarding = () => {
  const {
    currentStep,
    formData,
    setFormData,
    handleChange,
    toggleInterest,
    errors,
    setErrors,
    handleNext,
    showCompletionModal,
  } = useOnboarding();

  const currentStepData = onboardingSteps[currentStep - 1];

  return (
    <OnboardLayout
      currentStep={currentStep}
      totalSteps={onboardingSteps.length}
      title={currentStepData.title}
      desc={currentStepData.desc}
    >
      {currentStep === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {currentStep === 4 && (
        <Step4
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 5 && (
        <Step5
          formData={formData}
          toggleInterest={toggleInterest}
          errors={errors}
          showCompletionModal={showCompletionModal}
        />
      )}

      <div className="mt-8 flex items-center justify-end">
        {/* <button onClick={prevStep}>Previous</button> */}

        <Button size="lg" onClick={handleNext}>
          {currentStep === onboardingSteps.length
            ? "Complete Onboarding"
            : "Continue"}
        </Button>
      </div>
    </OnboardLayout>
  );
};

export default Onboarding;

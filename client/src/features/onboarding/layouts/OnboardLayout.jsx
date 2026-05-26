import OnboardHeader from "./OnboardHeader";
import OnboardSidebar from "./OnboardSidebar";
import OnboardFooter from "./OnboardFooter";
import StepHeader from "../components/StepHeader";
import ProgressBar from "../components/ProgressBar";

const OnboardLayout = ({ title, desc, currentStep, totalSteps, children }) => {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <OnboardHeader />

      <div className="flex flex-1 overflow-hidden">
        <OnboardSidebar currentStep={currentStep} />

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Fixed Top Section */}
          <div className="px-4 py-8 md:px-10 border-b border-border shrink-0">
            <StepHeader
              title={title}
              desc={desc}
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>

          {/* Scrollable Content Only */}
          <div className="flex-1 overflow-y-auto p-4 md:px-10">{children}</div>
        </main>
      </div>

      <OnboardFooter />
    </div>
  );
};

export default OnboardLayout;

import { NavLink } from "react-router-dom";

import onboardingSteps from "@/features/onboarding/data/onboardingSteps";

const OnboardSidebar = ({ currentStep }) => {
  return (
    <aside className="hidden w-80 border-r border-border bg-muted/30 p-6 lg:block">
      <div className="sticky top-10">
        <div className="mb-8">
          <h4 className="font-mono font-semibold mb-2.5!">Registration</h4>

          <p>Complete all steps to continue</p>
        </div>

        <div className="space-y-4">
          {onboardingSteps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;

            return (
              <div
                key={step.id}
                className={`flex gap-4 rounded-lg border p-2.5 transition-all
                  ${
                    isActive
                      ? "border-primary bg-primary/5"
                      : "border-border bg-surface"
                  }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold
                    ${
                      isCompleted
                        ? "bg-secondary text-white"
                        : isActive
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                >
                  {isCompleted ? "✓" : step.id}
                </div>

                <div>
                  <h5
                    className={`${isCompleted ? "text-text-primary!" : isActive ? "text-text-secondary!" : "text-text-muted!"}`}
                  >
                    {step.title}
                  </h5>
                  <p className="text-xs! mt-1.5!">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default OnboardSidebar;

const StepHeader = ({ title, desc, currentStep, totalSteps }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="">
        <h3 className="font-display!">{title}</h3>
        <p className="mt-2! text-xs! font-mono">{desc}</p>
      </div>

      <span className="text-sm font-medium text-text-secondary">
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
};

export default StepHeader;

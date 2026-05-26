const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center gap-3">
      {/* Progress Track */}
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-alt">
        <div
          className="h-full rounded-full bg-secondary transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="min-w-11.5 text-right text-sm font-bold text-primary-light">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default ProgressBar;

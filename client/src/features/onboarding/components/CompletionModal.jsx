import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const CompletionModal = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-modal">
        {/* SUCCESS ICON */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
            ✓
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 text-center">
          <h2>Onboarding Completed</h2>

          <p className="mt-3!">
            Your TVK member onboarding has been completed successfully. You can
            now access your dashboard and explore your member features.
          </p>
        </div>

        {/* INFO CARD */}
        <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">
          <p>
            Your information is securely encrypted and verified using modern
            authentication and data protection standards.
          </p>
        </div>

        {/* ACTION */}
        <div className="mt-8">
          <Button
            fullWidth
            size="md"
            onClick={() =>
              navigate("/dashboard", {
                replace: true,
              })
            }
          >
            Enter Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;

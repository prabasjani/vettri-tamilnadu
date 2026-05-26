import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-dvh bg-background text-text-primary">
      <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div>
            <h2 className="text-primary!">Vettri TamilNadu</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/login")}
            >
              Login here
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-secondary/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-10 lg:py-0 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 shadow-xs">
              <span className="text-xs font-medium font-mono text-text-secondary">
                Citizen First Platform for Tamil Nadu
              </span>
            </div>

            <h1 className="max-w-3xl">
              Connecting Citizens, Governance, and Public Voice.
            </h1>

            <p className="mt-2.5! max-w-2xl leading-7!">
              A modern civic platform where every citizen can raise complaints,
              participate in initiatives, contribute ideas, and engage with
              governance transparently.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                className="shadow-md transition hover:-translate-y-0.5 hover:opacity-95"
                onClick={() => navigate("/features")}
              >
                Get Started
              </Button>

              <Button variant="outline" size="lg">
                Join Now
              </Button>
            </div>

            <div className="hidden mt-14 md:grid gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl! text-primary!">1Cr+</h3>

                <p className="mt-1.5!">Citizens Connected</p>
              </div>

              <div>
                <h3 className="text-3xl! text-primary!">5L+</h3>

                <p className="mt-1.5!">Complaints Resolved</p>
              </div>

              <div>
                <h3 className="text-3xl! text-primary!">100%</h3>

                <p className="mt-1.5!">Transparent Tracking</p>
              </div>
            </div>
          </div>

          <div className="hidden relative overflow-hidden mt-10 md:flex justify-center">
            <img src="/leader.png" alt="" className="opacity-75 w-125" />

            <div className="hidden md:block absolute bottom-25 left-50 z-10 opacity-75">
              <h1>Vettri TamilNadu</h1>
              <p>Public grievance and citizen governance platform</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

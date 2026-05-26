import ThemeToggle from "@/components/ui/ThemeToggle";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { formData, setFormData, handleChange, handleSubmit } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/8 via-transparent to-secondary/10">
      {/* HEADER */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <h3 className="font-display text-primary!">Vettri TamilNadu</h3>

          <ThemeToggle size="sm" />
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto grid min-h-[calc(100vh-65px)] max-w-7xl lg:grid-cols-2">
        {/* LEFT */}
        <section className="hidden px-10 py-16 lg:flex lg:flex-col lg:justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-mono font-medium text-primary">
            Tamil Nadu Digital Governance
          </span>

          <h2 className="max-w-md">
            Empowering citizens through digital governance.
          </h2>

          <p className="mt-6! max-w-lg text-lg! leading-relaxed! text-text-secondary!">
            Raise complaints, track public services, access government schemes,
            and stay connected with your constituency.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-primary!">24/7</h3>

              <p className="mt-1!">Service Access</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-primary!">100%</h3>

              <p className="mt-1!">Transparent Tracking</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-primary!">TN</h3>

              <p className="mt-1!">Statewide Access</p>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <section className="flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2>Welcome Back</h2>

              <p className="mt-2! text-text-muted">
                Login to continue to your dashboard.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="prabanjan@gmail.com"
                label="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                type="password"
                name="password"
                placeholder="***************"
                label="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="accent-primary" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-primary"
                >
                  Forgot password?
                </button>
              </div>

              <Button fullWidth size="md" type="submit">
                Login
              </Button>
            </form>

            {/* DIVIDER */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />

              <span className="text-sm text-muted-foreground">OR</span>

              <div className="h-px flex-1 bg-border" />
            </div>

            {/* GOOGLE */}
            <Button
              variant="outline"
              size="md"
              fullWidth
              onClick={() => toast.info("This feature will implement soon!")}
            >
              Continue with Google
            </Button>

            {/* SIGNUP */}
            <p className="mt-6! text-center! text-sm text-text-muted">
              Don&apos;t have an account?{" "}
              <button
                className="font-semibold text-primary cursor-pointer"
                onClick={() => navigate("/")}
              >
                Create account
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

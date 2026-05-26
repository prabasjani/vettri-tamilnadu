import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { useAuthContext } from "@/context/AuthContext";

const NotFound = () => {
  const { isAuthenticated } = useAuthContext();
  const goHomePath = isAuthenticated ? "/dashboard" : "/";
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-primary/8 via-transparent to-secondary/10 px-6">
      <section className="flex w-full max-w-xl flex-col items-center text-center">
        {/* ERROR CODE */}
        <h1 className="text-8xl! font-black tracking-tight text-primary!">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-4! text-3xl! font-bold!">Page Not Found</h2>

        {/* DESCRIPTION */}
        <p className="mt-3! max-w-md leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to={goHomePath}>
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
          >
            Go Back
          </Button>
        </div>

        {/* DECORATION */}
        <div className="mt-16 h-1 w-32 rounded-full bg-linear-to-r from-primary to-secondary opacity-80" />
      </section>
    </main>
  );
};

export default NotFound;

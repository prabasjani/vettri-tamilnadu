import { useEffect, useState } from "react";
import { features } from "@/constants";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative overflow-hidden min-h-screen bg-linear-to-br from-primary/8 via-transparent to-secondary/10">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div>
            <h2 className="text-primary!">Vettri TamilNadu</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate("/onboarding")}
            >
              Continue
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center gap-x-10 mt-20 px-10">
        {/* HEADING */}
        <div className="relative overflow-hidden">
          <div className="">
            <img
              src="/featureBanner.png"
              alt="Banner"
              className="w-250 opacity-75"
            />
          </div>
          <div className="max-w-2xl text-center absolute bottom-10">
            <h2 className="mt-5! font-black leading-tight md:text-5xl">
              Built For Modern Public Service
            </h2>

            <p className="mt-2.5! text-base! leading-relaxed">
              A powerful platform designed for complaint management, member
              engagement, and transparent governance.
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
        </div>

        {/* SLIDER */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex min-w-full flex-col px-8 pt-10 pb-20 md:px-16"
              >
                {/* TITLE */}
                <h2 className="mt-8!">{feature.title}</h2>

                {/* DESCRIPTION */}
                <p className="mt-5! max-w-2xl leading-relaxed md:text-lg">
                  {feature.desc}
                </p>

                <div className="mt-6 flex w-full max-w-xl flex-col gap-3">
                  {feature.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="leading-relaxed md:text-base!">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* INDICATORS */}
          <div className="mt-6 absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-primary"
                    : "w-3 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

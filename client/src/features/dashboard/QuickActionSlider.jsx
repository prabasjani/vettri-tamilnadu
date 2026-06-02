import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import { QUICK_ACTIONS } from "@/constants";

const QuickActionSlider = () => {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === QUICK_ACTIONS.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-4">
      <div>
        <h3 className="font-display!">Quick Actions</h3>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;

            return (
              <div
                key={action.title}
                className="min-w-full rounded-2xl border border-border bg-linear-to-br from-primary/8 via-transparent to-secondary/10 p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={24} className="text-primary" />

                  <h4>{action.title}</h4>
                </div>

                <p className="mb-4! font-mono! max-w-2xl">
                  {action.description}
                </p>

                <Button
                  variant="secondary"
                  onClick={() => navigate(action.link)}
                >
                  {action.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {QUICK_ACTIONS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              activeSlide === index ? "w-8 bg-primary" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickActionSlider;

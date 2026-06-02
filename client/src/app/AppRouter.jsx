import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoute from "./ProtectedRoute";

const LandingPage = lazy(() => import("@/pages/LandingPage"));
const Features = lazy(() => import("@/pages/Features"));
const Login = lazy(() => import("@/pages/Login"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const Onboarding = lazy(() => import("@/features/onboarding/Onboarding"));
const Dashboard = lazy(() => import("@/features/dashboard/Dashboard"));
const Complaints = lazy(() => import("@/features/complaint/Complaints"));
const CreateComplaint = lazy(
  () => import("@/features/complaint/CreateComplaint"),
);
const Community = lazy(() => import("@/features/community/Community"));

const AppRouter = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complaints"
          element={
            <ProtectedRoute>
              <Complaints />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complaints/create"
          element={
            <ProtectedRoute>
              <CreateComplaint />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;

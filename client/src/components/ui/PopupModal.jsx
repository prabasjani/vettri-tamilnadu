import React from "react";
import Button from "./Button";

const PopupModal = ({
  open,
  type,
  icon,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-modal">
        {/* SUCCESS ICON */}
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${type === "success" ? "bg-green-100" : "bg-red-100"}`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${type === "success" ? "bg-green-500" : "bg-red-500"} text-2xl text-white`}
          >
            {icon}
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 text-center">
          <h2>{title}</h2>

          <p className="mt-3! font-mono">{message}</p>
        </div>

        {/* ACTION */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <Button fullWidth size="md" onClick={onConfirm}>
            {confirmText}
          </Button>

          <Button fullWidth size="md" variant="outline" onClick={onCancel}>
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;

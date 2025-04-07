"use client";
import React from "react";

export default function NewMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-right text-xl">
          Close ✕
        </button>
        <div className="mt-8">
          {/* Put your full screen menu content here */}
          <p>Navigation goes here</p>
        </div>
      </div>
    </div>
  );
}

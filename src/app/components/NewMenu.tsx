"use client";
import { PrismicLink } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "../constants.js";

export default function NewMenu({
  menuLinks,
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [screenSize, setScreenSize] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize !== "xs" &&
    screenSize !== "sm" &&
    screenSize !== "xxs" &&
    screenSize !== "md" ? (
    <div className="flex gap-4">
      {menuLinks?.map((item, index) => (
        <button className={`h-10 w-fit rounded-full bg-red-500`} key={index}>
          <PrismicLink field={item.link_url}>
            <span className="px-5">{item.link_title}</span>
          </PrismicLink>
        </button>
      ))}
    </div>
  ) : (
    open && (
      <div
        className={`fixed inset-0 z-50 bg-myblack-50 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4">
          <button onClick={onClose} className="bg-black p-3 text-right text-lg">
            Close ✕
          </button>
          <div className="mt-8">
            <div className="flex gap-4">
              {menuLinks?.map((item, index) => (
                <button
                  className={`h-10 w-fit rounded-full bg-red-500`}
                  key={index}
                >
                  <PrismicLink field={item.link_url}>
                    <span className="px-5">{item.link_title}</span>
                  </PrismicLink>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

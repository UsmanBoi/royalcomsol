"use client";
import { PrismicLink } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "../constants.js";
import { PrismicNextLink } from "@prismicio/next";

export default function NewMenu({ menuLinks }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-myblack-150/85 backdrop-blur-[8px] transition-all duration-300 ease-in-out ${open ? "translate-x-0 delay-150" : "translate-x-full delay-500"}`}
      >
        <div className="flex items-center justify-center gap-8">
          <div className="mt-8">
            <div className="flex gap-4">
              {menuLinks?.map((item, index) => (
                <button
                  className={`h-10 w-fit rounded-full bg-red-500 transition-all duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-20"}`}
                  key={index}
                  style={
                    open
                      ? { transitionDelay: `${600 + index * 100}ms` }
                      : { transitionDelay: `${200 + index * 100}ms` }
                  }
                >
                  <PrismicNextLink field={item.link_url} className="">
                    <span className="px-5 text-mywhite-50">
                      {item.link_title}
                    </span>
                  </PrismicNextLink>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {screenSize === "lg" ||
      screenSize === "xl" ||
      screenSize === "2xl" ||
      screenSize === "3xl" ? (
        <div className="flex gap-4">
          {menuLinks?.map((item, index) => (
            <button
              className={`h-10 w-fit rounded-full bg-red-500 transition-all duration-300 ease-in-out ${open ? "-translate-y-20" : "translate-y-0"}`}
              key={index}
              style={
                open
                  ? { transitionDelay: `${100 + index * 100}ms` }
                  : { transitionDelay: `${600 + index * 100}ms` }
              }
            >
              <PrismicLink field={item.link_url}>
                <span className="px-5 text-mywhite-50">{item.link_title}</span>
              </PrismicLink>
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
      <button
        title="Menu"
        type="button"
        onClick={toggleMenu}
        className={`group z-50 h-10 w-10 cursor-pointer outline-none transition-all duration-300 ease-in-out max-sm:h-8 max-sm:w-8`}
      >
        <div
          className={`group flex scale-x-110 items-center justify-center transition-all duration-300 ease-in-out ${open ? "scale-x-150" : "hover:scale-125"} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className={`transition-all duration-200 ease-linear ${open ? "-rotate-180" : ""}`}
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              className={`stroke-red-500 stroke-1 transition-all duration-200 ease-linear ${open ? "rotate-[40deg]" : ""}`}
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className={`stroke-red-500 stroke-1 transition-all duration-200 ease-linear ${open ? "rotate-[40deg]" : ""}`}
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className={`stroke-red-500 stroke-1 transition-all duration-200 ease-linear ${open ? "rotate-[40deg]" : ""}`}
            />
          </svg>
        </div>
      </button>
    </>
  );
}

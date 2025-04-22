"use client";
import { PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "../constants.js";
import { Content } from "@prismicio/client";

// Typing for individual link item
type MenuLink = Content.MenuDocument["data"]["menu_links"][number];

type Props = {
  menuLinks: MenuLink[];
};

export default function NewMenu({ menuLinks }: Props) {
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<string | null>(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 h-screen w-screen bg-mywhite-50/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          open ? "translate-x-0 delay-150" : "-translate-x-full delay-500"
        }`}
      >
        <div className="flex h-full w-full items-center justify-center gap-8">
          <div className="mt-8">
            <div className="flex flex-col items-center justify-center gap-8">
              {menuLinks?.map((item, index) => (
                <button
                  className={`h-10 w-fit rounded bg-blue-500 px-3 transition-all duration-500 ease-in-out ${
                    open ? "translate-x-0" : "-translate-x-[400%]"
                  }`}
                  key={index}
                  onClick={toggleMenu}
                  style={{
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  <PrismicNextLink field={item.link_url}>
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

      {/* Desktop Menu */}
      {["lg", "xl", "2xl", "3xl"].includes(screenSize || "") && (
        <div className="flex gap-4">
          {menuLinks?.map((item, index) => (
            <button
              className={`h-10 w-fit rounded-full bg-blue-500 transition-all duration-300 ease-in-out ${
                open ? "-translate-y-20" : "translate-y-0"
              }`}
              key={index}
              style={{
                transitionDelay: `${
                  open ? 100 + index * 100 : 600 + index * 100
                }ms`,
              }}
            >
              <PrismicNextLink field={item.link_url}>
                <span className="px-5 text-mywhite-50">{item.link_title}</span>
              </PrismicNextLink>
            </button>
          ))}
        </div>
      )}

      {/* Menu Toggle Button */}
      <button
        title="Menu"
        type="button"
        onClick={toggleMenu}
        className="group z-50 h-10 w-10 cursor-pointer outline-none transition-all duration-300 ease-in-out lg:hidden max-sm:h-8 max-sm:w-8"
      >
        <div
          className={`group flex scale-x-110 items-center justify-center transition-all duration-300 ease-in-out ${
            open ? "scale-x-150" : "hover:scale-125"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className={`transition-all duration-200 ease-linear ${
              open ? "-rotate-180" : ""
            }`}
          >
            {[6, 12, 18].map((y, idx) => (
              <line
                key={idx}
                x1="4"
                y1={y}
                x2="20"
                y2={y}
                className={`stroke-blue-500 stroke-1 transition-all duration-200 ease-linear ${
                  open ? "rotate-[40deg]" : ""
                }`}
              />
            ))}
          </svg>
        </div>
      </button>
    </>
  );
}

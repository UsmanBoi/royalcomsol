import { Content } from "@prismicio/client";
// import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";

type MenuListProps = {
  items: Content.PageDocument[] | Content.ServicePostDocument[];
  menuType: Content.MenuItemsSlice["primary"]["menu_type"];
  menuData: Content.MenuItemsSlice["primary"]["menu_data"];
};

const MenuList = ({ items, menuType, menuData }: MenuListProps) => {
  const urlPrefix = menuType === "Main Menu" ? "" : "/services";
  return (
    <div className="flex h-full w-full max-w-56 flex-col gap-y-1">
      {items.map((item, index) => (
        <button
          key={index}
          className={`flex w-fit items-start px-0.5 py-1 opacity-80 transition-all duration-300 ease-in-out`}
        >
          <Link href={`${urlPrefix}/${item.uid}`}>
            <span className="fade-up text-left text-sm xl:text-base">
              {/* {item.data.} */}
              {item.data.pagetitle}
            </span>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default MenuList;

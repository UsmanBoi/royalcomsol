import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
// import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";

type MenuListProps = {
  items: Content.BlogPostDocument[] | Content.ServicePostDocument[];
  menuType: Content.MenuItemsSlice["primary"]["menu_type"];
  menuData: Content.MenuItemsSlice["primary"]["menu_data"];
};

const MenuList = ({ items, menuType, menuData }: MenuListProps) => {
  const urlPrefix = menuType === "Main Menu" ? "/blog" : "/services";
  return (
    <div className="flex h-80 w-80 flex-col bg-red-500">
      {items.map((item, index) => (
        <button
          className={`-ml-1 w-fit p-2 opacity-70 transition-all duration-300 ease-in-out`}
          key={index}
        >
          <Link href={`${urlPrefix}/${item.uid}`}>
            <span className="text-sm text-mywhite-50 lg:text-base">
              {item.data.title}
            </span>
          </Link>
          {/* {menuData.map((linkitem, id) => (
            <PrismicNextLink field={linkitem.item_link} key={id}>
              <span className="z-50 text-xl">{linkitem.item_title}</span>
            </PrismicNextLink>
          ))} */}
        </button>
      ))}
    </div>
  );
};

export default MenuList;

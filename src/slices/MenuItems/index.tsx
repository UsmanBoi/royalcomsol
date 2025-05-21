import { FC, JSX } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import MenuList from "./MenuList";
// import { createClient } from "@/prismicio";

/**
 * Props for `MenuItems`.
 */
export type MenuItemsProps = SliceComponentProps<Content.MenuItemsSlice>;

/**
 * Component for "MenuItems" Slices.
 */
const MenuItems: FC<MenuItemsProps> = async ({ slice }) => {
  const client = createClient();

  const services = await client.getAllByType("service_post");
  const blogs = await client.getAllByType("blog_post");

  const menuType = slice.primary.menu_type;

  const items = menuType === "Main Menu" ? blogs : services;
  const menuData = slice.primary.menu_data;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-40 w-40 flex-col gap-2 bg-white"
    >
      <h1 className="z-50 h-40 text-xl">{slice.primary.menu_title}</h1>
      <MenuList items={items} menuType={menuType} menuData={menuData} />
    </section>
  );
};

export default MenuItems;

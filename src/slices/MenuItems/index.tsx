import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
  const pages = await client.getAllByType("page");

  const menuType = slice.primary.menu_type;

  const items = menuType === "Main Menu" ? pages : services;
  const menuData = slice.primary.menu_data;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex h-full flex-col gap-y-3 ${menuType === "Main Menu" ? "w-3/4" : "w-full"}`}
    >
      <h1 className="fade-up text-xl font-medium text-mywhite-50 md:text-2xl 2xl:text-3xl">
        {slice.primary.menu_title}
      </h1>
      <MenuList items={items} menuType={menuType} menuData={menuData} />
    </section>
  );
};

export default MenuItems;

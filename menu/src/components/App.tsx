import { useState } from "react";
import { Menu, Categories } from ".";
import { menuData } from "../data";

const allCategories = [
  "all",
  ...new Set(menuData.map((item) => item.category)),
];

export const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(menuData);
      return;
    }

    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};

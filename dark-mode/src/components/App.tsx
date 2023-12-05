import React, { useState, useEffect } from "react";
import { articlesData } from "../data";
import { Article } from ".";

const getStorageTheme = () => {
  let theme = "light-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as string;
  }

  return theme;
};

export const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {articlesData.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

import React from "react";
import { useGlobalContext } from "../context/appContext";

export const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        onClick={() => handlePage && handlePage("dec")}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => handlePage && handlePage("inc")}
      >
        next
      </button>
    </div>
  );
};

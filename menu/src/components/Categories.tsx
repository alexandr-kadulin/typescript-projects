interface ICategories {
  categories: string[];
  filterItems: (category: string) => void;
}

export const Categories = ({ categories, filterItems }: ICategories) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

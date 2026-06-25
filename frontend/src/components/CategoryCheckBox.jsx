function CategoryCheckbox({
  selectedCategories,
  setSelectedCategories,
}) {

  const handleCheckbox = (category) => {
    if (
      selectedCategories.includes(category)
    ) {
      setSelectedCategories(
        selectedCategories.filter(
          (c) => c !== category
        )
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  };

  const categories = [
    "Comic",
    "Novel",
    "Programming",
    "Business",
    "Self Help",
  ];

  return (
    <>
      <h5>Category Checkbox</h5>

      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(
              category
            )}
            onChange={() =>
              handleCheckbox(category)
            }
          />
          {" "}
          {category}
        </div>
      ))}
    </>
  );
}

export default CategoryCheckbox;
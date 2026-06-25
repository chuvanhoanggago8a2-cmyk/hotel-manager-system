function FilterPanel({
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">
            All Categories
          </option>

          <option value="Comic">
            Comic
          </option>

          <option value="Novel">
            Novel
          </option>

          <option value="Programming">
            Programming
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Self Help">
            Self Help
          </option>
        </select>
      </div>

      <div className="col-md-6">
        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">
            Sort Price
          </option>

          <option value="asc">
            Low → High
          </option>

          <option value="desc">
            High → Low
          </option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;
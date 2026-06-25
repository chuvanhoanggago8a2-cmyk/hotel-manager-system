function PriceFilter({
  priceFilter,
  setPriceFilter,
}) {
  return (
    <>
      <h5>Price Filter</h5>

      <div>
        <input
          type="radio"
          name="price"
          checked={priceFilter === ""}
          onChange={() =>
            setPriceFilter("")
          }
        />
        {" "}All
      </div>

      <div>
        <input
          type="radio"
          name="price"
          checked={priceFilter === "low"}
          onChange={() =>
            setPriceFilter("low")
          }
        />
        {" "}Under 100000
      </div>

      <div>
        <input
          type="radio"
          name="price"
          checked={priceFilter === "high"}
          onChange={() =>
            setPriceFilter("high")
          }
        />
        {" "}Above 100000
      </div>
    </>
  );
}

export default PriceFilter;
// ================================
// IMPORT
// ================================
import { useState } from "react";

import { books } from "../data/books";

import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import PriceFilter from "../components/PriceFilter";
import CategoryCheckbox from "../components/CategoryCheckbox";
import GroupedBookList from "../components/GroupedBookList";

function Home() {

  // ================================
  // STATE MANAGEMENT
  // ================================

  // Search theo tên sách
  const [search, setSearch] = useState("");

  // Filter Category bằng Select
  const [category, setCategory] = useState("All");

  // Sort giá
  const [sort, setSort] = useState("");

  // Filter giá bằng Radio
  const [priceFilter, setPriceFilter] = useState("");

  // Filter nhiều category bằng Checkbox
  const [selectedCategories, setSelectedCategories] =
    useState([]);

  // ================================
  // FILTER DATA
  // ================================

  let filteredBooks = books.filter((book) => {

    // Search theo title
    const matchSearch =
      book.title
        .toLowerCase()
        .includes(search.toLowerCase());

    // Filter Select Category
    const matchCategory =
      category === "All" ||
      book.category === category;

    // Filter Radio Price
    let matchPrice = true;

    if (priceFilter === "low") {
      matchPrice = book.price < 100000;
    }

    if (priceFilter === "high") {
      matchPrice = book.price >= 100000;
    }

    // Filter Checkbox Category
    let matchCheckbox = true;

    if (selectedCategories.length > 0) {
      matchCheckbox =
        selectedCategories.includes(
          book.category
        );
    }

    return (
      matchSearch &&
      matchCategory &&
      matchPrice &&
      matchCheckbox
    );
  });

  // ================================
  // SORT DATA
  // ================================

  // Giá tăng dần
  if (sort === "asc") {
    filteredBooks.sort(
      (a, b) => a.price - b.price
    );
  }

  // Giá giảm dần
  if (sort === "desc") {
    filteredBooks.sort(
      (a, b) => b.price - a.price
    );
  }

  // ================================
  // GROUP DATA BY CATEGORY
  // ================================

  const groupedBooks =
    filteredBooks.reduce(
      (acc, book) => {

        // Nếu category chưa tồn tại
        if (!acc[book.category]) {
          acc[book.category] = [];
        }

        // Thêm sách vào category tương ứng
        acc[book.category].push(book);

        return acc;

      },
      {}
    );

  // ================================
  // UI
  // ================================

  return (
    <div className="container mt-4">

      {/* Title */}
      <h1 className="text-center mb-4">
        Book Management System
      </h1>

      {/* ===========================
          SEARCH BAR
      ============================ */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* ===========================
          CATEGORY FILTER + SORT
      ============================ */}
      <FilterPanel
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {/* ===========================
          RADIO + CHECKBOX FILTER
      ============================ */}
      <div className="row mb-4">

        <div className="col-md-6">
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
        </div>

        <div className="col-md-6">
          <CategoryCheckbox
            selectedCategories={
              selectedCategories
            }
            setSelectedCategories={
              setSelectedCategories
            }
          />
        </div>

      </div>

      {/* ===========================
          GROUPED BOOK LIST
      ============================ */}
      <GroupedBookList
        groupedBooks={groupedBooks}
      />

    </div>
  );
}

export default Home;
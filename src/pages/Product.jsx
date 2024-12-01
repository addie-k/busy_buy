import React, { useState, useEffect } from "react";
import products from "../data/productData";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const uniqueCategories = [...new Set(products.map((prod) => prod.category))];
  const [filters, setFilters] = useState({
    price: 0,
    categories: [],
    searchQuery: "",
  });

  const [filteredProds, setFilteredProds] = useState(products);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const filtered = products.filter((prod) => {
      const matchesPrice = filters.price === 0 || prod.price <= filters.price;
      const matchesCat =
        filters.categories.length === 0 || filters.categories.includes(prod.category);
      const matchSearch =
        filters.searchQuery === "" || prod.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return matchesPrice && matchesCat && matchSearch;
    });

    setFilteredProds(filtered);
  }, [filters, isFirstRender]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const updatedCategories = checked
        ? [...prev.categories, value]
        : prev.categories.filter((item) => item !== value);
      return {
        ...prev,
        categories: updatedCategories,
      };
    });
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    setFilters((prev) => ({
      ...prev,
      price: value,
    }));
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setFilters((prev) => ({
      ...prev,
      searchQuery: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      price: 0,
      categories: [],
      searchQuery: "",
    });
  };

  const areFiltersApplied = filters.price !== 0 || filters.categories.length > 0 || filters.searchQuery !== "";

  return (
    <main className="w-full min-h-screen bg-purple-100 relative top-[4rem]">
      <div className="flex flex-col lg:grid lg:grid-cols-[300px,1fr] gap-5 p-5">
        {/* Filter Sidebar */}
        <aside className="bg-white shadow-md rounded-lg p-6 space-y-8 lg:sticky top-[100px] max-h-fit">
          <h3 className="text-2xl font-bold text-purple-800">Filter</h3>

          {/* Price Filter */}
          <div className="text-lg space-y-2">
            <span className="block font-medium text-gray-700">
              Price limit: ₹{filters.price}
            </span>
            <input
              type="range"
              id="slider"
              min="0"
              max="2000"
              value={filters.price}
              onChange={handlePriceChange}
              className="w-full h-2 bg-purple-300 rounded-lg appearance-none cursor-pointer focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-xl font-semibold text-purple-800">Category:</h3>
            <div className="space-y-4">
              {uniqueCategories.map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value={item}
                    id={item}
                    onChange={handleCategoryChange}
                    checked={filters.categories.includes(item)}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor={item} className="text-lg text-gray-700">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {areFiltersApplied && (
            <button
              onClick={handleClearFilters}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Clear Filters
            </button>
          )}
        </aside>

        {/* Products Section */}
        <section className="text-gray-800 flex flex-col items-center lg:items-start">
          {/* Search Bar */}
          <input
            type="text"
            className="p-3 m-2 w-full lg:w-[30rem] lg:m-0 border-2  border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Search Products..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
            {/* If no products match the filter, show a "No products found" message */}
            {filteredProds.length === 0 && !isFirstRender ? (
              <div className="w-full col-span-4 text-center text-lg font-semibold text-purple-800">
                No products found
              </div>
            ) : (
              filteredProds.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;

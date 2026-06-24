import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItems from "./CategoryItems";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get("/categories/")
      .then((res) => {
        // If your API returns data directly as an array: res.data
        // If your API wraps it like products: res.data.results
        const data = res.data.results || res.data || [];
        setCategories(data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError(err.message || "Failed to load categories.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="px-4 max-w-7xl mx-auto w-full flex flex-col">
        
        {/* Editorial Layout Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-gray-100 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold block mb-2">
              Our Collections
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
              Browse Categories
            </h2>
          </div>
          
          <div className="flex items-center gap-6 self-end sm:self-auto">
            <Link
              to="/categories"
              className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors duration-200 border-b border-gray-900 pb-1"
            >
              <span className="text-[14px] uppercase tracking-[0.25em] text-black font-medium block mb-2">View All</span>
              <FiArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </Link>
          </div>
          
        </div>

        {/* Error State */}
        {error && (
          <p className="text-center text-red-500 font-medium text-sm py-6 w-full">
            {error}
          </p>
        )}

        {/* Premium Skeleton Shimmer States */}
        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-full h-[280px] bg-gray-50/50 border border-gray-100 rounded-xl p-8 space-y-6 animate-pulse flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 bg-gray-100 rounded-xl mb-6" />
                  <div className="h-5 bg-gray-100 w-2/3 rounded-sm mb-3" />
                  <div className="h-3 bg-gray-100 w-full rounded-sm mb-2" />
                  <div className="h-3 bg-gray-100 w-4/5 rounded-sm" />
                </div>
                <div className="h-4 bg-gray-100 w-1/3 rounded-sm" />
              </div>
            ))}
          </div>
        )}

        {/* Category Grid Section */}
        {!isLoading && !error && categories.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full transition-opacity duration-500 ease-out opacity-100">
            {categories.map((category, index) => (
              <CategoryItems 
                key={category.id || index} 
                index={index} 
                category={category} 
              />
            ))}
          </div>
        )}

        {/* Empty Fallback State */}
        {!isLoading && !error && categories.length === 0 && (
          <p className="text-center text-gray-400 font-medium text-sm py-12 w-full">
            No Collections Available
          </p>
        )}
      </div>
    </section>
  );
};

export default Category;
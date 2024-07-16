import { Card } from "../../Components/Card";
import Data from "../../Data";
import { useState, useEffect } from "react";
import { ShimmerUi } from "../ShimmerUi";
import { useColorContext } from "../../Context/ColorContext";
export const HomePage = () => {
  const [apiAllProducts, setApiAllProducts] = useState([]);
  const [allProducts, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { colorState } = useColorContext();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await Data();
    setApiAllProducts(data);
    setProducts(data);
  };
  const handleCategorySelect = (category) => {
    const products = apiAllProducts.filter(
      (prod) => prod.category === category
    );
    setProducts(products);
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = () => {
    const products = apiAllProducts.filter((prod) =>
      prod.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setProducts(products);
  };

  if (allProducts.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <>
      {/* suggestion */}
      <div className="flex justify-evenly items-center">
        <button
          onClick={() => handleCategorySelect("beauty")}
          className="btn btn-outline "
        >
          Beauty
        </button>
        <button
          onClick={() => handleCategorySelect("fragrances")}
          className="btn btn-outline btn-primary"
        >
          Fragrance
        </button>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={handleSearch}
          className="btn btn-outline btn-secondary"
        >
          Search
        </button>
        <button
          onClick={() => handleCategorySelect("furniture")}
          className="btn btn-outline btn-secondary"
        >
          Furniture
        </button>
        <button
          onClick={() => handleCategorySelect("groceries")}
          className="btn btn-outline btn-accent"
        >
          Groceries
        </button>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-between">
        {allProducts.map((product, index) => (
          <Card props={product} key={index} />
        ))}
      </div>
    </>
  );
};

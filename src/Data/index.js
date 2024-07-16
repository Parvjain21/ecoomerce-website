const Data = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();
  const allProducts = products.products;
  let set = new Set();
  allProducts.map(({ category }) => set.add(category));
  console.log(set);
  return allProducts;
};

export default Data;

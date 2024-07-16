export const singleProductData = async (id) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const product = data.json();
  return product;
};

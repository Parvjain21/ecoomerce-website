import { useEffect, useState } from "react";
import { singleProductData } from "../../Data/singleProductData";
import { useCartContext } from "../../Context/CartProvider";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../Components/AddToCard";
import { SingleProductShimmerUi } from "../ShimmerUi/SingleProductShimmerUi";
import { useColorContext } from "../../Context/ColorContext";
export const ProductPage = () => {
  const { colorState } = useColorContext();
  const { cartDispatcher } = useCartContext();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await singleProductData(id);
    setProduct(data);
    console.log(data);
  };

  const {
    title,
    description,
    thumbnail,
    rating,
    reviews,
    price,
    brand,
    warrantyInformation,
    weight,
  } = product;

  if (product.id == undefined) {
    return <SingleProductShimmerUi />;
  }
  return (
    <div>
      <div className="container mx-auto mt-10 px-4 ">
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-10">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 p-4">
            <img
              src={thumbnail || "https://via.placeholder.com/500"}
              alt="Product Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Thumbnail Images
            <div className="flex mt-4 space-x-2">
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 1"
                className="w-20 h-20 rounded-lg shadow"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 2"
                className="w-20 h-20 rounded-lg shadow"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 3"
                className="w-20 h-20 rounded-lg shadow"
              />
            </div>*/}
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">
              {title || "Product Title"}
            </h1>

            {/* Product Rating */}
            <div className="flex items-center mb-4">
              <div className="rating rating-lg">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name="rating-10"
                    className={`mask mask-star-2 ${
                      i < rating ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({reviews?.length || 0} reviews)
              </span>
            </div>

            <p className="text-2xl text-black-800 mb-4">${price}</p>

            <p className="text-700 mb-6">
              {description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."}
            </p>

            {/* Quantity and Buttons */}
            {/* <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-4 text-lg">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="input input-bordered w-20 text-lg"
              />
            </div> */}

            <div className="flex space-x-4">
              <AddToCart product={product} />
              {/* <button className="btn btn-secondary text-lg">Buy Now</button> */}
            </div>

            {/* Product Specifications */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td className="font-bold">Brand</td>
                    <td>{brand}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Warranty Information</td>
                    <td>{warrantyInformation}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Weight</td>
                    <td>{weight}kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews?.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={review.avatar || "https://via.placeholder.com/100"}
                    alt="Reviewer Avatar"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    {review.name || "Anonymous"}
                  </h3>
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${index}`}
                        className={`mask mask-star-2 ${
                          i < review.rating ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                {review.comment || "No comment provided."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

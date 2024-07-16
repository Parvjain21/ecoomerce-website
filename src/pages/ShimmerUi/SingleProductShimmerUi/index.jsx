export const SingleProductShimmerUi = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-64 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

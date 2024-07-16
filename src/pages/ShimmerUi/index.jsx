export const ShimmerUi = () => {
  const arr = Array.from({ length: 50 });
  return (
    <div className="flex flex-wrap justify-between">
      {arr.map((_, index) => (
        <div key={index} className="flex w-52 flex-col gap-4 m-20">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export const Suggestions = () => {
  const handleCategorySelect = (category) => {};
  return (
    <>
      <div className="flex justify-evenly items-center">
        <button
          onClick={() => handleCategorySelect("beauty")}
          className="btn btn-outline "
        >
          Beauty
        </button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
    </>
  );
};

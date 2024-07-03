const Item = () => {
  return (
    <div className="border-violet-600 border rounded">
      <img className="px " src="./public/img/images2.jpg" alt="" />
      <div className="content text-center">
        <h3 className="items-center text-xl font-bold py-2">Card Title</h3>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          dolor!
        </p>
        <div className="bg-sky-200 px-2 py-3">
          <button className="bg-blue-500 px-1 py-2 rounded">
            Find out more!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

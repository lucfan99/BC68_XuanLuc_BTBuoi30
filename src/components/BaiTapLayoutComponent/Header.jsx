const Header = () => {
  return (
    <div className="container bg-slate-900 text-gray-400 py-4 sticky top-0">
      <div className="w-6/12 mx-auto px-2 flex justify-between">
        <div className="logo text-yellow-400">
          <a href="#"> BTComponentLayout</a>
        </div>
        <div className="navbar">
          <ul className="  flex flex-row gap-4">
            <li className=" hover:text-red-700  ">
              <a href="#">Home</a>
            </li>
            <li className=" hover:text-red-700">
              <a href="#">About</a>
            </li>
            <li className=" hover:text-red-700">
              <a href="#">Services</a>
            </li>
            <li className=" hover:text-red-700">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

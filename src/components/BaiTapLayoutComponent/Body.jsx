import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <div className=" body container ">
      <Banner />
      <div className="item-content w-6/12 mx-auto  px-2 py-5  bg-white  flex flex-row gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Body;

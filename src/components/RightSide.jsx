import SearchBar from "./SearchBar";
import RightSideItem from "./RightSideItem";
import RightSideWhoToFollow from "./RightSideWhoToFollow";

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="right-side-container">
        <SearchBar />
        <RightSideItem />
        <RightSideWhoToFollow />
      </div>
    </div>
  );
};

export default RightSide;

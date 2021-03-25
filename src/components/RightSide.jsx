import SearchBar from './SearchBar'
import RightSideItem from './RightSideItem'

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="right-side-container">
        <SearchBar />
        <RightSideItem 
        title="What's happening"
        titleItem="FRUSCIANTE IS BACK!!!!"
        from="Trending in RHCP"
        imgURL="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-14879-frusciante-1800-1396286065.jpg"/>
      </div>
    </div>
  );
};

export default RightSide;

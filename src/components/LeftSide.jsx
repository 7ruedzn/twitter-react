import Item from './LeftSideItem'
import Button from './Button'

const LeftSide = () => {
  return (
    <aside className="left-side">
      <div className="left-side-container">
        <div className="icons-container">
          <Item cName='tt-logo' icon='fa fa-twitter'/>
          <Item cName="home" icon="fa fa-home" title="Home"/>
          <Item cName="messages" icon="fa fa-envelope-o" title="Messages"/>
          <Item cName="notifications" icon="fa fa-bell-o" title="Notifications"/>
          <Item cName="bookmark" icon="fa fa-bookmark-o" title="Bookmarks"/>
          <Item cName="explore" icon="fa fa-hashtag" title="Explore"/>
          <Item cName="profile" icon="fa fa-user-o" title="Profile"/>
          <Item cName="more" icon="fa fa-ellipsis-h" title="More"/>
          <Item cName="lists" icon="fa fa-list" title="Lists"/>
          <Button title="Tweet"/>
        </div>
      </div>
    </aside>
  );
};

// const shortcutsStyle = {
//     backgroundColor: 'red'
// }

// ReactDOM.render(<LeftSide />, document.querySelector(".shortcuts"));

export default LeftSide;

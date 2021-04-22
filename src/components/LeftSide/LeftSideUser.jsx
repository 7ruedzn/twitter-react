const RightSideWhoToFollowItem = (props) => {
  return (
    <div className="right-side-who-to-follow-item">
      <div className="avatar-container">
        <img src={props.avatarURL} alt="user-icon" />
      </div>
      <div className="who-to-follow-item-text-container">
        <h1>{props.username}</h1>
        <h2>{props.userat}</h2>
      </div>
    </div>
  );
};

export default RightSideWhoToFollowItem;

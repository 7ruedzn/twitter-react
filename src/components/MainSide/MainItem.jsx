import React from 'react'

const MainItem = (props) => {
    return (
        <div className="main-item">
            <div className="up-part">
                <div className="avatar-container">
                    <img src={props.avatarURL} alt={props.title}/>
                </div>
                <div className="main-text-container">
                    <div className="user-name-container">
                        <h1 className="user-name">{props.username}</h1>
                        <h2 className="user-name-@">{props.usernameAt}</h2>
                    </div>
                    <div className="tweet-area">
                        <h3 className="user-text">{props.tweet}</h3>
                        <div className="down-part">
                <div className="icon-container">
                    <i className="fa fa-comment-o"></i>
                    <h2>{props.comments}</h2>
                </div>
                <div className="icon-container">
                    <i className="fa fa-retweet"></i>
                    <h2>{props.rts}</h2>
                </div>
                <div className="icon-container">
                    <i className="fa fa-heart-o"></i>
                    <h2>{props.likes}</h2>
                </div>
                <div className="icon-container">
                    <i className="fa fa-share-alt"></i>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainItem

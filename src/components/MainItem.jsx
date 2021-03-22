import React from 'react'

const MainItem = (props) => {
    return (
        <div className="main-item">
            <div className="avatar-container">
                <img src={props.avatarURL} alt={props.title}/>
            </div>
            <div className="main-text-container">
                <div className="user-name-container">
                    <h1 className="user-name">{props.username}</h1>
                    <h2 className="user-name-@">{props.usernameAt}</h2>
                </div>
                <h3 className="user-text">text text text text</h3>
            </div>
            <div className="icons-container">
                <div className="icon-container">
                    {/* here */}
                </div>
            </div>
        </div>
    )
}

export default MainItem

import React from 'react'
import Btn from './Btn'

const WhoToFollowItem = () => {
    return (
        <div className="who-to-follow-item-container">
            <div className="avatar-container"></div>
            <div className="who-text-container">
                <h1 className="title"></h1>
                <h2 className="at-user"></h2>
            </div>
            <Btn text="Follow"/>
        </div>
    )
}

export default WhoToFollowItem

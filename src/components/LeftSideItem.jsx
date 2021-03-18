import React from 'react'

const LeftSideItem = (props) => {
    return (
        <div className={props.cName}>
            <i className={props.icon}></i>
            <h1>{props.title}</h1>
        </div>
    )
}

export default LeftSideItem

const RightSideItem = (props) => {
    return (
        <div className="right-side-item">
            {/* <div className="title">
                <h1>{props.title}</h1>
            </div> */}
            <div className="item">
                <div className="text-container">
                    <h2>{props.from}</h2>
                    <h1>{props.titleItem}</h1>
                </div>
                <div className="item-img">
                    <img src={props.imgURL} alt="item-img"/>
                </div>
            </div>
        </div>
    )
}

export default RightSideItem
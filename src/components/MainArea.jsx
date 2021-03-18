import React from 'react'
import ReactDOM from 'react-dom'

const MainArea = () => {
    return (
        <main>
            <h1>Main</h1>
        </main>
    )
}

// const mainStyle = {
//     backgroundColor: 'green',
//     height: '100%'
// }

ReactDOM.render(<MainArea />, document.querySelector('.mainArea'))

export default MainArea

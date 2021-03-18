import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
        </header>
    )
}

// const headerStyle = {
//     backgroundColor: 'blue',
// }

ReactDOM.render(<Header />, document.querySelector('.header'))

export default Header

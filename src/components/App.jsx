import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div id="root">
            <Header />
            <Shortcuts />
            <MainArea />
            <Other />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))



export default App

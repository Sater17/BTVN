import React from 'react'
import ReactDOM from 'react-dom'
import { BroswerRouter as Router, Route } from 'react-router'

function App() {
    return (
        <div>
            <Router>
                <Head></Head>
                <Nav></Nav>
                <Firm></Firm>
                
            </Router>
        </div>
    )
}
export default App;
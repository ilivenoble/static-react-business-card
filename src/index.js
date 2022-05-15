import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"
import './style.css'


function App() {
    return(
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
        
    ) 
}

ReactDOM.render(<App />, document.getElementById("root"))
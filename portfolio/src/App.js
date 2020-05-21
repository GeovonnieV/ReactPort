import React from "react"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from './components/contact/Contact';
import Nav from "./components/Nav"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


const App = () => {
    
    return(
        <Router>
        <div>
            {/* we want the nav bar in all of our component */}
            <Nav/>

            {/* use switch so we can use "/" for the about component to load */}
            <Switch>
                 {/* use exact to use the "/" path */}
                 <Route path="/" exact component={About} />
                 {/* displays project component */}
                 <Route path="/projects" component={Projects} />
                 {/* displays contact component */}
                 <Route path="/contact" component={Contact} />

            </Switch>
        </div>
        </Router>
    )
}
export default App
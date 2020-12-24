import React, { Component } from "react"
import ReactDOM from "react-dom"
import "bulma"
import "./sass/style.scss"

class App extends Component {
    render = () => <button class="button is-primary">HELLO WORLD</button>
}

ReactDOM.render(<App />, document.getElementById("root"))

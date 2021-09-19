import React from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import calculate from "./logic/calculate";
export default class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
    };

    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    };
    render() {
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        );
    }
}

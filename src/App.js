import React from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
export default class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
    };

    handleClick = (buttonName) => {
        // TODO
    };
    render() {
        return (
            <div className="component-app">
                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        );
    }
}

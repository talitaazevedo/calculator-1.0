/* eslint-disable react/no-typos */
import Button from "../Button";
import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default class ButtonPanel extends React.Component {
    static PropTypes = {
        clickHandler: PropTypes.func,
    };

    handleClick = (ButtonName) => {
        this.props.clickHandler(ButtonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="/" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="*" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick} />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="AC" clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}

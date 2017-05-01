import React from 'react'

export default class InputWithButton extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        console.log(this.textInput.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onButtonClick} ref={element => {
                    this.textInput = element;
                }} />
                <button type="button" onClick={this.onButtonClick}>
                    Click me!
                </button>
            </div>
        )
    }
}
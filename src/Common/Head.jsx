import { Component } from "react";

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = { // initialize state only in consturctor
            name: props.headName
        }
    }

    addCounterAtEndOfHeadName = () => {
        let currentState = this.state;
        currentState.name += "!";

        this.setState(currentState); // correct way
    }
    resetToPropsHead = () => {
        let currentState = this.state;
        currentState.name = this.props.headName;
        this.setState(currentState);
    }
    render() {
        let { name } = this.state;
        return (
            <div onMouseEnter={this.addCounterAtEndOfHeadName} onMouseOut={this.resetToPropsHead}>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Head;
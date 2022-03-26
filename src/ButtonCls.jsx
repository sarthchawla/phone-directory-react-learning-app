import { Component } from "react";

class ButtonCls extends Component {
    render() {
        return (
            <button>Add btn cls</button>
        );
    }
}

function BtnFunc(myProps) { // stateless
    return (
        <button>{myProps.btnText}</button>
    );
}

class Btn extends Component { // stateful
    constructor(props) {
        super();
    }
    render() {
        return (
            <button type={this.props.type} onClick={this.props.onClick}>{this.props.btnText}</button>
        )
    }
}

let ClsComps = { Btn, ButtonCls, BtnFunc };
export default ClsComps;
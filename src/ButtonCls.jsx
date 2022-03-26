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
        console.log("inside btn constructor", this.props); 
    }
    render() {
        console.log("inside btn render", this.props); 
        return (
            <button type={this.props.type} onClick={this.props.onClick}>{this.props.btnText}</button>
        )
    }
}

let ClsComps = { Btn, ButtonCls, BtnFunc };
export default ClsComps;
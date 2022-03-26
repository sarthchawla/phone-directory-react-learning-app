import { Component } from "react";
import Head from "./Common/Head";
import "./Common/common.css";
import "./AddSubs.css";
import ButtonCls from "./ButtonCls";
import ReactTooltip from 'react-tooltip';

class AddSubs extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            name: "",
            phone: ""
        }
        console.log("1. constructor called");
    }

    componentWillMount(){
        console.log("2. componentWillMount called");
    }

    componentDidMount(){
        console.log("4. componentDidMount called");
    }

    inputEventHandler = (e) => { // e.target -> input
        debugger;
        let myState = this.state; // step 2: get the state
        myState[e.target.id] = e.target.value; // step 3: mystate["name"] = "value"
        this.setState(myState) // step 1: set the state
        console.log(this.state);
    }

    countHandler = () => {
        let currentState = this.state;
        currentState.count++;
        this.setState(currentState);
        console.log(this.state);
    }

    componentWillUnmount(e) {
        alert("8. componentWillUnmount called");
    }

    shouldComponentUpdate(){
        console.log("5. shouldComponentUpdate called");
        return false;
    }

    componentWillUpdate(){
        console.log("6. componentWillUpdate called");
    }

    componentDidUpdate(){
        console.log("7. componentDidUpdate called");
    }

    render() {
        console.log("3. render called");
        let {count, name, phone} = this.state;
        return (
            <div className="component-container">
                <Head headName="Add Subs" />
                <div className="component-body">
                    <button className="customBtn" data-tip="this is my back button, be careful" onClick={this.countHandler}>Back</button>
                    <p>counter = {count}</p>
                </div>
                <form className="subs-form">
                    <label htmlFor="subs-name" className="label-control">Name:</label><br />
                    <input id="name" type="text" className="input-control" name="subs-name" onChange={this.inputEventHandler} /><br /><br />

                    <label htmlFor="subs-phone" className="label-control">Phone:</label><br />
                    <input id="phone" type="text" className="input-control" name="subs-phone" onChange={this.inputEventHandler} /><br /><br />

                    <div className='subs-info'>
                        <span className='subs-head' data-tip="cool subs">Subs to be added:</span><br />
                        <span className='subs-info-child' id="name">Name: {name}</span><br />
                        <span className='subs-info-child' id="phone">Phone: {phone}</span>
                    </div>
                    <ButtonCls.Btn btnText="ADD" type="submit" />
                </form>
                <ReactTooltip effect="solid" />
            </div>
        );
    }
}

export default AddSubs;
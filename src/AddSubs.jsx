import { Component } from "react";
import Head from "./Common/Head";
import "./Common/common.css";
import "./AddSubs.css";
import ButtonCls from "./ButtonCls";
import { Link } from "react-router-dom";

class AddSubs extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputEventHandler = (e) => { // e.target -> input
        let myState = this.state; // step 2: get the state
        myState[e.target.id] = e.target.value; // step 3: mystate["name"] = "value"
        this.setState(myState) // step 1: set the state
    }

    onFormSubmitted = (event) => {
        event.preventDefault(); // is to prevent the default behavior of the form-> to prevent the page from refreshing
        this.props.addNewContact(this.state); // this.state by reference
        this.setState({
            id: 0,
            name: '',
            phone: ''
        });        
    }

    render() {
        let { name, phone } = this.state;
        return (
            <div className="component-container">
                <Head headName="Add Subs" />

                {/* <div className="component-body">
                    <Link to="/"><button className="custom-btn add-btn">BACK</button></Link>
                </div> */}

                <form className="subs-form" onSubmit={this.onFormSubmitted}>

                    <label htmlFor="subs-name" className="label-control">Name:</label>
                    <br />
                    <input id="name" type="text" className="input-control" name="subs-name" onChange={this.inputEventHandler} />
                    <br /><br />

                    <label htmlFor="subs-phone" className="label-control">Phone:</label>
                    <br />
                    <input id="phone" type="text" className="input-control" name="subs-phone" onChange={this.inputEventHandler} />
                    <br /><br />

                    <div className='subs-info'>
                        <span className='subs-head'>Subs to be added:</span><br />
                        <span className='subs-info-child' id="name">Name: {name}</span><br />
                        <span className='subs-info-child' id="phone">Phone: {phone}</span>
                    </div>

                    <ButtonCls.Btn btnText="ADD" type="submit" />

                </form>
            </div>
        );
    }
}

export default AddSubs;
import { Fragment } from "react";
import Header from "./Header";
import Btns from "./ButtonCls"
import { Link } from "react-router-dom";

function ShowSubs(props) {
  // parent component
  let contacts = props.myContacts

  return (
    <Fragment>
      <Header headName="Show Subs" />
      <Link to="/add"><button className="custom-btn add-btn">ADD</button></Link>
      {
        contacts.map(contact => {
          return (
            <div key={contact.id}>
              <span>Name: </span><span>{contact.name}</span><br /><br />
              <span>Phone: </span><span>{contact.phone}</span>
              <br /><br />
              <br /><br />
            </div>
          )
        })
      }
    </Fragment>
  );
}

export default ShowSubs;

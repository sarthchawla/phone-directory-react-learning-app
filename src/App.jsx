import { Fragment } from "react";
import Header from "./Header";
import Btns from "./ButtonCls"
import MyBtns from "./ButtonFunc";

function App() {
  // parent component
  let contacts = [
    {
      id: 1,
      name: "John Doe",
      phone: "555-555-5555"
    },
    {
      id: 2,
      name: "Chawla",
      phone: "123441312"
    }
  ]

  let randomText = "Random Text";
  let clickMeBtnHandler = () => {
    alert("Clicked");
  }
  let addClicked = (a, b) => {
    let sum = a + b;
    alert("Add clicked sum = " + sum);
  };
  return (
    <Fragment>
      <Header headName="My Header" />
      <button onClick={addClicked.bind(this, 2, 3)}>Add</button>
      <div>
        <span>Name</span><br />
        <span>Phone</span>
      </div>
      <Btns.Btn btnText="CLICK ME" onClick={clickMeBtnHandler} />
      <Btns.BtnFunc btnText={randomText} />
      {
        contacts.map(contact => {
          return (
            <div key={contact.id}>
              <span>{contact.name}</span><br />
              <span>{contact.phone}</span>
            </div>
          )
        })
      }
    </Fragment>
  );
}

export default App;

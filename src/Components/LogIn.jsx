import { Component } from "react";
import List from "./List";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      email: [],
      contact: [],
    };
  }

  submit = (e) => {
    const { name, email, contact } = this.state;
    e.preventDefault();
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const contactValue = document.getElementById("contact").value;

    if (nameValue && emailValue && contactValue == "") {
      alert("Please fillup the form correctly!");
    } else {
      this.setState({
        name: [...name, nameValue],
        email: [...email, emailValue],
        contact: [...contact, contactValue],
      });
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
  };

  render() {
    const { name, email, contact } = this.state;
    return (
      <>
        <h1 className="text-center p-4 text-xl text-blue-600">Registration</h1>
        <form
          action=""
          onSubmit={this.submit}
          className="flex flex-col items-center"
        >
          <input
            className="border border-blue-700 rounded-[5px] w-[300px] m-2 p-2 focus:outline-1 focus:outline-blue-400"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            required
          />

          <input
            className="border border-blue-700 rounded-[5px] w-[300px] m-2 p-2 focus:outline-1 focus:outline-blue-400"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            required
          />
          <input
            className="border border-blue-700 rounded-[5px] w-[300px] m-2 p-2 focus:outline-1 focus:outline-blue-400"
            placeholder="Phone"
            type="text"
            name="contact"
            id="contact"
            onChange={this.handleChange}
          />

          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white mt-3"
            type="submit"
          >
            Insert
          </button>
        </form>
        <List name={name} email={email} contact={contact} />
      </>
    );
  }
}

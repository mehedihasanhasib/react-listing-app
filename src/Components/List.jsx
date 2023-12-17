import { Component } from "react";
import TableRow from "./TableRow";

export default class List extends Component {
  render() {
    const { name, email, contact } = this.props;
    let list = Object.values(this.props.name);
    return (
      <div className="mt-6 mx-[.5vw]">
        <table className="">
          <thead className="bg-blue-950 text-white">
            <th className="p-1 border border-black w-[33vw]">Name</th>
            <th className="p-1 border border-black w-[33vw]">Email</th>
            <th className="p-1 border border-black w-[33vw]">Contact</th>
          </thead>
          <tbody>
            {list.map((v, i) => (
              <TableRow
                key={i}
                name={name[i]}
                email={email[i]}
                contact={contact[i]}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

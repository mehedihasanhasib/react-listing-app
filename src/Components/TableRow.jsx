export default function TableRow(props) {
  const { name, email, contact } = props;
  return (
    <tr>
      <td className="border border-black p-1">{name}</td>
      <td className="border border-black p-1">{email}</td>
      <td className="border border-black p-1">{contact}</td>
    </tr>
  );
}

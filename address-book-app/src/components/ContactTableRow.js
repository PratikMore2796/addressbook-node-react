// Creating a component for single contact 

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactTableRow = (props) => {
const { _id, pic, firstname, lastname, email, mobile } = props.obj;

const deleteContact = () => {
	axios
	.delete(
"http://localhost:4000/contacts/delete-contact/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Contact successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{pic}</td>
    <td>{firstname}</td>
    <td>{lastname}</td>
	<td>{email}</td>
	<td>{mobile}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-contact/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteContact}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ContactTableRow;

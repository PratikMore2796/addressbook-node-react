import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ContactTableRow from "./ContactTableRow";

const ContactList = () => {
const [contacts, setContacts] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:3000/contact-list")
	.then(({ data }) => {
		setContacts(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return contacts.map((res, i) => {
	return <ContactTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Roll No</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ContactList;

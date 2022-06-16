// Creating a component for fetching list of contact
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ContactTableRow from "./ContactTableRow";

const ContactList = () => {
const [contacts, setContact] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/contacts/")
	.then(({ data }) => {
		setContact(data);
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
// returning data in table format
return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
            <th>ProfilePic</th>
            <th>FirstName</th>
            <th>LastName</th>
			<th>Email</th>
			<th>Mobile</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ContactList;

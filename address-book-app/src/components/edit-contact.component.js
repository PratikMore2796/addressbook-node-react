// EditContact Component for update contact data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";

// EditContact Component
const EditContact = (props) => {
const [formValues, setFormValues] = useState({
	pic:"",
    firstname: "",
    lastname: "",
	email: "",
	mobile: "",
});
	
//onSubmit handler
const onSubmit = (contactObject) => {
	axios
	.put(
		"http://localhost:4000/contacts/update-contact/" +
		props.match.params.id,
		contactObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Contact successfully updated");
		props.history.push("/contact-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize contact form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/contacts/update-contacts/"
		+ props.match.params.id
	)
	.then((res) => {
		const { pic,firstname,lastname, email, mobile } = res.data;
		setFormValues({ pic, firstname, lastname, email, mobile });
	})
	.catch((err) => console.log(err));
}, []);

// Return contact form
return (
	<ContactForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Contact
	</ContactForm>
);
};

// Export EditContact Component
export default EditContact;

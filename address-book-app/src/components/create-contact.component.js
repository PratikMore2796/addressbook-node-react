// Creating a component for creating a contact or adding a contact

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ContactForm from "./ContactForm";

// CreateContact Component
const CreateContact = () => {
const [formValues, setFormValues] =
	useState({ pic: '',firstname: '',lastname: '', email: '', mobile: '' })

// onSubmit handler
const onSubmit = contactObject => {
	axios.post(
'http://localhost:4000/contacts/create-contact',
	contactObject)
	.then(res => {
		if (res.status === 200)
		alert('Contact successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return contact form
return(
	<ContactForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Contact
	</ContactForm>
)
}

// Export CreateContact Component
export default CreateContact

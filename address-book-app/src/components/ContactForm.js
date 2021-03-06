import React from "react";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ContactForm = (props) => {
const validationSchema = Yup.object().shape({
	pic: Yup.string(),
	firstnamme: Yup.string().required("Required"),
	lastname: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	mobile: Yup.number()
	.positive("Invalid phone number")
	.integer("Invalid phone number")
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<label for="Profile Picture">Upload Profile Pic</label>
			<Field name="pic" type="file"
				className="form-control" />
			<ErrorMessage
			name="pic"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<FormGroup>
		<label for="First Name">First Name</label>
			<Field name="firstname" type="text"
				className="form-control" />
			<ErrorMessage
			name="firstname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<FormGroup>
		<label for="Last Name">Last Name</label>
			<Field name="lastname" type="text"
				className="form-control" />
			<ErrorMessage
			name="lastname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
		<label for="Email ID">Email Id</label>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
		<label for="Mobile Number">Mobile Number</label>
			<Field name="mobile" type="number"
				className="form-control" />
			<ErrorMessage
			name="mobile"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ContactForm;

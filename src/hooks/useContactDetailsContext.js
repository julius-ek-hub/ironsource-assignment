import { useContext } from "react";
import ContactDetailsContext from "../contexts/ContactDetailsContext";

/**
 * @returns {{
 * name: {
 * 	title: "Mr." | "Miss." | "Mrs.",
 * 	first: String,
 * 	last: String,
 * },
 * gender: "Male" | "Female",
 * dob: { date: Date, age: Number },
 * email: String,
 * phone: String,
 * picture: { thumbnail: String, medium: String, large: String },
 * location: {
 * 	street: { number: Number, name: String },
 * 	city: String,
 * 	state: String,
 * 	country: String,
 *	},
 * _id: String
 * }}
 */

const useContactDetailsContext = () => useContext(ContactDetailsContext);

export default useContactDetailsContext;

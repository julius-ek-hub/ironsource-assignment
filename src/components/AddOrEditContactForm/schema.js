import * as Yup from "yup";

const string = Yup.string().required().default("");
const _id = Yup.string();
const number = Yup.number().default(0).required();

const object = function (obj) {
	return Yup.object().shape(obj);
};

const contactSchema = Yup.object().shape({
	gender: string.oneOf(["Male", "Female"]).label("Gender").default("Male"),
	name: object({
		title: string
			.oneOf(["Mr", "Ms", "Mrs", "Monsieur", "Miss", "Madame", "Mademoiselle"])
			.default("Mr")
			.label("Title"),
		first: string.min(2).max(10).label("First name"),
		last: string.min(2).max(10).label("Last name"),
		_id,
	}),
	email: string.email().label("Email address"),
	dob: string.label("Date of Birth"),
	phone: string.min(5).max(20).label("Phone number"),
	_id,
	_v: Yup.number(),
	location: object({
		street: object({
			number: number.label("Street No."),
			name: string.label("Street name"),
		}),
		city: string.label("City"),
		state: string.label("State"),
		country: string.label("Country"),
		_id,
	}),
});

export default contactSchema;

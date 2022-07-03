import { Formik } from "formik";

import contactSchema from "./schema";

const Form = ({ initialValues, onSubmit, children: formFields }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={contactSchema}
    >
        {() => formFields}
    </Formik>
);

export default Form;
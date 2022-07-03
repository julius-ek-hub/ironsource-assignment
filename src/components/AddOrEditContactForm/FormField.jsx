import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useFormikContext } from "formik";

import { pick } from "../../utils";

function FormField({ InputComponent = TextField, name, label, ...rest }) {
    const {
        errors,
        setFieldTouched,
        touched,
        values,
        setFieldValue
    } = useFormikContext();

    const error = pick(errors, name);
    const properError = error && pick(touched, name);

    return (
        <Box sx={{ mt: 2, width: '100%' }}>
            <InputComponent
                onChange={({ target: { value } }) => setFieldValue(name, value)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                error={properError}
                helperText={name === 'dob' ? label : (properError && error)}
                fullWidth
                placeholder={`Input ${label}`}
                label={label}
                {...rest}
            />
        </Box>
    );
}

export default FormField;

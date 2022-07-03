import { useEffect } from 'react';

import Button from '@mui/material/Button'

import { useFormikContext } from "formik";

function SubmitButton({ status }) {
    const { submitForm, resetForm } = useFormikContext();

    useEffect(() => {
        status === 'success' && resetForm();

        // eslint-disable-next-line
    }, [status])

    return (
        <Button
            disabled={status === 'submitting'}
            variant="contained"
            onClick={submitForm}>
            Save
        </Button>
    )
}

export default SubmitButton;

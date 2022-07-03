import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import AllFields from "./AllFields";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

import contactSchema from "./schema";

import useDimensionContext from "../../hooks/useDimensionContext";


function FormDialog({ open, onCanceled, onSubmit, status }) {
    const { sm } = useDimensionContext();
    return (
        <Form initialValues={contactSchema.getDefaultFromShape()} onSubmit={onSubmit}>
            <Dialog open={open} fullScreen={!sm} onClose={onCanceled} fullWidth>
                <DialogTitle variant="h5">Add Contact</DialogTitle>
                <DialogContent>
                    <AllFields />
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={onCanceled}>Cancel</Button>
                    <SubmitButton status={status} />
                </DialogActions>
            </Dialog>
        </Form>
    );
}

export default FormDialog;
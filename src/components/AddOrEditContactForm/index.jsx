import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import AllFields from "./AllFields";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

import useDimensionContext from "../../hooks/useDimensionContext";


function AddOrEditContactForm({ open, onCanceled, onSubmit, status, defaultValues }) {
    const { sm } = useDimensionContext();
    if (!open) return null;
    return (
        <Form initialValues={defaultValues} onSubmit={onSubmit}>
            <Dialog open fullScreen={!sm} onClose={onCanceled} fullWidth>
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

export default AddOrEditContactForm;
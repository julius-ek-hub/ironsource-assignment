import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useContactDetailsContext from "../../hooks/useContactDetailsContext";

function ConfirmDelete({ open, onRefused, onAgreed }) {

    const { name } = useContactDetailsContext();

    if (!open) return null;

    return (
        <Dialog open fullWidth onClose={onRefused}>
            <DialogTitle variant="h5">Delete Contact?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <strong>{name.title} {name.first} </strong>will be removed from your contact list.
                    <Typography color="error" mt={1}>This action is not reversible</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onRefused}>Cancel</Button>
                <Button onClick={onAgreed} color="error">Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDelete;
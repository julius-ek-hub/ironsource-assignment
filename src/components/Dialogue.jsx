import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

import useContactDetailsContext from "../../hooks/useContactDetailsContext";
import useAllContactsContext from "../../hooks/useAllContactsContext";

function ConfirmDialog({ open, onReject, onOK, title, message, okText, rejectText, onBeforeClose, ...rest }) {

    const { name } = useContactDetailsContext();

    const beforeClose = async () => {
        let bc = onBeforeClose();
        if (bc instanceof Promise)
            await bc;
        onOK();
    }

    if (!open) return null;

    return (
        <Dialog open fullWidth onClose={onRejectonOK} {...rest}>
            <DialogTitle variant="h5">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>Action is not reversible</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onReject}>Cancel</Button>
                <Button onClick={beforeClose}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
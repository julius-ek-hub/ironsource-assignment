import { useState } from 'react';

import FullScreenLoading from './LoadingIndicators/FullScreenLoading';
import ToastMessage from './ToastMessage';

import { sleep } from '../utils';

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ConfirmThenDelete({ deleteHandler, name, onDone, open }) {
    const [deletStatus, setDeletStatus] = useState();

    const doDelete = async () => {
        setDeletStatus('deleting');
        onDone();
        try {
            await deleteHandler();
            setDeletStatus('success');
            await sleep(1000);
            setDeletStatus(undefined);
        } catch (error) {
            setDeletStatus('error');
        }
    }
    return (
        <>
            <Dialog open={open} fullWidth>
                <DialogTitle variant="h5">Delete?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <strong>{name}</strong> will be removed from your contact list.
                    </DialogContentText>
                    <Typography color="error" mt={1}>This action is not reversible</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDone}>Cancel</Button>
                    <Button onClick={doDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
            <FullScreenLoading loading={deletStatus === "deleting"} transparent />
            <ToastMessage
                status={deletStatus}
                message={deletStatus === 'success' ? 'Contact deleted' : 'Error deleting contact, Please try again'}
            />
        </>
    );
}

export default ConfirmThenDelete;
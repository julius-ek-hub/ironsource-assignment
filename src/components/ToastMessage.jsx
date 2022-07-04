import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function ToastMessage({ status, message }) {

    if (!['success', 'error'].includes(status)) return null;

    return (
        <Snackbar
            open
            TransitionComponent={(props) => <Slide {...props} direction='right' />}>
            <Alert severity={status} sx={{ width: '100%' }} variant="filled">
                {message}
            </Alert>
        </Snackbar>

    );
}

export default ToastMessage;
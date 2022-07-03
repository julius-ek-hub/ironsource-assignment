import { useState } from 'react';

import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

import * as Styled from '../StyledComponents/ContactListings';
import AddOrEditContactForm from '../AddOrEditContactForm';
import FullScreenLoading from '../LoadingIndicators/FullScreenLoading';
import ToastMessage from '../ToastMessage';

import { noInternetError, sleep } from '../../utils';

import useContactListingsContext from '../../hooks/useContactsListingsContext';

function AddMore() {

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState();

    const { saveContact } = useContactListingsContext();

    const handleSubmit = async (details) => {
        if (status) return;
        try {
            setStatus('submitting');
            await saveContact(details)
            setOpen(false);
            setStatus('success');
        } catch (error) {
            setStatus('error');
        } finally {
            await sleep(2000);
            setStatus(undefined);
        }
    }

    return (
        <>
            <Styled.Addmore onClick={() => setOpen(true)}>
                <IconButton>
                    <AddIcon fontSize='large' />
                </IconButton>
            </Styled.Addmore>

            <AddOrEditContactForm
                open={open}
                status={status}
                onCanceled={() => {
                    setOpen(false);
                    setStatus(undefined);
                }}
                onSubmit={handleSubmit} />

            <FullScreenLoading
                loading={status === "submitting"}
                message="Saving..."
                transparent />
            <ToastMessage
                status={status}
                message={status === 'success' ? 'Contact saved' : 'Error saving contact. ' + noInternetError()}
            />
        </>

    );
}

export default AddMore;
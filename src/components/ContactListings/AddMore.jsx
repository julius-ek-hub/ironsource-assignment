
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

import * as Styled from '../StyledComponents/ContactListings';
import FormLauncher from '../AddOrEditContactForm/FormLauncher';

import contactSchema from '../AddOrEditContactForm/schema';

import useContactListingsContext from '../../hooks/useContactsListingsContext';
import { useState } from 'react';

function AddMore() {

    const { saveContact, selected } = useContactListingsContext();
    const [open, setOpen] = useState(false)

    return (
        <>
            <Styled.Addmore
                onClick={() => setOpen(true)}
                sx={{ display: selected.length === 0 ? 'block' : 'none' }}
            >
                <IconButton>
                    <AddIcon fontSize='large' />
                </IconButton>
            </Styled.Addmore>
            <FormLauncher
                open={open}
                defaultValues={contactSchema.getDefaultFromShape()}
                onSubmit={saveContact}
                onCanceled={() => setOpen(false)}
            />
        </>


    );
}

export default AddMore;
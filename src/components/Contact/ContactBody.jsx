import { useState } from 'react';

import ListItemText from '@mui/material/ListItemText';

import { Cell, Name } from '../StyledComponents/Contact';
import AllInfoDialog from '../ContactDetails/AllInfoDialog';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';


export default function ContactBody() {
    const [launchedFullDetails, setLaunchedFullDetails] = useState(false);
    const { name: { title, first, last }, cell } = useContactDetailsContext();

    return (
        <>
            <ListItemText
                primary={<Name>{`${title}. ${first} ${last}`}</Name>}
                secondary={<Cell>{cell}</Cell>}
                sx={{ cursor: 'pointer' }}
                onClick={() => setLaunchedFullDetails(true)}
            />
            <AllInfoDialog
                open={launchedFullDetails}
                onClose={() => setLaunchedFullDetails(false)} />
        </>
    );
}


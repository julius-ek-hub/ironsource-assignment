import { useState } from 'react';

import ListItemText from '@mui/material/ListItemText';

import { TelProps, Name } from '../StyledComponents/Contact';
import ContactDetails from '../ContactDetails';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';


export default function ContactBody() {
    const [openContactDetails, setOpenContactDetails] = useState(false);
    const { name: { title, first, last }, phone, _id } = useContactDetailsContext();
    const { selected, setSelected } = useContactListingsContext();

    const handleContactClick = () => {
        if (selected.length === 0) return setOpenContactDetails(true);
        if (selected.includes(_id)) return setSelected(selected.filter(c => c !== _id));
        setSelected([...selected, _id]);
    }

    return (
        <>
            <ListItemText
                primary={<Name>{`${title}. ${first} ${last}`}</Name>}
                secondary={phone}
                secondaryTypographyProps={{ sx: TelProps }}
                sx={{ cursor: 'pointer' }}
                onClick={handleContactClick}
            />
            <ContactDetails
                open={openContactDetails}
                onClose={() => setOpenContactDetails(false)} />
        </>
    );
}


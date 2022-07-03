import { useState } from 'react';

import ListItemText from '@mui/material/ListItemText';

import { TelProps, Name } from '../StyledComponents/Contact';
import ContactDetails from '../ContactDetails';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';


export default function ContactBody() {
    const [openContactDetails, setOpenContactDetails] = useState(false);
    const { name: { title, first, last }, phone, _id } = useContactDetailsContext();
    const { checked, setChecked } = useContactListingsContext();

    const handleContactClick = () => {
        if (checked.length === 0) return setOpenContactDetails(true);
        if (checked.includes(_id)) return setChecked(checked.filter(c => c !== _id));
        setChecked([...checked, _id]);
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


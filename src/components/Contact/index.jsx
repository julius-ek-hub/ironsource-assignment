import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Checkbox from '@mui/material/Checkbox';

import { Avatar } from '../StyledComponents/Contact';
import ActionButtons from './ActionButtons';
import ContactBody from './ContactBody';

import ContactDetailsContext from '../../contexts/ContactDetailsContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';

const Contact = ({ details }) => {

    const { selected, setSelected } = useContactListingsContext();

    const { picture, gender, name } = details;

    const isChecked = _id => selected.includes(details._id);

    const handleSlectChange = (_id) => {
        if (isChecked(_id)) return setSelected(selected.filter(c => c !== _id));
        setSelected([...selected, _id]);
    }

    return (
        <ContactDetailsContext.Provider value={details}>
            <ListItem sx={{ bgcolor: isChecked(details._id) ? 'divider' : 'background.paper' }}>
                {selected.length > 0 && (
                    <Checkbox
                        checked={isChecked(details._id)}
                        onChange={() => handleSlectChange(details._id)} />
                )}
                <ListItemAvatar>
                    <Avatar
                        src={picture.thumbnail}
                        gender={gender}
                        alt={name.first} />
                </ListItemAvatar>
                <ContactBody />
                {selected.length === 0 && (
                    <ActionButtons />
                )}
            </ListItem>
        </ContactDetailsContext.Provider>
    );
}

export default Contact;
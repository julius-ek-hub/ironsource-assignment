import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';


const ListItem = ({ Icon, text, ...rest }) => (
    <MuiListItem sx={{ p: 0 }}>
        <ListItemButton sx={{ p: 1 }} {...rest}>
            <ListItemIcon sx={{ minWidth: '30px' }}>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </MuiListItem>
);


function ListedInfo() {

    const { email, location, dob: { date, age } } = useContactDetailsContext();

    const { country, state, city, street: { name, number } } = location;

    return (
        <List>
            <ListItem href={`mailto:${email}`} Icon={MailIcon} text={email} />
            <ListItem Icon={LocationOnIcon} text={
                `${country} - ${city}, ${state}, ST No. ${number} (${name})`
            } />
            <ListItem Icon={PermContactCalendarIcon} text={
                `Born: ${new Date(date).toDateString()} (${age} years)`
            } />
        </List>
    );
}

export default ListedInfo;
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';


function ActionButtons() {

    const { cell, email, gender } = useContactDetailsContext();

    const color = gender === 'male' ? 'error' : 'success';

    const StackItem = ({ href, Icon }) => (
        <IconButton href={href}>
            <Icon color={color} sx={{ fontSize: 30 }} />
        </IconButton>
    );

    return (
        <Stack direction="row" gap={3}>
            <StackItem href={`tel:${cell}`} Icon={CallIcon} />
            <StackItem href={`mailto:${email}`} Icon={EmailIcon} />
            <StackItem href={`https://wa.me/${cell}`} Icon={WhatsAppIcon} />
        </Stack>
    );
}

export default ActionButtons;
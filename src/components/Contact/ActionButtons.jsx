import MuiIconButton from '@mui/material/IconButton';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import { ActionButtonsContainer } from '../StyledComponents/Contact';
import SideMenu from './SideMenu';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';
import useDimensionContext from '../../hooks/useDimensionContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';

export default function ActionButtons() {

    const { cell, email, _id } = useContactDetailsContext();
    const { checked } = useContactListingsContext();
    const { sm } = useDimensionContext();

    if (checked.includes(_id)) return null;

    const IconButton = ({ MuiIcon, ...rest }) => (
        <MuiIconButton {...rest}>
            <MuiIcon color="primary" />
        </MuiIconButton>
    );

    return (
        <ActionButtonsContainer>
            <IconButton MuiIcon={EmailIcon} href={`mailto:${email}`} />
            {sm && <IconButton MuiIcon={CallIcon} href={`tel:${cell}`} />}
            <SideMenu />
        </ActionButtonsContainer>
    );
}


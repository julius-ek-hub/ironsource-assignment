import MuiIconButton from '@mui/material/IconButton';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import { ActionButtonsContainer } from '../StyledComponents/Contact';
import Menu from './Menu';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';
import useDimensionContext from '../../hooks/useDimensionContext';

export default function ActionButtons() {

    const { cell, email } = useContactDetailsContext();
    const { sm } = useDimensionContext();

    const IconButton = ({ MuiIcon, ...rest }) => (
        <MuiIconButton {...rest}>
            <MuiIcon color="primary" />
        </MuiIconButton>
    );

    return (
        <ActionButtonsContainer>
            <IconButton MuiIcon={EmailIcon} href={`mailto:${email}`} />
            {sm && <IconButton MuiIcon={CallIcon} href={`tel:${cell}`} />}
            <Menu />
        </ActionButtonsContainer>
    );
}


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDialogTitle from "@mui/material/DialogTitle";
import { Avatar } from './Contact';


export const AvatarLarge = styled(Avatar)(({ theme }) => ({
    height: 120,
    width: 120,
    marginRight: 'unset',
    boxShadow: theme.shadows[10]
}));

export const ImageBox = styled(Box)(() => ({
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
}));

export const DialogTitle = styled(MuiDialogTitle)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
}));



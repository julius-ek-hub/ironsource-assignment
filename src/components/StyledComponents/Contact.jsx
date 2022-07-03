import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import MuiAvatar from '@mui/material/Avatar';


export const Avatar = styled(MuiAvatar)(({ theme: { palette }, gender }) => ({
    border: `3px solid ${gender === 'male' ? palette.error.main : palette.success.main}`,
    height: 50,
    width: 50,
    marginRight: '10px'
}));


export const Name = styled(Text)(() => ({
    fontWeight: 600,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
}));

export const TelProps = {
    fontSize: 15,
    fontWeight: 'unset',
    whiteSpace: 'nowrap',
};

export const ActionButtonsContainer = styled(Box)(() => ({
    display: "flex",
    gap: "20px",
}))

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';


export const LoadMore = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    '& button': {
        color: '#000',
    }
}));

export const Addmore = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 40,
    right: 40,
    '& .MuiButtonBase-root': {
        backgroundColor: theme.palette.primary.main,
        height: 60,
        width: 60,
        boxShadow: theme.shadows[11],
        '& .MuiSvgIcon-root': {
            color: theme.palette.background.paper
        }
    }
}));


export const Name = styled(Text)(() => ({
    fontWeight: 600,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
}));

export const Cell = styled(Name)(() => ({
    fontSize: 15,
    fontWeight: 'unset',
    whiteSpace: 'nowrap'
}));

export const ActionButtonsContainer = styled(Box)(() => ({
    display: "flex",
    gap: "20px",
}))

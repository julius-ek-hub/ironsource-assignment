import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

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

export const MainBox = styled(Box)(() => ({
    height: "100%",
    position: "relative",
    overflow: "hidden"
}));

export const ScrollableBox = styled(Box)(() => ({
    height: "calc(100% - 70px)",
    overflow: "auto"
}));

export const FixedHeader = styled(Box)(() => ({
    minHeight: "65px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    '&>.MuiBox-root': {
        display: "flex",
        alignItems: "center",
        padding: "8px",
        paddingLeft: '16px',
        '&>h5': {
            fontWeight: 'bold'
        }
    }
}));
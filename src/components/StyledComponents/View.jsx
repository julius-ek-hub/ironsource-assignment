import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Centralise = styled(Box)(({ theme: { palette } }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(45deg, ${palette.background.paper}, ${palette.primary.main})`,
}));

export const Container = styled(Box)(({ theme, md, height }) => ({
    backgroundColor: theme.palette.background.paper,
    width: md ? 700 : '100%',
    maxHeight: height,
    overflow: 'auto',
    position: 'relative'
}))

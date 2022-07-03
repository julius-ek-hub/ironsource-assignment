import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FlexCenter = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary
}));

export default FlexCenter;

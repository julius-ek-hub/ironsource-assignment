import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { alpha } from "@mui/material/styles";

function FullScreenLoading({ message }) {
    return (
        <Backdrop open sx={{
            zIndex: 100,
            bgcolor: theme => alpha(theme.palette.background.paper, 0.8)
        }}
            transitionDuration={0}>
            <CircularProgress />
            <Typography>{message}</Typography>
        </Backdrop>
    );
}

export default FullScreenLoading;
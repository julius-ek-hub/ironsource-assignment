import Typography from "@mui/material/Typography";

const ErrorMessage = ({ error }) => error ? (
    <Typography
        color="error"
        pl={4}
        pr={4}
        pb={1}
        textAlign="center">
        {error}
    </Typography>
) : null;

export default ErrorMessage;
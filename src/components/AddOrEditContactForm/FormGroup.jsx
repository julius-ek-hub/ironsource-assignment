import Stack from '@mui/material/Stack';

import useDimension from '../../hooks/useDimension';

function FormGroup({ children }) {

    const { md } = useDimension();

    return (
        <Stack direction={md ? "row" : "column"} gap={2}>
            {children}
        </Stack>
    );
}

export default FormGroup;
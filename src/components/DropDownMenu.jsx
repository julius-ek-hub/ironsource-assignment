import Menu from '@mui/material/Menu';

import useDropDownMenu from '../hooks/useDropDownMenu';

export default function DropDownMenu({ InvokeComponent, children }) {
    const { post, handleClose, ...rest } = useDropDownMenu();

    return (
        <>
            <InvokeComponent onClick={rest.handleClick} />
            <Menu
                anchorEl={rest.anchorEl}
                open={(rest.anchorEl && rest.open) !== null}
                onClose={handleClose}
                onClick={handleClose}
            >
                {children}
            </Menu>
        </>
    );
}


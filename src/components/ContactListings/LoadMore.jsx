import Button from '@mui/material/Button';

import LoadMoreIcon from '@mui/icons-material/Replay';

import * as Styled from '../StyledComponents/ContactListings';


const LoadMore = ({ onClick }) => (
    <Styled.LoadMore>
        <Button onClick={onClick}>Load more <LoadMoreIcon /></Button>
    </Styled.LoadMore>
)


export default LoadMore;
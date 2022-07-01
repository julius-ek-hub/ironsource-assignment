import { Centralise, Container } from './StyledComponents/View';

import useDimensionContext from '../hooks/useDimensionContext';

function View({ children }) {

    const { height, md } = useDimensionContext();

    return (
        <Centralise>
            <Container md={md} height={height}>
                {children}
            </Container>
        </Centralise>
    );
}

export default View;
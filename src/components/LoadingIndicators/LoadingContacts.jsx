import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

import * as Styled from "../StyledComponents/LoadingIndicators";

import useDimensionContext from "../../hooks/useDimensionContext";

const generateArrays = length => {
    return [...new Array(length)].map((...args) => args[1]);
}

function LoadingContacts({ total = 10, loading }) {
    const { height, md } = useDimensionContext();
    if (!loading) return null;
    return (
        <Styled.MainContainer height={height}>
            {generateArrays(total).map(i => (
                <Styled.EachContact key={i}>
                    <Skeleton variant="circular" height={50} width={50} />
                    <Box width="30%" ml={1}>
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="50%" />
                    </Box>
                    <Styled.ActionContainer>
                        {generateArrays(md ? 3 : 2).map(i => (
                            <Skeleton variant="circular" width={20} height={20} key={i} />
                        ))}
                    </Styled.ActionContainer>
                </Styled.EachContact>
            ))}
        </Styled.MainContainer>
    );
}

export default LoadingContacts;
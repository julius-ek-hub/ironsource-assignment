import { Component } from 'react';

import Text from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import ErrorIcon from '@mui/icons-material/Error';

import { lighten } from '@mui/material/styles';

import View from './View';

import localStore from '../api/localStore';

class SomethingWentWrong extends Component {

    state = { error: null };

    componentDidCatch(error) {
        this.setState({ error })
    }

    clearBrowsersData() {
        localStore.reset();
        window.location.reload();
    }

    render() {
        const { error } = this.state;
        if (!error) return this.props.children;

        return (
            <View>
                <Box sx={{ p: 4 }}>
                    <Box bgcolor={theme => lighten(theme.palette.error.main, 0.5)} p={2} display="flex">
                        <ErrorIcon color="error" /><Text color="error" ml={1}>There was a problem during render</Text>
                    </Box>
                    <Text component='p' pt={1}>Error Message: {error.message}</Text>
                    <Text component='p' pt={1}>Error Type: {error.name}</Text>
                    <Text component='p' pt={1} pb={1}>Possible Fix:
                        <Link ml={1} onClick={this.clearBrowsersData}> Clear browser's data {`(remove everything from localStorage)`}</Link>
                    </Text>
                    <Divider />
                    <Box mt={2}>
                        <Text>Complete Error Stack:</Text>
                        <Text component='ul'>
                            {error.stack.split('\n').map((line, index) => (
                                <Text key={index} color="error" component='li' sx={{ wordBreak: 'break-all' }}>{line}</Text>
                            ))}

                        </Text>
                    </Box>
                </Box>

            </View>
        )
    }
}

export default SomethingWentWrong;
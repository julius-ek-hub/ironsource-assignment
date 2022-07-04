import { useEffect, useState } from 'react';

import AddOrEditContactForm from '.';
import FullScreenLoading from '../LoadingIndicators/FullScreenLoading';
import ToastMessage from '../ToastMessage';

import { noInternetError, sleep } from '../../utils';

function FormLauncher({ defaultValues, onSubmit, open, onCanceled, title }) {

    const [status, setStatus] = useState();
    const [defaults, setDefaults] = useState(defaultValues);

    useEffect(() => {
        setDefaults(defaultValues);
    }, [defaultValues])

    const handleSubmit = async (details) => {
        if (status) return;
        try {
            setStatus('submitting');
            await onSubmit(details);
            onCanceled();
            setStatus('success');
        } catch (error) {
            console.log(error);
            setStatus('error');
        } finally {
            await sleep(2000);
            setStatus(undefined);
        }
    }

    return (
        <>
            <AddOrEditContactForm
                defaultValues={defaults}
                open={open}
                status={status}
                title={title}
                onCanceled={() => {
                    onCanceled();
                    setStatus(undefined);
                }}
                onSubmit={handleSubmit} />

            <FullScreenLoading
                loading={status === "submitting"}
                message="Saving..."
                transparent />
            <ToastMessage
                status={status}
                message={status === 'success' ? 'Contact saved' : 'Error saving contact. ' + noInternetError()}
            />
        </>

    );
}

export default FormLauncher;
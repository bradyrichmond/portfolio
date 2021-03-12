import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    spinnerStyle: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const Spinner = () => {
    return (
        <div style={styles.spinnerStyle}>
            <CircularProgress />
        </div>
    )
}

export default Spinner;
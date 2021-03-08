import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, selectModalComponent } from './utilsSlice';

const styles = {
    modalWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    } as React.CSSProperties,
    modalScrim: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    } as React.CSSProperties,
    componentWrapper: {

    } as React.CSSProperties
} 

const Modal = () => {
    const dispatch = useDispatch();
    const component = useSelector(selectModalComponent);

    const closeModal = () => {
        dispatch(hideModal());
    }

    return (
        <div style={styles.modalWrapper}>
            <div style={styles.modalScrim} onClick={closeModal}>
            </div>
            <div style={styles.componentWrapper}>
                {component}
            </div>
        </div>
    );
}

export default Modal;
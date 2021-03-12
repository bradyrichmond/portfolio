import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles, Dialog, Button } from '@material-ui/core';

import './home.css';
import Spinner from '../../utils/components/Spinner';
import Navigation from '../navigation/Navigation';
import { selectShowModal } from '../../utils/components/utilsSlice';
import { useSelector } from 'react-redux';
import { isPropertySignature } from 'typescript';

const Landing = lazy(() => import('../landing/Landing'));
const Portfolio = lazy(() => import('../portfolio/Portfolio'));

const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
      // The position fixed scoping doesn't work in IE 11.
      // Disable this demo to preserve the others.
      '@media all and (-ms-high-contrast: none)': {
        display: 'none',
      },
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Home = () => {
    const showModal = useSelector(selectShowModal);
    return (
        <div className='HomeApp'>
            <Router>
                {showModal && <ModalWrapper />}
                <Navigation />
                <Suspense fallback={<Spinner />}>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/'>
                                <Landing />
                            </Route>
                            <Route path='/portfolio'>
                                <Portfolio />
                            </Route>
                        </Switch>
                    </div>
                </Suspense>
            </Router>
        </div>
    )
}

interface ModalProps {
    title?: string,
    subtitle?: string,
    body?: string,
    cancelAction?: Function,
    submitAction?: Function,
    cancelText?: Function
    submitText?: string
}

const ModalWrapper  = (props: ModalProps) => {
    const classes = useStyles();
    const rootRef = React.useRef(null);

    return (
        <Dialog
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
            container={() => rootRef.current}
        >
            {props.title && <h1>{props.title}</h1>}
            {props.subtitle && <h3>{props.subtitle}</h3>}
            {props.body && <div>{props.body}</div>}
            {props.cancelAction && <Button>{`${props.cancelText || 'Cancel'}`}</Button>}
            {props.submitAction && <Button>{`${props.submitText || 'Submit'}`}</Button>}
        </Dialog>
    )
}

export default Home;
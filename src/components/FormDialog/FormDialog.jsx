import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    makeStyles,
    Button,
    Fab,
    Dialog,
    DialogActions,
    DialogContent
} from '@material-ui/core'

import classNames from 'classnames';

const useStyles = makeStyles({
    btn: {
        backgroundColor: "#F8D9D6",
        color: 'black',
        '&:hover': {
            backgroundColor: "#e75480"
        },
    },
    addTreat: {
        top: "10px",
    },
    cancel: {
        color: "grey"
    }
})

function FormDialog({ title, children, component, callback }) {

    const dispatch = useDispatch();
    const open = (useSelector(store => store.formDialogReducer))

    const handleClickOpen = () => {
        dispatch({ type: 'OPEN_FORM_DIALOG' });
    };

    const handleClose = () => {
        dispatch({ type: 'CLOSE_FORM_DIALOG' });
        dispatch({ type: 'CLEAR_EDIT' });
    };

    const classes = useStyles();

    //establishing children as passed in Form (or other) components
    const InnerComponent = component || (() => children);


    return (


        <div>
            <Button
                variant="contained"
                color="primary"
                className={classNames(classes.btn, classes.addTreat)}
                onClick={handleClickOpen}
            >
                {title}
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    {/* InnerComponent:  */}
                    {open && <InnerComponent />}

                </DialogContent>
                <DialogActions>
                    <Button
                        className={classes.cancel}
                        onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;
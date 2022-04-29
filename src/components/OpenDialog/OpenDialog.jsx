import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles'
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
        color:"grey"
    }
})

export default function OpenDialog({ title, children, component, callback }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        //CALL THE FUNCTION GIVEN, IF EXISTS:
        {callback ? callback() : null};
            setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    //establishing children as passed in Form (or other) components
    const InnerComponent = component || (() => children);


    return (


        <div>
            <Button variant="contained"
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
                        // className={classes.btn} //more subtle non-button appearance
                        className={classes.cancel}
                        onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    {/* TODO make button work with callback passed prop? <Button onClick={handleClose} color="primary">
                        Add treat
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}

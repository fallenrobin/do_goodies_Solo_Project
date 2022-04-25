import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormTreats from '../FormTreats/FormTreats';
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
        top: "3px",
        left: "5px"
    }
})

export default function OpenDialog({title, children, component}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        //CALL THE FUNCTION GIVEN, IF EXISTS?

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    //QUESTION make a const to handle which form is being passed in??
    const InnerComponent = component || (() => children);


    return (


        <div>
            {/* TODO move button so it's not off screen */}
            <Button variant="contained" 
            color="primary" 
            className={classNames(classes.btn, classes.addTreat)} 
            onClick={handleClickOpen}
            >
                {title}
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    {/* TODO how to make this form generic?? */}
                    {open && <InnerComponent /> }
                  
                </DialogContent>
                <DialogActions>
                    <Button 
                    // className={classes.btn} //more subtle non-button appearance
                    onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    {/* TODO<Button onClick={handleClose} color="primary">
                        Add treat
                    </Button> Can I keep generic but wire to FormTreat??*/}
                </DialogActions>
            </Dialog>
        </div>
    );
}

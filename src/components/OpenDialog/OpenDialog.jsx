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
        backgroundColor: "#84C3C8",
        color: 'black',
        '&:hover': {
            backgroundColor: "#42929D"
        },
    },
    addTreat: {
        position: "fixed",
        top: "3px",
        left: "5px"
    }
})

export default function OpenDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();


    return (


        <div>
            {/* TODO move button so it's not off screen */}
            <Button variant="contained" 
            color="primary" 
            className={classNames(classes.btn, classes.addTreat)} 
            onClick={handleClickOpen}>
                Add treat
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    {/* TODO how to make this form generic?? */}
                    {open ?
                        <FormTreats
                            handleClose={handleClose}
                        />
                        :
                        null
                    }
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

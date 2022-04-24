import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormTreats from '../FormTreats/FormTreats';

export default function OpenDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add treat
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    {open ?
                        <FormTreats
                            handleClose={handleClose}
                        />
                        :
                        null
                    }

                    {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What is this treat called?"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Describe this tasty treat!"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add image link, if you like"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What is the price?"
            type="number"
            fullWidth
          /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    {/* <Button onClick={handleClose} color="primary">
                        Add treat
                    </Button> Can I keep generic but wire to FormTreat??*/}
                </DialogActions>
            </Dialog>
        </div>
    );
}

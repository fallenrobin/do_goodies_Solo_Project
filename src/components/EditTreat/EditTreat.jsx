import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import swal from 'sweetalert';


const useStyles = makeStyles({
    btn: {
        backgroundColor: "#F8D9D6",
        color: 'black',
        margin: '3px',
        '&:hover': {
            backgroundColor: "#e75480"
        },
    },
    delete: {
        color: "#e75480"
    }
})

function EditTreat() {

    const [treatName, setTreatName] = useState('');
    const [treatDescription, setTreatDescription] = useState('');
    const [treatImage, setTreatImage] = useState('');
    const [price, setPrice] = useState();
    const dispatch = useDispatch();
    const classes = useStyles();

    const treat = useSelector(store => store.editReducer.treat);

    const newTreat = {
        id: treat.id,
        treat_name: treatName,
        treat_description: treatDescription,
        treat_image: treatImage,
        // FIXME: deal with image validation? / set default in DB
        price: price
    };


    const deleteConfirm = () => { //for clicking Delete button on list view
        console.log('clicked delete');
        swal({
            title: "Yeet treat?",
            text: "Once delete, no more eat!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your sweet treat is now delete.", {
                        icon: "success",
                    });
                    dispatch({
                        type: 'DELETE_TREAT',
                        payload:
                            treat?.id
                    });
                } else {
                    swal("You can still eat treat!");
                }
            });
    }

    const handleUpdate = () => {
        console.log('in handleUpdate Edit treat');
        event.preventDefault();
        console.log('clicked Save Changes');
        dispatch({
            type: 'SUBMIT_EDIT_TREAT',
            payload:
                newTreat
        });
        setTreatName('');
        setTreatDescription('');
        setTreatImage('');
        setPrice('');
        console.log('newTreat object is:', newTreat);
        swal("Changes saved!", "", "success", {
            button: "Close",
        });
    }

    // NOTE auto fill for demo, using Ruby on Whales
    const handleAutofill = () => {
        setTreatName('#rubyOnWhales');
        setTreatDescription('Buttery whales coated with ruby chocolate ');
        setTreatImage('/images/rubyWhales.jpg');
        setPrice('$3');
    }

    return (

        <form onSubmit={handleUpdate}>

            {/*NOTE secret button for demo purposes*/}
            <h2 onClick={handleAutofill}>Edit Treat</h2>

            <div>
                <label htmlFor="treatName">
                    Name of treat:
                    <input
                        type="text"
                        name="treat"
                        value={treatName}
                        placeholder={treat.treat_name}
                        required
                        onChange={(event) => setTreatName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="treatDescription">
                    Describe this treat:
                    <input
                        type="treatDescription"
                        name="treatDescription"
                        value={treatDescription}
                        maxLength={255}
                        placeholder={treat.treat_description}
                        required
                        onChange={(event) => setTreatDescription(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="treatImage">
                    Picture:
                    <input
                        type="text"
                        name="treatImage"
                        value={treatImage}
                        maxLength={255}
                        placeholder={treat.treat_image}
                        onChange={(event) => setTreatImage(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="price">
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={price}
                        // maxLength={255} what validation here? also set in DB
                        placeholder={treat.price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <Button className={classes.delete}
                    onClick={() => { deleteConfirm() }} >
                    Delete
                </Button>

                <Button variant="outlined" className={classes.btn}
                    type="submit"
                    name="submit"
                    value="Update">
                    Update
                </Button>

            </div>
        </form>
    );
}



export default EditTreat;
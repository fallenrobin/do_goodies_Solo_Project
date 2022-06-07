import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';



const useStyles = makeStyles({
    btn: {
        backgroundColor: "#84C3C8",
        color: 'white',
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


function FormTreats() {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();



    const [treatName, setTreatName] = useState('');
    const [treatDescription, setTreatDescription] = useState('');
    const [treatImage, setTreatImage] = useState('');
    const [price, setPrice] = useState(0);
    const newTreat = {
        treat_name: treatName,
        treat_description: treatDescription,
        treat_image: treatImage,
        price: price
    };

    const handleNewTreat = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TREAT',
            payload:
                newTreat
        });
        // console.log(treatName, treatDescription, treatImage, price);
        setTreatName('');
        setTreatDescription('');
        setTreatImage('');
        setPrice('');
        history.push('/treatList');
        swal("Treat created!", "nom nom nom", "success", {
            button: "Close",
        });
    }

    const handleAutofill = () => {
        // NOTE set up auto fill for demo, using Ruby on Whales
        setTreatName('fullCRUDnut');
        setTreatDescription(`You've heard of cronuts? These are better`);
        setTreatImage('/images/crudnut.png');
        setPrice('$4');
    }


    return (

        <>
            <form onSubmit={handleNewTreat}>
                <h2 onClick={handleAutofill}>Create New Treat</h2>

                <div>
                    <label htmlFor="treatName">
                        Name of treat:
                        <input
                            type="text"
                            name="treat"
                            value={treatName}
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
                            placeholder="What's it all about?"
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
                            placeholder="Paste image link"
                            onChange={(event) => setTreatImage(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="price">
                        Price:
                        <input
                            type="string"
                            name="price"
                            value={price}
                            // to do: adjust width
                            // maxLength={255} what validation here? also set in DB
                            placeholder="Enter dollar amount with or without decimals"
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={classes.btn}
                        type="submit"
                        name="submit">
                        Add treat
                    </Button>
                </div>

            </form>
        </>
    );
}


export default FormTreats;
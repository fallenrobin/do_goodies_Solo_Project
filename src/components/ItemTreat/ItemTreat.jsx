import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


//MUI for card
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//grid for centering
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            maxWidth: 375,
            // height: 400
            minHeight: 200,
            // maxHeight: 400
        },
    }),
);





function ItemTreat({ treat }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const treats = useSelector(store => store.treatReducer);

    const [treatName, setTreatName] = useState('');
    const [treatDescription, setTreatDescription] = useState('');
    const [treatImage, setTreatImage] = useState('');
    const [price, setPrice] = useState(0);

    const classes = useStyles(); //for card

    const [isEditing, setEditing] = useState(false); //for edit mode
    // const [treatToEdit, setTreatToEdit] = useState([])

    // const handleChange = (e) => {

    // }

    const handleClickEdit = () => {
        setEditing(true);
        dispatch({
            type: 'EDIT_TREAT',
            payload: {
                treat
            },
        });
        console.log(treatToEdit);
    }

    const handleDelete = () => {
        
    }


    // const editTreat = () => {
    //     const editedTreat = treats.map(treat => {
    //         // if this task has the same ID as the edited task
    //         if (id === treat.id) {
    //             //
    //             return {
    //                 treat_name: treatName,
    //                 treat_description: treatDescription,
    //                 treat_image: treatImage,
    //                 price: price
    //             }
    //         }
    //         return treat;
    //     });
    //     setTreatToEdit(editedTreat);
    //     // handleUpdate();
    // }

    // const handleUpdate = () => {
    //     // dispatch({
    //     //     type: 'EDIT_TREAT',
    //     //     payload: {
    //     //         treatEdit
    //     //     },
    //     // });
    //     console.log(treatEdit);
    //     setTreatName('');
    //     setTreatDescription('');
    //     setTreatImage('');
    //     setPrice('');
    // }




    const handleDetailView = () => {
        console.log('clicked into HandleDetailView, treat id is:', treat.id);
        dispatch({ type: 'FETCH_TREAT_DETAIL', payload: treat.id })//will trigger fetchDetail saga
        history.push(`/treatDetail/${treat.id}`);//'moves' user to page view with treat details
    }

    const editingTemplate = (
        <form >
            <h2>Edit Treat</h2>

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
                        // required
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
                        type="number"
                        name="price"
                        // to do: adjust width
                        // maxLength={255} what validation here? also set in DB
                        placeholder={treat.price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <button onClick={() => { setEditing(false) }} className="btn">Cancel</button>
                <input className="btn" type="submit" name="submit" value="Update" />
            </div>
        </form>
    );


    return (
        //each card created as the .map loops thru array of treats
        <>
            <Grid
                item md={2}
            >

                <Card
                    raised={true}
                    className={classes.root} variant="outlined">

                    <CardContent>
                        <>
                            <Typography>

                                <div key={treat.id} >
                                    <p>{treat.treat_name}</p></div>

                            </Typography>

                            <img key={treat.id} onClick={handleDetailView}
                                src={treat.treat_image} alt={treat.treat_name}></img>
                            {/* "https://fakeimg.pl/200x200/" filler images above for now*/}
                            <Button variant="contained" color="primary"
                                onClick={() => { handleClickEdit() }}
                            >Edit treat</Button>
                            <Button variant="outlined" color="primary"
                                onClick={() => { handleDelete() }}
                            >Delete</Button>
                        </>

                    </CardContent>
                </Card>
                {isEditing
                    ?
                    editingTemplate
                    :
                    null
                }
            </Grid>
        </>
    )
}




export default ItemTreat;
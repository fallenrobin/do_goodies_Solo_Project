import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditTreat from '../EditTreat/EditTreat';
import swal from 'sweetalert';



//MUI for card
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

//grid for centering
import Grid from '@material-ui/core/Grid';
import OpenDialog from '../OpenDialog/OpenDialog'; //for popup



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


    /* This is for non-dialog pop-down edit form; button for it below is also commented out*/
    
    const [treatToEdit, setTreatToEdit] = useState();

    const handleClickEdit = () => {
        setEditing(true);
        dispatch({
            type: 'EDIT_TREAT',
            payload: {
                treat
            },
        });
    }
        // console.log(treatToEdit);
    


    const handleDelete = () => { //for clicking Delete button on list view
        // console.log('clicked delete');
        swal({
            title: "Are you sure?",
            text: "Once deleted, this treat will be gone!",
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
                    swal("Your treat is intact!");
                }
            });

    }

    // const newTreat = {
    //     id: treatEdit?.id,
    //     treat_name: treatName,
    //     treat_description: treatDescription,
    //     treat_image: treatImage,
    //     // FIXME: deal with image somehow
    //     price: price
    // }

    const handleEditTreat = (event) => { //for clicking Save Changes button on Edit form
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
        setEditing(false);
        // history.push('/treatList'); redundant if editing = false
    }



    const handleDetailView = () => {
        console.log('clicked into HandleDetailView, treat id is:', treat.id);
        dispatch({ type: 'FETCH_TREAT_DETAIL', payload: treat.id })//will trigger fetchDetail saga
        history.push(`/treatDetail/${treat.id}`);//'moves' user to page view with treat details
    }

    const editingTemplate = (
        <form onSubmit={handleEditTreat}>
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
                <input className="btn" type="submit" name="submit" value="Save Changes" />

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
                            <div>
                                <p>{treat.treat_name}</p></div>

                            <img onClick={handleDetailView}
                                src={treat.treat_image} alt={treat.treat_name}></img>
                            {/* FIXME prevent SQL from changing URL?? 
                                {treat.treat_image} with {require("./logo.png")} in DB comes back as "{require(\"./logo.png\")}"
                                or: https://fakeimg.pl/350x200/?text=Tasty&font=lobster
                                */}

                            {/* <Button variant="contained" color="primary"
                                onClick={() => { handleClickEdit() }}
                            >Edit treat</Button> //for pop-down version of edit form*/}
                            
                            <OpenDialog
                                open={open}
                                onClose={() => setOpen(false)}
                                aria-labelledby="confirm-dialog"
                                title="edit treat"
                                callback={handleClickEdit}
                            >
                                <EditTreat />
                            </OpenDialog>
                               
                            {/* FIXME issue with conflicting IDs between images and edit dialog?? */}
                        </>

                    </CardContent>
                </Card>
                {/* {isEditing
                    ?
                    <EditTreat
                    />
                    :
                    null
                } */}
            </Grid>
        </>
    )
}




export default ItemTreat;
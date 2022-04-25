import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditTreat from '../EditTreat/EditTreat';


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



    const classes = useStyles(); //for card

    const [isEditing, setEditing] = useState(false); //for edit mode


    /* This is for non-dialog pop-down edit form; button for it below is also commented out
    
    const [treatToEdit, setTreatToEdit] = useState();

    const handleClickEdit = () => {
        setEditing(true);
        dispatch({
            type: 'EDIT_TREAT',
            payload: {
                treat
            },
        });
        // console.log(treatToEdit);
    }*/

    const handleDetailView = () => {
        console.log('clicked into HandleDetailView, treat id is:', treat.id);
        dispatch({ type: 'FETCH_TREAT_DETAIL', payload: treat.id })//will trigger fetchDetail saga
        history.push(`/treatDetail/${treat.id}`);//'moves' user to page view with treat details
    }


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
                            <div key={treat.id} >
                                <p>{treat.treat_name}</p></div>

                            <img key={treat.id} onClick={handleDetailView}
                                src={treat.treat_image} alt={treat.treat_name}></img>
                                {/* FIXME prevent SQL from changing URL?? 
                                or: https://fakeimg.pl/350x200/?text=Tasty&font=lobster
                                */}

                            {/* <Button variant="contained" color="primary"
                                onClick={() => { handleClickEdit() }}
                            >Edit treat</Button> //for pop-down version of edit form*/}

                            <OpenDialog
                                open={open}
                                onClose={() => setOpen(false)}
                                aria-labelledby="confirm-dialog"
                                // TODO EditTreat={EditTreat} //can I use OpenDialog as a generic form and pass this in??
                            />
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
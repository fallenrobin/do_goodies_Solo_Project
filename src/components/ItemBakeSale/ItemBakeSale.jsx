import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import OpenDialog from '../OpenDialog/OpenDialog';
import EditBakesale from '../EditBakesale/EditBakesale';


//MUI for card
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';
import BakesaleAddTreats from '../BakesaleAddTreats/BakesaleAddTreats';




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


function ItemBakesale({ bakesale }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(); //for card
    const [isEditing, setEditing] = useState(false); //for edit mode
    const user = useSelector((store) => store.user);
    const bakesales = useSelector(store => store.bakesaleReducer);
    
    const handleClickEdit = () => {
        setEditing(true);
        // dispatch({
        //     type: 'EDIT_BAKESALE',
        //     payload: {
        //         bakesale
        //     },
        // });
    }

    const handleDetailView = () => {
        // console.log('clicked into HandleDetailView, treat id is:', bakesale.id);
        dispatch({ type: 'FETCH_BAKESALE_DETAIL', payload: bakesale.id })//will trigger fetchDetail saga
        history.push(`/bakesaleDetail/${bakesale.id}`);//'moves' user to page view with treat details
    }

    return (
        //each card created as the .map loops thru array of treats
        <>
            <Grid
                item xs={11}
            >
                <Card className={classes.root} variant="outlined">
                    <CardContent>

                        <div>
                            <h3>{bakesale.org_name}</h3>
                            <p>{bakesale.org_description}</p>

                            <img key={bakesale.id} onClick={handleDetailView}
                                src={bakesale.org_image} alt={bakesale.org_name}></img>

                            {/* {user.id ?

                                <OpenDialog
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="confirm-dialog"
                                    title="edit bakesale"
                                    callback={handleClickEdit}
                                >
                                    <EditTreat />
                                </OpenDialog>

                                :
                                null} */}

                        </div>


                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}




export default ItemBakesale;
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import OpenDialog from '../OpenDialog/OpenDialog';
import EditBakesale from '../EditBakesale/EditBakesale';
import BakerCard from '../BakerCard/BakerCard';

//MUI for card
import {
    makeStyles,
    createStyles,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';



const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            maxWidth: 375,
            minHeight: 200,
        },
        roundImg: {
            width: "60px",
            height: "60px",
            borderRadius: "400" / "2",
            border: "1px solid gray",
            objectFit: 'cover',
        },
        userInfo: {
            margin: '0.5em',
            padding: '3px',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-around',
            alignItems: 'center',
            border: '1px solid gray',
            borderRadius: '6px',
            boxShadow: '1px 1px #69696921',
        }, 
        bakesaleImg: {
            maxWidth: '100%',
            height: '20em',
            width: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }
    }),
);


function ItemBakesale({ bakesale }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles(); //for card
    const user = useSelector((store) => store.user);
    const bakesales = useSelector(store => store.bakesaleReducer);

    const handleClickEdit = () => {
        dispatch({
            type: 'EDIT_BAKESALE',
            payload: {
                bakesale
            },
        });
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
                item sm={11}
            >
                <Card
                    className={classes.root}
                    variant="outlined">
                    <CardContent>

                        <div>
                            <Typography
                                variant='h4'
                                onClick={handleDetailView}
                                style={{ textAlign: 'center' }}
                            >{bakesale.org_name}
                            </Typography>

                            <div className={classes.userInfo}>
                                <BakerCard
                                bakesale={bakesale}/>
                            </div>
                            {/* <p>{bakesale.org_description}</p> */}

                            <img
                                onClick={handleDetailView}
                                key={bakesale.id}
                                src={bakesale.org_image}
                                alt={bakesale.org_name}
                                className={classes.bakesaleImg}
                            />

                            {user.id == bakesale.user_id ?

                                <OpenDialog
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="confirm-dialog"
                                    title="edit bakesale"
                                    callback={handleClickEdit}
                                >
                                    <EditBakesale />
                                </OpenDialog>

                                :
                                null}

                        </div>


                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}




export default ItemBakesale;
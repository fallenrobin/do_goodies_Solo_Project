import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditTreat from '../EditTreat/EditTreat';

//MUI for card
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
        price: {
            backgroundColor: '#BFEEB7',
            color: 'black',
            border: '1px transparent',
            borderRadius: '12px',
            marginLeft: '10px',
            padding: '3px'
        },
        treatImg: {
            maxWidth: '100%',
            height: '20em',
            width: '20em',
            objectFit: 'cover',
            borderRadius: '5px',
        }
    }),
);





function ItemTreat({ treat }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);


    const classes = useStyles(); //for card


    const handleClickEdit = () => {
        //treat saga will update edit reducer and open dialog
        dispatch({
            type: 'CLICK_EDIT_TREAT',
            payload: {
                treat
            },
        });
    }

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
                    className={classes.root} variant="outlined"
                >

                    <CardContent >
                        <>
                            <div >
                                <h3
                                    onClick={handleDetailView}
                                >{treat.treat_name}
                                    <span className={classes.price}>
                                        {treat.price}</span>
                                </h3>
                            </div>

                            <img
                                onClick={handleDetailView}
                                src={treat.treat_image}
                                alt={treat.treat_name}
                                className={classes.treatImg}
                            />

                            {user.id == treat.user_id ?

                                <OpenDialog
                                    aria-labelledby="confirm-dialog"
                                    title="edit treat"
                                    callback={handleClickEdit}
                                >
                                    <EditTreat />
                                </OpenDialog>

                                :
                                null}
                        </>

                    </CardContent>
                </Card>

            </Grid>
        </>
    )
}




export default ItemTreat;
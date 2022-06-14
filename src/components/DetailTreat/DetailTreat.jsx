import { HashRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

//MUI for card
import {
    makeStyles,
    Card,
    CardContent,
    Grid,
    Button
} from '@material-ui/core';


const useStyles = makeStyles({
    card: {
        width: '97%',
        display: 'block',
        margin: 'auto'
    },
    price: {
        backgroundColor: '#BFEEB7',
        color: 'black',
        border: '1px transparent',
        borderRadius: '12px',
        marginLeft: '10px',
        padding: '3px'
    },
    btn: {
        backgroundColor: '#F8D9D6',
        color: 'black'
    },
    treatImg: {
        height: '20em',
        width: '95%',
        objectFit: 'cover',
        borderRadius: '5px',
    }
})



function DetailTreat() {

    const treat = (useSelector(store => store.singleTreatReducer))
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {// asks for one treat from DB on page load
        dispatch({
            type: 'FETCH_TREAT_DETAIL',
            payload: id
        });
    }, []);

    console.log('in details page... selected treat data:', treat[0]);
    // console.log('should say treat name:', treat[0]?.treat_name);


    return (

        <>
            <Grid
                className={classes.card}
                align="center"
                container
            >
                <div style={{ height: '60px' }}></div>

                <Grid item sm={10}>
                    <Card
                        // styles={classes.card} 
                        variant="outlined">

                        <CardContent>

                            <div key={treat[0]?.id} >
                                <h3>{treat[0]?.treat_name}
                                    <span className={classes.price}>{treat[0]?.price}</span>
                                </h3>
                                <img alt={treat?.treat_name}
                                    src={treat[0]?.treat_image}
                                    className={classes.treatImg}
                                />

                                <p className="descriptionText">
                                    {treat[0]?.treat_description}
                                </p>
                            </div>

                            <Button
                                variant="contained"
                                className={classes.btn}
                                onClick={() => { history.push('/treatList') }}>
                                Back to all treats
                            </Button>

                        </CardContent>
                    </Card>

                </Grid>
                <div style={{ height: '60px' }}></div>

            </Grid>
        </>

    )
}


export default DetailTreat;
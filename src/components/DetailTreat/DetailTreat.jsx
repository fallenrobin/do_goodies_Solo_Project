import { HashRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

/*/MUI for card
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';
import { ClassNames } from '@emotion/react';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 100,
            height: 200,
        },
    }),
);
*/

function DetailTreat() {

    const treat = (useSelector(store => store.treatReducer))
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {// asks for one treat from DB on page load
        dispatch({
            type: 'FETCH_TREAT_DETAIL',
            payload: id //CHANGED BACK FROM HARDCODED!! 
        });
    }, []);

    console.log('in details page... selected treat data:', treat[0]);
    console.log('should say treat name:', treat[0]?.treat_name);


    return (

        <>
            {/* <Grid
                align="center"
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                {/* <Grid item xs={4}> 
                    <Card style={{minWidth: 300, maxWidth: 450}} variant="outlined">
                        <CardContent> */}

            <div key={id} >
                {/* <Typography variant="h4"> */}
                <h3>{treat[0]?.treat_name}</h3>
                {/* </Typography > */}
                <img alt={treat?.treat_name} src="https://fakeimg.pl/400x400/" />

                {/* <Typography variant="h5"> */}
                <p className="descriptionText">{treat[0]?.treat_description}</p>
                {/* </Typography> */}
            </div>

            <button style={{ width: '15%' }} variant="outlined" color="primary"
                onClick={() => { history.push('/treatList') }}>Back to all treats</button>
            {/* button returns user to movie list; subtle so as not to detract visually from movie*/}
            {/* </CardContent>
                    </Card>
                </Grid>
            </Grid> */}
        </>

    )
}


export default DetailTreat;
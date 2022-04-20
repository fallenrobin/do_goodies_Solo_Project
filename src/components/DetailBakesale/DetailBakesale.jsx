import { HashRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

//MUI for card
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';
// import { ClassNames } from '@emotion/react';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: 100,
            height: 200,
        },
    }),
);


function DetailBakesale() {

    const bakesale = (useSelector(store => store.singleBakesaleReducer))
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {// asks for one bakesale from DB on page load
        dispatch({
            type: 'FETCH_BAKESALE_DETAIL',
            payload: id
        });
    }, []);

    console.log('in details page... selected bakesale data:', bakesale[0]);
    console.log('should say bakesale name:', bakesale[0]?.org_name);


    return (

        <>
            <Grid
                align="center"
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={4}>
                    <Card style={{ minWidth: 300, maxWidth: 450 }} variant="outlined">
                        <CardContent>

                            <div key={bakesale[0]?.id} >
                                <Typography variant="h4">
                                <h3>{bakesale[0]?.treat_name}</h3>
                                </Typography >
                                <img alt={bakesale?.org_name} src="https://fakeimg.pl/400x400/" />

                                <Typography variant="h5">
                                <p className="descriptionText">{bakesale[0]?.org_description}</p>
                                </Typography>
                            </div>

                            <Button variant="outlined" color="primary"
                                onClick={() => { history.push('/treatList') }}>Back to all bakesales</Button>
                            {/* button returns user to movie list; subtle so as not to detract visually from movie*/}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}



export default DetailBakesale;
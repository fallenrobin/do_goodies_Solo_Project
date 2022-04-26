import { HashRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

//MUI for card
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';
// import { ClassNames } from '@emotion/react';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        width: 100,
        height: 200,
        marginTop: '30px'
    },
    img: {
        width: 150,
        height: 150,
    }
})


function DetailBakesale() {

    const bakesale = (useSelector(store => store.singleBakesaleReducer))
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();


    useEffect(() => {// asks for one bakesale from DB on page load
        dispatch({
            type: 'FETCH_BAKESALE_DETAIL',
            payload: id
        });
    }, []);

    // console.log('in details page... selected bakesale data:', bakesale[0]);
    // console.log('should say bakesale name:', bakesale[0]?.org_name);


    return (

        <>
            <Grid
                className={classes.root}
                align="center"
                container
                direction="column"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <Card style={{ minWidth: 320, maxWidth: 450 }} variant="outlined">
                        <CardContent>

                            <div key={bakesale[0]?.id} >

                                {/* <h3>{bakesale[0]?.treat_name}</h3> */}
                                <h3>{bakesale[0]?.org_name}</h3>


                                <img className={classes.img} alt={bakesale[0]?.org_name} src={bakesale[0]?.org_image} />

                                <p className="descriptionText">{bakesale[0]?.org_description}</p>
                                <p>Website: <a href={bakesale[0]?.org_website}>{bakesale[0]?.org_website}</a></p>
                                <p>Fundraising goal: {bakesale[0]?.fundraising_goal}</p>
                                {/* TODO add edit (conditional render)
                                    TODO turn this into full screen
                                    TODO add fundraising progress bar?
                                    TODO link this to a dispatch, saga etc
                                    TODO use params for detail view
                                    */}
                            </div>

                            <Button variant="outlined" color="primary"
                                onClick={() => { history.goBack() }}>Back</Button>
                            {/* button returns user to movie list; subtle so as not to detract visually from movie*/}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}



export default DetailBakesale;
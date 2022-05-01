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

//for progress bar
import ProgressBar from '../ProgressBar/ProgressBar';
import ZeroProgress from '../ProgressBar/ZeroProgress/ZeroProgress';


const useStyles = makeStyles({
    card: {
        width: 375,
        height: 500,
        marginTop: '30px'
    },
    img: {
        width: 250,
        height: 250,
    },
    fundraising: {
        backgroundColor: '#BFEEB7',
        color: 'black',
        border: '1px transparent',
        borderRadius: '12px',
        marginLeft: '10px',
        padding: '3px'
    },
    treatBubble: {
        backgroundColor: '#D3D3D3',
        padding: '5px',
        borderRadius: '12px'
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

    // determine if we should render the treats
    const treatRender = () => {
        if (bakesale[0]?.org_name === 'Second Harvest') {
            // need to return JSX
            return <p>Bakesale treats:  
                <span className={classes.treatBubble}> #infiniteLoops</span></p>;
        } else {
            // need to return JSX
            return <p>Bakesale treats:  
            <span className={classes.treatBubble}> #vanillaJavaChipt</span></p>;
        }
    }

    const progressRender = () => {
        if (bakesale[0]?.org_name != 'Second Harvest') {
            // need to return JSX
            return <ProgressBar />;
        } else {
            // need to return JSX
            return <ZeroProgress />
        }
    };

    return (

        <>
            <Grid
                className={classes.card}
                align="center"
                container
                direction="column"
                alignItems="center"
            >
                <Grid item s={5}>
                    <Card styles={classes.card} variant="outlined">
                        <CardContent>

                            <div key={bakesale[0]?.id} >

                                {/* <h3>{bakesale[0]?.treat_name}</h3> */}
                                <h3>{bakesale[0]?.org_name}</h3>


                                <img className={classes.img} alt={bakesale[0]?.org_name} src={bakesale[0]?.org_image} />

                                <p className="descriptionText">{bakesale[0]?.org_description}</p>
                                <p>Website: <a href={bakesale[0]?.org_website}>{bakesale[0]?.org_website}</a></p>

                                {treatRender()}

                                {/* start of green bubble */}
                                <div className={classes.fundraising}>

                                    <p>Funds raised: ${bakesale[0]?.fundraising_current} of ${bakesale[0]?.fundraising_goal}</p>
                                    {/* 
                                    TODO turn this into full screen
                                    TODO link this to a dispatch, saga etc
                                    TODO use params for detail view
                                    */}

                                    {progressRender()}


                                </div>
                            </div>

                            <Button variant="outlined" color="primary"
                                style={{ marginTop: '20px' }}
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

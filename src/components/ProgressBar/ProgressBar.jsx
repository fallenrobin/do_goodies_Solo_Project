//for progress bar
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';


function ProgressBar() {

    const [progress, setProgress] = React.useState(0);


    //to do with progress bar
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 45);
            });
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);


    return (

        <LinearProgress variant="determinate" value={progress} />

    )
}

export default ProgressBar;



// QUESTION

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


const useStyles = makeStyles({
    card: {
        width: 400,
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

                                <div className={classes.fundraising}>

                                    <p>Fundraising goal: ${bakesale[0]?.fundraising_goal}</p>
                                    {/* 
                                    TODO turn this into full screen
                                    TODO link this to a dispatch, saga etc
                                    TODO use params for detail view
                                    */}

                                    <ProgressBar />

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

QUESTION

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemBakesale from '../ItemBakesale/ItemBakesale';
import OpenDialog from '../OpenDialog/OpenDialog';



import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormBakesale from '../FormBakesale/FormBakesale';


function ListBakesale() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const bakesales = useSelector((store) => store.bakesaleReducer);
    const history = useHistory();

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_BAKESALES' });

    }, []);

    // console.log('after useEffect', bakesales);

    return (
        <main>
            <section>
                <Grid
                    container
                    spacing={2}
                    // margin-top="20px"TODO give top of Grid margin to avoid button??
                    direction="column"
                    alignItems="center"
                // style={{ minHeight: '100vh' }} does not help
                // style={{ marginBottom: '100px' }} does not help
                >

                    {user.id ?

                        <OpenDialog
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="confirm-dialog"
                            title="add bakesale"
                        >
                            <FormBakesale />
                            {/* children */}
                        </OpenDialog>

                        :
                        null}

                    {bakesales?.map((bakesale) => {
                        return ( //loops thru array of treats to create each treat item
                            <ItemBakesale
                                key={bakesale.id}
                                bakesale={bakesale}
                            />);
                    })}

                    {/* <div style={{ height: '60px' }}></div> */}

                </Grid>
            </section>
        </main>

    );
}

export default ListBakesale;
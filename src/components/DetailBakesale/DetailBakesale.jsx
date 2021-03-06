import { HashRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import BakerCard from '../BakerCard/BakerCard';

//MUI for card
import {
    makeStyles,
    Card,
    CardContent,
    Grid,
    Button,
    Typography
} from '@material-ui/core';

//for progress bar
import ProgressBar from '../ProgressBar/ProgressBar';
import ZeroProgress from '../ProgressBar/ZeroProgress/ZeroProgress';


const useStyles = makeStyles({
    card: {
        width: 375,
        height: 500,
        marginTop: '1em'
    },
    fundraising: {
        backgroundColor: '#BFEEB7',
        color: 'black',
        border: '1px transparent',
        borderRadius: '12px',
        width: '90%',
        padding: '3px'
    },
    treatBubble: {
        backgroundColor: '#D3D3D3',
        padding: '5px',
        borderRadius: '12px',
        marginLeft: '1em'
    },
    roundImg: {
        width: "60px",
        height: "60px",
        borderRadius: "400" / "2",
        border: "1px solid gray",
        marginLeft: '2em'
    },
    bakerBubble: {
        backgroundColor: '#D3D3D3',
        padding: '5px',
        borderRadius: '12px'
    },
    btn: {
        backgroundColor: '#F8D9D6',
        color: 'black',
        margin: '.5em'
    },
    bakesaleImg: {
        height: '12em',
        width: '95%',
        objectFit: 'cover',
        borderRadius: '5px',
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
            return <>
                <p>Treats:
                    <span className={classes.treatBubble}>
                        rubyOnWhales
                    </span></p>
                <p><span className={classes.treatBubble}>
                    vanillaJavaChipt
                </span></p>
            </>
        } else {
            // need to return JSX
            return <p>Treats:
                <span className={classes.treatBubble}>
                    infiniteLoops
                </span></p>
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
                align="center"
                container
                style={{ display: 'block' }}
            >
                <Grid
                    className={classes.card}
                    item sm={12}>
                    <Card
                        styles={classes.card} variant="outlined">

                        <CardContent style={{ display: 'contents' }}>

                            <div key={bakesale[0]?.id} >

                                <Typography
                                    variant='h4'
                                    style={{ padding: '.5em' }}
                                >
                                    {bakesale[0]?.org_name}
                                </Typography>


                                <img
                                    className={classes.bakesaleImg}
                                    alt={bakesale[0]?.org_name}
                                    src={bakesale[0]?.org_image}
                                />

                                <Typography
                                    className="descriptionText"
                                    variant='body1'
                                    style={{ padding: '.5em' }}
                                >
                                    {bakesale[0]?.org_description}
                                </Typography>
                                <a href={bakesale[0]?.org_website}>
                                    VISIT THE WEBSITE
                                </a>

                                <div className={classes.userInfo}>
                                    <BakerCard
                                        bakesale={bakesale[0]} />
                                </div>
                                <div>
                                    {treatRender()}
                                </div>




                                {/* start of green bubble */}
                                <div className={classes.fundraising}>

                                    <p>Funds raised: ${bakesale[0]?.fundraising_current} of ${bakesale[0]?.fundraising_goal}</p>

                                    {progressRender()}


                                </div>
                            </div>

                            <Button
                                variant="contained"
                                className={classes.btn}
                                onClick={() => { history.goBack() }}>
                                Back to all bakesales
                            </Button>
                            {/* button returns user to movie list; subtle so as not to detract visually from movie*/}
                        </CardContent>
                    </Card>
                </Grid>
                <div style={{ height: '60px' }}></div>
            </Grid>
        </>

    )
}

export default DetailBakesale;

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import BakesaleAddTreats from '../BakesaleAddTreats/BakesaleAddTreats';
import swal from 'sweetalert';

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#F8D9D6',
        color: 'black'
    },
    addBakesale: {
        position: "fixed",
        top: "3px",
        left: "5px"
    }
})

function FormBakesale() {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();


    const [bakesaleName, setBakesaleName] = useState('');
    const [bakesaleDescription, setBakesaleDescription] = useState('');
    const [bakesaleImage, setBakesaleImage] = useState('');
    const [website, setWebsite] = useState('');
    const [goal, setGoal] = useState('');


    const handleNewBakesale = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_BAKESALE',
            payload: {
                org_name: bakesaleName,
                org_description: bakesaleDescription,
                org_image: bakesaleImage,
                org_website: website,
                fundraising_goal: goal
                // add treats...
            },
        });
        console.log(bakesaleName, bakesaleDescription, bakesaleImage, website, goal);
        setBakesaleName('');
        setBakesaleDescription('');
        setBakesaleImage('');
        setWebsite('');
        setGoal('');
        swal("Bakesale created!", "Get that bread!", "success", {
            button: "Close",
        });
    }

    const handleAutofill = () => {
        // NOTE set up auto fill for demo, using Second Harvest
        setBakesaleName('Second Harvest');
        setBakesaleDescription('We are a member of Feeding America, a nationwide network of more than 200 food banks that helps feed people across the country.');
        setBakesaleImage('/images/secondHarvest.jpeg');
        setWebsite('www.2harvest.org');
        setGoal('$30');
    }

    return (

        <>
            <form onSubmit={handleNewBakesale}>
                <h2 onClick={handleAutofill}>
                    Create New Bakesale</h2>

                <div>
                    <label htmlFor="bakesaleName">
                        Name of organization to benefit:
                        <input
                            type="text"
                            name="treat"
                            value={bakesaleName}
                            required
                            onChange={(event) => setBakesaleName(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="bakesaleDescription">
                        Describe this organization:
                        <input
                            type="bakesaleDescription"
                            name="bakesaleDescription"
                            value={bakesaleDescription}
                            maxLength={255}
                            placeholder="What does this organization do?"
                            required
                            onChange={(event) => setBakesaleDescription(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="bakesaleImage">
                        Picture:
                        <input
                            type="text"
                            name="bakesaleImage"
                            value={bakesaleImage}
                            maxLength={255}
                            placeholder="Paste image link"
                            onChange={(event) => setBakesaleImage(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="website">
                        Website:
                        <input
                            type="text"
                            name="website"
                            value={website}
                            // to do: adjust width
                            required
                            placeholder="Where can people learn more?"
                            onChange={(event) => setWebsite(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="goal">
                        Fundraising goal:
                        <input
                            type="text"
                            name="goal"
                            value={goal}
                            placeholder="How much money are you aiming to fundraise?"
                            onChange={(event) => setGoal(event.target.value)}
                        />
                    </label>
                </div>
                <BakesaleAddTreats />
                <div>

                    {/* <input className="btn" type="submit" name="submit" value="Save" /> */}
                    <Button
                        variant="contained"
                        className={classes.btn}
                        type="submit"
                        name="submit">
                        Add Bakesale
                    </Button>
                </div>
            </form>
        </>
    );
}


export default FormBakesale;
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import BakesaleAddTreats from '../BakesaleAddTreats/BakesaleAddTreats';

const useStyles = makeStyles({
    btn: {
        backgroundColor: "#84C3C8",
        color: 'white',
        '&:hover': {
            backgroundColor: "#42929D"
        },
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
    const [goal, setGoal] = useState(0);


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
        // history.push(somewhere? or stay here);
    }

    return (

        <>
            <form onSubmit={handleNewBakesale}>
                <h2>Create New Bakesale</h2>

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
                            type="number"
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
                    <Button variant="contained" className={classes.btn}
                        type="submit" name="submit">Add Bakesale
                    </Button>
                </div>
            </form>
        </>
    );
}


export default FormBakesale;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import swal from 'sweetalert';
import BakesaleAddTreats from '../BakesaleAddTreats/BakesaleAddTreats';


const useStyles = makeStyles({
    btn: {
        backgroundColor: "#F8D9D6",
        color: 'black',
        margin: '3px',
        '&:hover': {
            backgroundColor: "#e75480"
        },
    },
    delete: {
        color: "#e75480"
    }
})

function EditBakesale() {

    const [bakesaleName, setBakesaleName] = useState('');
    const [bakesaleDescription, setBakesaleDescription] = useState('');
    const [bakesaleImage, setBakesaleImage] = useState('');
    const [website, setWebsite] = useState('');
    const [goal, setGoal] = useState(0);

    const dispatch = useDispatch();
    const classes = useStyles();

    const bakesale = (useSelector(store => store.editReducer.bakesale))

    const newBakesale = {
        id: bakesale?.id,
        org_name: bakesaleName,
        org_description: bakesaleDescription,
        org_image: bakesaleImage,
        org_website: website,
        fundraising_goal: goal
        // FIXME: deal with image validation? / set default in DB
    };

    // FIXME WARNING, maybe when website is entered on form?? react_devtools_backend.js:3973 Warning: A component is changing an uncontrolled input 
    //to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. 
    //Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

    const deleteConfirm = () => { //for clicking Delete button on list view
        console.log('clicked delete');
        swal({
            title: "Delete this bakesale?",
            text: "Once deleted, it's gone forever!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Bakesale deleted.", {
                        icon: "success",
                    });
                    dispatch({
                        type: 'DELETE_BAKESALE',
                        payload:
                            bakesale?.id
                    });
                    console.log('deleteConfirm payload would be', bakesale.id);
                } else {
                    swal("Your bakesale lives on");
                }
            });
    }

    const handleUpdate = () => {
        console.log('in handleUpdate Edit bakesale');
        event.preventDefault();
        console.log('clicked Save Changes, newBakesale should be:', newBakesale);
        dispatch({
            type: 'SUBMIT_EDIT_BAKESALE',
            payload:
                newBakesale
        });
        setBakesaleName('');
        setBakesaleDescription('');
        setBakesaleImage('');
        setWebsite('');
        setGoal('');
    }


    return (

        <form onSubmit={handleUpdate}>
            <h2>Edit Bakesale</h2>

            <div>
                <label htmlFor="bakesaleName">
                    Name of the organization:
                    <input
                        type="text"
                        name="bakesale"
                        value={bakesaleName}
                        placeholder={bakesale?.org_name}
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
                        placeholder={bakesale?.org_description}
                        required
                        onChange={(event) => setBakesaleDescription(event.target.value)}
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
                        // maxLength={255} what validation here? also set in DB
                        placeholder={bakesale?.org_website}
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
                        // maxLength={255} what validation here? also set in DB
                        placeholder={bakesale?.fundraising_goal}
                        onChange={(event) => setGoal(event.target.value)}
                    />
                </label>
            </div>
            <BakesaleAddTreats />

            <div>
                <Button className={classes.delete} onClick={() => { deleteConfirm() }} >Delete</Button>
                <Button variant="outlined" className={classes.btn} type="submit" name="submit" value="Update">Update</Button>

            </div>
        </form>
    );
}



export default EditBakesale;
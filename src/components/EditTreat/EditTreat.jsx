import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OpenDialog from '../OpenDialog/OpenDialog';
import { useDispatch } from 'react-redux';



function EditTreat() {

    const [treatName, setTreatName] = useState('');
    const [treatDescription, setTreatDescription] = useState('');
    const [treatImage, setTreatImage] = useState('');
    const [price, setPrice] = useState();
    const dispatch = useDispatch();

    const treat = useSelector(store => store.editReducer.treat);

    const deleteConfirm = () => {
        <ConfirmDialog
            title="Delete Treat?"
            open={confirmOpen}
            setOpen={setConfirmOpen}
            onConfirm={deleteTreat}
        >
            Are you sure you want to delete this treat?
        </ConfirmDialog>
    }

    const deleteTreat = () => {
        console.log('confirmed delete');
    }

    // dispatch({
    //     type: 'UPDATE_TREAT',
    //     payload: {
    //         treat
    //     },
    // });

    // dispatch({
    //     type: 'DELETE_TREAT',
    //     payload: {
    //         treat
    //     },
    // });
    const handleUpdate = () => {
        console.log('in handleUpdate Edit treat');
    }
    const setEditMode = () => {
        dispatch({
            type: 'SET_EDIT_MODE',
            payload: {
                editMode: false
            },
        });
    }


    return (

        <form onSubmit={handleUpdate}>
            <h2>Edit Treat</h2>

            <div>
                <label htmlFor="treatName">
                    Name of treat:
                    <input
                        type="text"
                        name="treat"
                        value={treatName}
                        placeholder={treat.treat_name}
                        required
                        onChange={(event) => setTreatName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="treatDescription">
                    Describe this treat:
                    <input
                        type="treatDescription"
                        name="treatDescription"
                        value={treatDescription}
                        maxLength={255}
                        placeholder={treat.treat_description}
                        required
                        onChange={(event) => setTreatDescription(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="treatImage">
                    Picture:
                    <input
                        type="text"
                        name="treatImage"
                        value={treatImage}
                        maxLength={255}
                        placeholder="Paste image link"
                        onChange={(event) => setTreatImage(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="price">
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={price}
                        // to do: adjust width
                        // maxLength={255} what validation here? also set in DB
                        placeholder={treat.price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <button onClick={setEditMode} className="btn">Cancel</button>
                <input className="btn" type="submit" name="submit" value="Update" />
                <button onClick={() => { deleteConfirm }} className="btn">Delete</button>

            </div>
        </form>
    );
}



export default EditTreat;
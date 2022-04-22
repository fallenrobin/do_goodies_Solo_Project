import React, { useState }from 'react';
import { useSelector } from 'react-redux';


function EditTreat() {

    const [treatName, setTreatName] = useState('');
    const [treatDescription, setTreatDescription] = useState('');
    const [treatImage, setTreatImage] = useState('');
    const [price, setPrice] = useState();

    const treat = useSelector(store => store.editReducer.treat);


    return (

        <form >
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
                        // required
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
                <button onClick={() => { setEditing(false) }} className="btn">Cancel</button>
                <input className="btn" type="submit" name="submit" value="Update" />
            </div>
        </form>
    );
}



export default EditTreat;
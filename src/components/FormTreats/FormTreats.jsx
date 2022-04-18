import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';



function FormTreats() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [treatName, setTreatName] = useState('');
    const [treatDescription, setTreatDescription] = useState('');
    const [treatImage, setTreatImage] = useState('');
    const [price, setPrice] = useState(0);

    const handleNewTreat = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_TREAT',
            payload: {
                treat_name: treatName,
                treat_description: treatDescription,
                treat_image: treatImage,
                price: price
            },
        });
    }

    return (

        <>
            <div>FormTreats</div>

            <form onSubmit={handleNewTreat}>
                <h2>Create New Treat</h2>

                <div>
                    <label htmlFor="treatName">
                        Name of treat:
                        <input
                            type="text"
                            name="treat"
                            value={treatName}
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
                            placeholder="enter image link"
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
                            // value={price}
                            // maxLength={255} what validation here? also set in DB
                            placeholder="enter dollar amount"
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button onClick={() => { history.push('/user') }} className="btn">Cancel</button>
                    <input className="btn" type="submit" name="submit" value="Add treat" />
                </div>
            </form>
        </>
    );
}


export default FormTreats;
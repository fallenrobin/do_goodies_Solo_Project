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
    const newTreat = {
        treat_name: treatName,
        treat_description: treatDescription,
        treat_image: treatImage,
        price: price
    };

    const handleNewTreat = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TREAT',
            payload: 
                newTreat
        });
        // console.log(treatName, treatDescription, treatImage, price);
        setTreatName('');
        setTreatDescription('');
        setTreatImage('');
        setPrice('');

    }

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <>
            <form onSubmit={handleNewTreat}>
                <h2>Create New Treat</h2>

                <div>
                    <label htmlFor="treatName">
                        Name of treat:
                        <input
                            type="text"
                            name="treat"
                            value={treatName}
                            // required
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
                            placeholder="What's it all about?"
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
                            placeholder="Enter dollar amount with or without decimals"
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    {/* <button onClick={history.push('/treatList')} className="btn">Cancel</button> */}
                    <input className="btn" type="submit" name="submit" value="Add treat" />
                </div>
                {/* <button style={{justify:'center'}} onClick={() => {
                    setOpen(false)}} className="btn">
                        Go to Treat List</button> */}
            </form>
        </>
    );
}


export default FormTreats;
import React from 'react'
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { NestedValue, useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { number } from 'prop-types';

const regMatch = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;


const schema = yup.object().shape({
    treat_name: yup.string().required().min(3).max(255),
    treat_description: yup.string().min(3).max(255),
    treat_image: yup.string()
        .matches(regMatch, "Website should be a valid URL"),
    price: yup.number().positive().required()
})



function FormTreats() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    // const yup = yup;

    // const [treatName, setTreatName] = useState('');
    // const [treatDescription, setTreatDescription] = useState('');
    // const [treatImage, setTreatImage] = useState('');
    // const [price, setPrice] = useState(0);

    // const handleNewTreat = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: 'ADD_TREAT',
    //         payload: {
    //             treat_name: treatName,
    //             treat_description: treatDescription,
    //             treat_image: treatImage,
    //             price: price
    //         },
    //     });
    //     // console.log(treatName, treatDescription, treatImage, price);
    //     setTreatName('');
    //     setTreatDescription('');
    //     setTreatImage('');
    //     setPrice('');
    //     // history.push('/treatList');
    // }

    const submitForm = (data) => {
        console.log(data);
    }

    return (

        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <h2>Create New Treat</h2>


                <label htmlFor="treatName">
                    Name of treat:
                    <input
                        type="text"
                        name="treat"
                        // value={treatName}
                        required
                        // onChange={(event) => setTreatName(event.target.value)}
                        ref={register}
                    />
                    <p>{errors.treat?.message}</p>
                </label>




                <label htmlFor="treatDescription">
                    Describe this treat:
                    <input
                        type="treatDescription"
                        name="treatDescription"
                        // value={treatDescription}
                        maxLength={255}
                        placeholder="What's it all about?"
                        // required
                        // onChange={(event) => setTreatDescription(event.target.value)}
                        ref={register}
                    />
                    <p>{errors.treatDescription?.message}</p>
                </label>




                <label htmlFor="treatImage">
                    Picture:
                    <input
                        type="text"
                        name="treatImage"
                        // value={treatImage}
                        maxLength={255}
                        placeholder="Paste image link"
                        // onChange={(event) => setTreatImage(event.target.value)}
                        ref={register}
                    />
                    <p>{errors.treatImage?.message}</p>

                </label>


                <label htmlFor="price">
                    Price:
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter dollar amount with or without decimals"
                        // onChange={(event) => setPrice(event.target.value)}
                        ref={register}
                    />
                    <p>{errors.price?.message}</p>

                </label>

                <div>
                    <button onClick={() => { history.push('/user') }} className="btn">Cancel</button>
                    <input className="btn" type="submit" name="submit" value="Add treat" />
                </div>
                <button style={{ justify: 'center' }} onClick={() => {
                    history.push('/treatList')
                }} className="btn">
                    Go to Treat List</button>
            </form>
        </>
    );
}


export default FormTreats;
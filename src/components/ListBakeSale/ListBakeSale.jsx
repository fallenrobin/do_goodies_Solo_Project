import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemBakesale from '../ItemBakesale/ItemBakesale';



import Grid from '@material-ui/core/Grid';


function ListBakesale() {

    const dispatch = useDispatch();
    const bakesales = useSelector((store) => store.bakesaleReducer);
    const history = useHistory();

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_BAKESALES' });

    }, []);

    console.log('after useEffect', bakesales);

    return (
        <main>
            <h3 className="header">I am bakesale list</h3>
            <section>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    style={{ minHeight: '100vh' }}>

                {bakesales?.map((bakesale, i) => {
                    return ( //loops thru array of treats to create each treat item
                        <ItemBakesale
                            key={i}
                            bakesale={bakesale}
                        />);
                })}

                <button onClick={ () => {history.push('/bakesaleForm')}}>Add Bakesale</button>

                </Grid>
            </section>
        </main>

    );
}

export default ListBakesale;
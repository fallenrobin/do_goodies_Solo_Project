import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



// import Grid from '@material-ui/core/Grid';


function ListTreat() {

    const dispatch = useDispatch();
    const treats = useSelector(store => store.treats);

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_TREATS' });
        console.log(treats);
    }, []);

    return (
        <main>
            <h3 className="header" >I am treat list</h3>
            <section>
                {/* <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="flex-start"
                    justify="flex-start"
                    style={{ minHeight: '100vh' }}> */}
                    {/* {movies.map((movie) => {
                        return ( //loops thru array of movies to create each movie card
                            <MovieItem
                                movie={movie}
                            />);
                    })} */}

                {/* </Grid> */}
            </section>
        </main>

    );
}

export default ListTreat;
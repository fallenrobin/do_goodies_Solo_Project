import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemTreat from '../ItemTreat/ItemTreat';
import FormDialog from '../FormDialog/FormDialog'
import FormTreats from '../FormTreats/FormTreats';

import Grid from '@material-ui/core/Grid';



function ListTreat() {

    const dispatch = useDispatch();
    const treats = useSelector((store) => store.treatReducer);
    const user = useSelector((store) => store.user);

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_TREATS' });

    }, []);

    console.log('after useEffect', treats);

    return (
        <section >
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center">

                {user.id ?
                    <>
                        <div
                            style={{ height: '1em' }}>
                        </div>

                        < FormDialog
                            aria-labelledby="confirm-dialog"
                            title="add treat"
                        >
                            <FormTreats />
                        </FormDialog>
                        <div
                            style={{ height: '1em' }}>
                        </div>
                    </>
                    :
                    null}

                {treats?.map((treat) => {
                    return ( //loops thru array of treats to create each treat item
                        <ItemTreat
                            key={treat.id}
                            treat={treat}
                        />);
                })}
                <div style={{ height: '60px' }}></div>
            </Grid>

        </section>
        // </Box>
    );
}

export default ListTreat;
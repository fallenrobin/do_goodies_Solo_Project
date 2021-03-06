import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemBakesale from '../ItemBakesale/ItemBakesale';
import FormDialog from '../FormDialog/FormDialog'


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormBakesale from '../FormBakesale/FormBakesale';


function ListBakesale() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const bakesales = useSelector((store) => store.bakesaleReducer);
    const history = useHistory();

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_BAKESALES' });

    }, []);

    // console.log('after useEffect', bakesales);

    return (

        <Grid
            container
            spacing={2}
            // margin-top="20px"TODO give top of Grid margin to avoid button??
            direction="column"
            alignItems="center"
        // style={{ minHeight: '100vh' }} does not help
        // style={{ marginBottom: '100px' }} does not help
        >

            {user.id ?
                <>
                    <div
                        style={{ height: '1em' }}>
                    </div>
                    <FormDialog
                        open={open}
                        // onClose={() => setOpen(false)}
                        aria-labelledby="confirm-dialog"
                        title="add bakesale"
                    >
                        <FormBakesale />
                    </FormDialog>

                    <div
                        style={{ height: '1em' }}>
                    </div>
                </>

                :
                null}

            {bakesales?.map((bakesale) => {
                return ( //loops thru array of treats to create each treat item
                    <ItemBakesale
                        key={bakesale.id}
                        bakesale={bakesale}
                    />);
            })}

            <div style={{ height: '60px' }}></div>

        </Grid>


    );
}

export default ListBakesale;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemBakesale from '../ItemBakesale/ItemBakesale';
import OpenDialog from '../OpenDialog/OpenDialog';



import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormBakesale from '../FormBakesale/FormBakesale';


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
            <section>
                <Grid
                    container
                    spacing={2}
                    // margin-top="20px"TODO give top of Grid margin to avoid button??
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}>
                    <OpenDialog
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="confirm-dialog"
                        title="add bakesale"
                    // FormBakesale={FormBakesale}
                    //FIXME can dialog be generic, to pass in FormBakesale?? Currently shows FormTreats
                    >
                        <FormBakesale /> 
                        {/* children */}
                    </OpenDialog>

                    {bakesales?.map((bakesale, i) => {
                        return ( //loops thru array of treats to create each treat item
                            <ItemBakesale
                                key={i}
                                bakesale={bakesale}
                            />);
                    })}

                    {/* FIXME make bottom of last card float above nav bar */}

                    {/* <Button variant="outlined" color="primary"
                        onClick={() => { history.push('/bakesaleForm') }}>Add Bakesale</Button> 
                        redundant, if using OpenDialog */}

                </Grid>
            </section>
        </main>

    );
}

export default ListBakesale;
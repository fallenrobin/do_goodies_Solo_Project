import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemTreat from '../ItemTreat/ItemTreat';
import OpenDialog from '../OpenDialog/OpenDialog';
import FormTreats from '../FormTreats/FormTreats';
import Box from '@material-ui/core/Box';




import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



function ListTreat() {

    const dispatch = useDispatch();
    const treats = useSelector((store) => store.treatReducer);
    const user = useSelector((store) => store.user);
    const history = useHistory();
    // const background = { background };

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_TREATS' });

    }, []);

    console.log('after useEffect', treats);

    return (
        // <Box >
            <section >
                <Grid
                    container
                    spacing={2}
                    // margin-top="20px"TODO give top of Grid margin to avoid button??
                    direction="column"
                    alignItems="center"
                    // style={{ minHeight: '100vh' }}
                    // marginBottom='100px' does not work
                >

                    {user.id ?

                        < OpenDialog
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="confirm-dialog"
                            title="add treat"
                        >
                            <FormTreats />
                        </OpenDialog>

                        :
                        null}

                    {treats?.map((treat) => {
                        return ( //loops thru array of treats to create each treat item
                            <ItemTreat
                                key={treat.id}
                                treat={treat}
                            />);
                    })}

                </Grid>

            </section>
        // </Box>
    );
}

export default ListTreat;
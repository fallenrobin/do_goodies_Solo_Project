import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// [
//     'cookie',
//     'cupcake',
//     'ruby on whales',
//     'stretch rolls',
//     'fizz buns',
// ];

// treat, selectedTreats, theme //from params of getStyles, below

function getStyles(treat, selectedTreats, theme) {
    return {
        fontWeight:
            selectedTreats.indexOf(treat) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function BakesaleAddTreats() {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedTreats, setSelectedTreats] = React.useState([]);
    // TODO make only user's treats selectable!
    const [selectedTreatId, setSelectedTreatId] = React.useState([]);

    const dispatch = useDispatch();

    const treats = useSelector((store) => store.treatReducer);

    useEffect(() => {//triggers saga getting all treats from DB on page load
        dispatch({ type: 'FETCH_TREATS' });
    }, []);

    const handleChange = (event) => {
        setSelectedTreats(event.target.value);
        // console.log('treats are', treats);
        // console.log('selected info is', event.target);
        grabTreatIDs();
    };

    const grabTreatIDs = () => {
        const tempIds = []
        {
            selectedTreats.map((treat) => (
                tempIds.push(treat.id)
            ))
        };
        // console.log(tempIds);
        setSelectedTreatId([tempIds]);
        console.log('selected ids should be:', selectedTreatId);
    }


    console.log('checking state after select:', selectedTreats); //shows React.useState capturing names
    

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-multiple-chip-label">Add treats</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedTreats}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value.id} label={value.treat_name} className={classes.chip} />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {treats
                        .map((treat) => (
                            <MenuItem key={treat.id} value={treat} name={treat.id} style={getStyles(treat.treat_name, treat.treat_name, theme)}>
                                {treat.treat_name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

        </div>
    );
}

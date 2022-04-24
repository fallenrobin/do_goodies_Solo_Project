import React from 'react';
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

// treat, treatName, theme //from params of getStyles, below

function getStyles(treat, treatName, theme) {
    return {
        fontWeight:
            treatName.indexOf(treat) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function BakesaleAddTreats() {
    const classes = useStyles();
    const theme = useTheme();
    const [treatName, setTreatName] = React.useState([]);
    const treats = useSelector((store) => store.treatReducer);
    // console.log('BAKESALE ADD TREATS checking data type of treats:', treats);


    const handleChange = (event) => {
        setTreatName(event.target.value);
    };


    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-multiple-chip-label">Add treats</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={treatName}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {treats
                        .map((treat) => (
                            <MenuItem key={treat.id} value={treat.treat_name} style={getStyles(treat.id, treat.treat_name, theme)}>
                                {treat.treat_name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

        </div>
    );
}
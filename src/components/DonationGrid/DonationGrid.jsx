import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';



const rowData = [
    {
        id: 1, date: '1/1/2022',
        orgName: 'World Central Kitchen',
        amount: '$12',
        // sent: false
    },
    {
        id: 2, date: '1/12/2022',
        orgName: 'Habitat for Humanity',
        amount: '$8',
        // sent: false
    },
    {
        id: 3, date: '1/15/2022',
        orgName: 'Self International',
        amount: '$16',
        // sent: false
    },
    {
        id: 4, date: '1/20/2022',
        orgName: 'World Central Kitchen',
        amount: '$11',
        // sent: false
    },
    {
        id: 5, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$18',
        // sent: false
    },
    {
        id: 6, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$6',
        // sent: false
    },
    {
        id: 7, date: '2/10/2022',
        orgName: 'World Central Kitchen',
        amount: '$9',
        // sent: false
    },
    {
        id: 8, date: '2/12/2022',
        orgName: 'Self International',
        amount: '$12',
        // sent: false
    },
    {
        id: 9, date: '2/20/2022',
        orgName: 'Planned Parenthood',
        amount: '$18',
        // sent: false
    },
    {
        id: 10, date: '2/24/2022',
        orgName: 'World Central Kitchen',
        amount: '$22',
        // sent: false
    },
    {
        id: 11, date: '2/25/2022',
        orgName: 'Planned Parenthood',
        amount: '$18',
        // sent: false
    },
    {
        id: 12, date: '2/28/2022',
        orgName: 'Self International',
        amount: '$9',
        // sent: false
    },
    {
        id: 13, date: '3/4/2022',
        orgName: 'World Central Kitchen',
        amount: '$19',
        // sent: false
    },
    {
        id: 14, date: '3/15/2022',
        orgName: 'Habitat for Humanity',
        amount: '$7',
        // sent: false
    },
    {
        id: 15, date: '3/20/2022',
        orgName: 'Self International',
        amount: '$26',
        // sent: false
    },
    {
        id: 16, date: '3/29/2022',
        orgName: 'World Central Kitchen',
        amount: '$31',
        // sent: false
    },
    {
        id: 17, date: '4/2/2022',
        orgName: 'Self International',
        amount: '$23',
        // sent: false
    },
    {
        id: 18, date: '4/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 19, date: '4/10/2022',
        orgName: 'World Central Kitchen',
        amount: '$30',
        // sent: false
    },
    {
        id: 20, date: '4/12/2022',
        orgName: 'World Central Kitchen',
        amount: '$20',
        // sent: false
    },
    {
        id: 21, date: '4/18/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 22, date: '4/20/2022',
        orgName: 'Self International',
        amount: '$15',
        // sent: false
    },
    {
        id: 23, date: '4/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 24, date: '4/21/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 25, date: '5/1/2022',
        orgName: 'Self International',
        amount: '$30',
        // sent: false
    },
    {
        id: 26, date: '5/1/2022',
        orgName: 'Habitat for Humanity',
        amount: '$20',
        // sent: false
    },
    {
        id: 27, date: '4/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 28, date: '1/20/2022',
        orgName: 'World Central Kitchen',
        amount: '$15',
        // sent: false
    },
    {
        id: 29, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 30, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 31, date: '1/1/2022',
        orgName: 'World Central Kitchen',
        amount: '$30',
        // sent: false
    },
    {
        id: 32, date: '1/12/2022',
        orgName: 'Habitat for Humanity',
        amount: '$20',
        // sent: false
    },
    {
        id: 33, date: '1/15/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 34, date: '5/1/2022',
        orgName: 'World Central Kitchen',
        amount: '$15',
        // sent: false
    },
    {
        id: 35, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 36, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
];

const columns = [
    {
        field: 'date',
        type: 'date',
        headerName: 'Date',
        width: 90,
        editable: true
    },
    {
        field: 'orgName',
        headerName: 'Organization',
        width: 190,
        editable: true
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 90,
        editable: true
    }
];


function DonationGrid() {

    const [state, setState] = useState(rowData);
    const history = useHistory();



    const handleCommit = (e) => {
        const array = state.map(r => {
            if (r.id === e.id) { //compares the record id to the edit id
                return { ...r, [e.field]: e.value } //if matching, replaces the old value
            } else {
                return { ...r } //if not saved, returns the array without changes
            }
        });
        setState(array); //sets state to changed / unchanged values
    }

    const [arrIds, setArrIds] = useState([]);// for delete: state for selected rows
    const handleDeleteAll = () => {
        //will need to dispatch to a Saga to set a reducer,
        //send delete query etc 
        console.log(arrIds);//shows ids of checkbox selected items
    }


    return (
        <div
            style={{ alignItems: 'center', marginTop: '5px' }}
            className="DonationGrid"
        >
            <Button
                onClick={() => { history.push('/about') }} 
                variant="contained"
                color="primary"
                style={{marginLeft:'1.3em'}}
            >
                Add new donation
            </Button>

            <Button
                onClick={handleDeleteAll}
                variant="contained"
                color="secondary"
                style={{marginLeft:'.5em'}}
            >
                Delete selected rows
            </Button>

            <div


                style={{ height: '85vh', width: '100vw', 
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(15px)' }}>

                <DataGrid
                    style={{ fontSize: 15 }}
                    onCellEditCommit={handleCommit}// saves changes upon 'enter' or 'tab'
                    checkboxSelection // makes checkboxes on left column
                    rows={rowData} columns={columns} // uses data above function; eventually needs Redux stores
                    // getRowId={(rowData) => rowData.id} Also id grabber, now obsolete... from past attempt?
                    onSelectionModelChange={(ids) => {
                        //for grabbing/setting state of ids of checked rows
                        setArrIds(ids);
                    }}
                    pageSize={12}
                    rowsPerPageOptions={[10]}
                />

            </div>
        </div>
    );
}



export default DonationGrid;


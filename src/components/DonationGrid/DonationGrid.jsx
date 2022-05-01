import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';


const rowData = [
    {
        id: 1, date: '1/1/2022',
        orgName: 'World Street Kitchen',
        amount: '$30',
        // sent: false
    },
    {
        id: 2, date: '1/12/2022',
        orgName: 'Habitat for Humanity',
        amount: '$20',
        // sent: false
    },
    {
        id: 3, date: '1/15/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 4, date: '1/20/2022',
        orgName: 'World Central Kitchen',
        amount: '$15',
        // sent: false
    },
    {
        id: 5, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 6, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 7, date: '2/10/2022',
        orgName: 'World Street Kitchen',
        amount: '$10',
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
        orgName: 'Second Harvest',
        amount: '$32',
        // sent: false
    },
    {
        id: 10, date: '1/20/2022',
        orgName: 'World Central Kitchen',
        amount: '$15',
        // sent: false
    },
    {
        id: 11, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 12, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 13, date: '1/1/2022',
        orgName: 'World Street Kitchen',
        amount: '$30',
        // sent: false
    },
    {
        id: 14, date: '1/12/2022',
        orgName: 'Habitat for Humanity',
        amount: '$20',
        // sent: false
    },
    {
        id: 15, date: '1/15/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 16, date: '1/20/2022',
        orgName: 'World Central Kitchen',
        amount: '$15',
        // sent: false
    },
    {
        id: 17, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 18, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 19, date: '1/1/2022',
        orgName: 'World Street Kitchen',
        amount: '$30',
        // sent: false
    },
    {
        id: 20, date: '1/12/2022',
        orgName: 'Habitat for Humanity',
        amount: '$20',
        // sent: false
    },
    {
        id: 21, date: '1/15/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 22, date: '1/20/2022',
        orgName: 'World Central Kitchen',
        amount: '$15',
        // sent: false
    },
    {
        id: 23, date: '1/22/2022',
        orgName: 'Planned Parenthood',
        amount: '$20',
        // sent: false
    },
    {
        id: 24, date: '2/5/2022',
        orgName: 'Self International',
        amount: '$25',
        // sent: false
    },
    {
        id: 25, date: '1/1/2022',
        orgName: 'World Street Kitchen',
        amount: '$30',
        // sent: false
    },
    {
        id: 26, date: '1/12/2022',
        orgName: 'Habitat for Humanity',
        amount: '$20',
        // sent: false
    },
    {
        id: 27, date: '1/15/2022',
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
        orgName: 'World Street Kitchen',
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
        id: 34, date: '1/20/2022',
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
        width: 200,
        editable: true
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 100,
        editable: true
    }
];


function DonationGrid() {

    const [state, setState] = useState(rowData);


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
            style={{ alignItems: 'center', marginTop:'5px'}}
            className="DonationGrid"
        >
            <Button
                // onClick={handleDeleteAll}
                variant="contained"
                color="primary"
            >
                Add new donation
            </Button>

            <Button
                onClick={handleDeleteAll}
                variant="outlined"
                color="secondary"
            >
                Delete selected rows
            </Button>

            <div style={{ height: '100vh', width: '100vw', backdropFilter: 'blur(15px)' }}>

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
            <div style={{height:'60px'}}></div>
        </div>
    );
}



export default DonationGrid;

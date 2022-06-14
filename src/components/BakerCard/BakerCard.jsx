import React from 'react';
import { Typography } from '@material-ui/core';
import './BakerCard.css';


function BakerCard({ bakesale }) {
    return (<>
        <Typography
            variant='h6'>
            Treats by {bakesale?.username}
        </Typography>
        <img
            className='bakerImg'
            src={bakesale?.user_pic} alt={bakesale?.username}
        />
    </>
    )
}

export default BakerCard
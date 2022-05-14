import { useState, Fragment } from 'react';
import IconButton from '@mui/material/IconButton';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';

export const ShowButton = () => {
    
    return(
        <Fragment>
            <IconButton color="primary" aria-label="add to shopping cart">
                <MedicalServicesOutlinedIcon />
            </IconButton>
        </Fragment>
    )
}
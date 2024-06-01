import * as React from 'react';
import Button from '@mui/material/Button';

function MuiButton(props){
    return(
        <Button onClick={props.onClick} variant="contained">{props.children}</Button>
    )
}

export default MuiButton;
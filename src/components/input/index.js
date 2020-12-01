import React, {Fragment} from 'react';

export default function Input(props){

    const {defaultVal} = props;

    return (
        <Fragment>
            <input value={defaultVal}></input>
        </Fragment>
    ) 
}
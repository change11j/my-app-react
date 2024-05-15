import React, {useState} from 'react';

const MyButton = ({count,onClick}) => {


    return (
        <button onClick={onClick}>
            clicked {count} times
        </button>
    );
};

export default MyButton;

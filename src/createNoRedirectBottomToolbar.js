import React from 'react';
import {
    Toolbar,
    SaveButton
} from 'react-admin';

export const CreateNoRedirectBottomToolbar = props => {
    return <Toolbar {...props}>
        <SaveButton
            {...props}
            redirect={false}
        />
    </Toolbar>
};
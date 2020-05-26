import React from 'react';
import {
    Toolbar,
} from 'react-admin';

import {CreateUserSaveButton} from './createUserSaveButton'

export const CreateUserBottomToolbar = props => {
    return <Toolbar {...props}>
        <CreateUserSaveButton
            {...props}
            label="СОХРАНИТЬ"
            redirect={false}
            submitOnEnter={true}
        />
    </Toolbar>
};
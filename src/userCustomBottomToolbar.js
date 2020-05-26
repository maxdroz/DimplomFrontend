import React from 'react';
import { SaveButton, Toolbar } from 'react-admin';
import UserDeleteWithUndoButton from './userDeleteButtonEdit.tsx'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export const UserCustomBottomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton
            label="СОХРАНИТЬ"
            redirect={false}
            submitOnEnter={true}
        />
        <UserDeleteWithUndoButton selectedIds={[props.id]}/>
    </Toolbar>
);
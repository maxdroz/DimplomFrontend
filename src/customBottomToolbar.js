import React from 'react';
import { SaveButton, Toolbar } from 'react-admin';
import DeleteWithUndoButton from './deleteButtonEdit.tsx'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export const CustomBottomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton
            label="СОХРАНИТЬ"
            redirect="show"
            submitOnEnter={true}
        />
        <DeleteWithUndoButton selectedIds={[props.id]}/>
    </Toolbar>
);
import React, { Fragment } from 'react';
import UserBulkDeleteWithUndoButton from './userbulkDeleteButton.tsx'

export const UserCustomDeleteToolbar = (props) => (
    <Fragment>
        <UserBulkDeleteWithUndoButton {...props} />
    </Fragment>
);
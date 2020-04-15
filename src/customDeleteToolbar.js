import React, { Fragment } from 'react';
import CustomBulkDeleteWithUndoButton from './deleteButton.tsx'

export const CustomDeleteToolbar = (props) => (
    <Fragment>
        <CustomBulkDeleteWithUndoButton {...props} />
    </Fragment>
);
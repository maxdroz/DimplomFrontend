import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const OfficeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="office" />
        </Datagrid>
    </List>
);
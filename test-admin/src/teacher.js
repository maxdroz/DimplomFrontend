import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const TeacherList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="surname" />
            <TextField source="patronymic" />
            <TextField source="phoneNumber" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
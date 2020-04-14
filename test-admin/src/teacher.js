import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const TeacherList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="surname" />
            <TextField source="patronymic" />
            <TextField source="phoneNumber" />
            <TextField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TeacherEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="surname" />
            <TextInput source="patronymic" />
            <TextInput source="phoneNumber" />
            <TextInput source="description" multiline />
        </SimpleForm>
    </Edit>
);

export const TeacherCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="surname" />
            <TextInput source="patronymic" />
            <TextInput source="phoneNumber" />
            <TextInput source="description" multiline />
        </SimpleForm>
    </Create>
);
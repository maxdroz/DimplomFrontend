import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const OfficeList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="office" />
            <EditButton />
        </Datagrid>
    </List>
);

export const OfficeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="office" />
        </SimpleForm>
    </Edit>
);

export const OfficeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="office" />
        </SimpleForm>
    </Create>
);
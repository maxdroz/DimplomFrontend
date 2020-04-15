import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, Filter, required } from 'react-admin';
import { CustomDeleteToolbar } from './customDeleteToolbar'
import { CustomBottomToolbar } from './customBottomToolbar'

const OfficeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
    </Filter>
);

export const OfficeList = props => (
    <List filters={<OfficeFilter />} {...props} title='Аудитории' bulkActionButtons={<CustomDeleteToolbar />}>
        <Datagrid>
            <TextField source="id" label="Номер" />
            <TextField source="office" label="Аудитория" />
            <EditButton />
        </Datagrid>
    </List>
);

export const OfficeEdit = props => (
    <Edit {...props} title={'Редактирование аудитории #' + props.id}>
        <SimpleForm toolbar={<CustomBottomToolbar {...props} />}>
            <TextInput source="office" label="Аудитория" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const OfficeCreate = props => (
    <Create {...props} title='Создание аудитории'>
        <SimpleForm>
            <TextInput source="office" label="Аудитория" validate={[required()]} />
        </SimpleForm>
    </Create>
);
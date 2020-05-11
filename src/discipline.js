import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, Filter, required } from 'react-admin';
import { CustomDeleteToolbar } from './customDeleteToolbar'
import { CustomBottomToolbar } from './customBottomToolbar'

const DisciplineFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Посик" source="q" alwaysOn />
    </Filter>
);

export const DisciplineList = props => (
    <List filters={<DisciplineFilter />} {...props} title='Предметы' bulkActionButtons={<CustomDeleteToolbar />}>
        <Datagrid>
            <TextField source="id" label="Номер"/>
            <TextField source="name" label="Название предмета" />
            <EditButton />
        </Datagrid>
    </List>
);

export const DisciplineEdit = props => (
    <Edit {...props} title={'Редактирование предмета #' + props.id}>
        <SimpleForm toolbar={<CustomBottomToolbar {...props} />}>
            <TextInput disabled source="id" />
            <TextInput source="name" label="Название предмета" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const DisciplineCreate = props => (
    <Create {...props} title='Создание предмета'>
        <SimpleForm>
            <TextInput source="name" label="Название предмета" validate={[required()]} />
        </SimpleForm>
    </Create>
);
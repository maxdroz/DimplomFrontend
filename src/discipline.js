import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, Filter, required } from 'react-admin';
import { CustomDeleteToolbar } from './customDeleteToolbar'
import { CustomBottomToolbar } from './customBottomToolbar'
import Empty from './empty'
import BookIcon from '@material-ui/icons/Book';
import { CreateNoRedirectBottomToolbar } from './createNoRedirectBottomToolbar'

const maxLength = (max, message = 'Слишком длинное название предмета. Используйте сокращенную форму') =>
    value => value && value.length > max ? message : undefined;

const DisciplineFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Посик" source="q" alwaysOn />
    </Filter>
);

export const DisciplineList = props => (
    <List empty={<Empty displayName="Предметов" icon={BookIcon}/>} filters={<DisciplineFilter />} {...props} title='Предметы' bulkActionButtons={<CustomDeleteToolbar />}>
        <Datagrid>
            <TextField source="id" label="Номер"/>
            <TextField source="name" label="Название предмета" />
            <TextField source="shortName" label="Краткое название предмета" />
            <EditButton />
        </Datagrid>
    </List>
);

export const DisciplineEdit = props => (
    <Edit {...props} title={'Редактирование предмета #' + props.id}>
        <SimpleForm toolbar={<CustomBottomToolbar {...props} />}>
            <TextInput disabled source="id" />
            <TextInput source="name" label="Название предмета" validate={[required()]} />
            <TextInput source="shortName" label="Краткое название предмета" validate={[required(), maxLength(10)]}/>
        </SimpleForm>
    </Edit>
);

export const DisciplineCreate = props => (
    <Create {...props} title='Создание предмета'>
        <SimpleForm toolbar={<CreateNoRedirectBottomToolbar {...props} />} >
            <TextInput source="name" label="Название предмета" validate={[required()]} />
            <TextInput source="shortName" label="Краткое название предмета" validate={[required(), maxLength(10)]}/>
        </SimpleForm>
    </Create>
);
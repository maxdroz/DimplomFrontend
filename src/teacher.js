import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, Filter, required } from 'react-admin';
import { CustomDeleteToolbar } from './customDeleteToolbar'
import { CustomBottomToolbar } from './customBottomToolbar'
import Empty from './empty'
import PersonIcon from '@material-ui/icons/Person';
import { CreateNoRedirectBottomToolbar } from './createNoRedirectBottomToolbar'

const TeacherFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
    </Filter>
);

export const TeacherList = props => (
    <List empty={<Empty displayName="Преподавателей" icon={PersonIcon}/>} filters={< TeacherFilter />} {...props} title='Преподаватели' bulkActionButtons={<CustomDeleteToolbar />}>
        <Datagrid>
            <TextField source="id" label="Номер" />
            <TextField source="surname" label="Фамилия" />
            <TextField source="name" label="Имя" />
            <TextField source="patronymic" label="Отчество" />
            <TextField source="phoneNumber" label="Номер телефона" />
            <TextField source="description" label="Краткая информация"  />
            <EditButton />
        </Datagrid>
    </List>
);

export const TeacherEdit = props => (
    <Edit {...props} title={'Редактирование преподавателя #' + props.id}>
        <SimpleForm toolbar={<CustomBottomToolbar {...props} />}>
            <TextInput disabled source="id" />
            <TextInput source="surname" label="Фамилия" validate={[required()]} />
            <TextInput source="name" label="Имя" validate={[required()]} />
            <TextInput source="patronymic" label="Отчество" validate={[required()]} />
            <TextInput source="phoneNumber" label="Номер телефона" validate={[required()]} />
            <TextInput source="description" multiline label="Краткая информация" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const TeacherCreate = props => (
    <Create {...props}  title='Создание преподавателя'>
        <SimpleForm toolbar={<CreateNoRedirectBottomToolbar {...props} />} >
            <TextInput source="surname" label="Фамилия" validate={[required()]} />
            <TextInput source="name" label="Имя" validate={[required()]} />
            <TextInput source="patronymic" label="Отчество" validate={[required()]} />
            <TextInput source="phoneNumber" label="Номер телефона" validate={[required()]} />
            <TextInput source="description" multiline label="Краткая информация" validate={[required()]} />
        </SimpleForm>
    </Create>
);
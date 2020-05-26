import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, Create, Filter, TextInput, required, BooleanField, BooleanInput, PasswordInput } from 'react-admin';
import { UserCustomDeleteToolbar } from './userDeleteToolbar'
import { CreateUserBottomToolbar } from './createUserFormBottom'
import { UserCustomBottomToolbar }  from './userCustomBottomToolbar'
import Empty from './empty'
import GroupIcon from '@material-ui/icons/Group';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
    </Filter>
);

export const UserList = props => (
    <List empty={<Empty displayName="Пользователей" icon={GroupIcon}/>} filters={<UserFilter />} {...props} title='Пользователи' bulkActionButtons={<UserCustomDeleteToolbar />}>
        <Datagrid>
            <TextField source="id" label="Логин" />
            <TextField source="hashedPassword" label="Пароль" />
            <BooleanField source="canEditUsers" label="Права администратора" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props} title={'Редактирование пользователя ' + props.id}>
        <SimpleForm toolbar={<UserCustomBottomToolbar {...props} />}>
            <TextInput disabled source="id" />  
            <PasswordInput source="hashedPassword" label="Пароль (оставьте это поле пустым, если не хотите менять пароль)" fullWidth={true} />
            {
                (localStorage.getItem('username') == props.id)
                 ?
                <BooleanInput source="canEditUsers" label="Права администратора" validate={[required()]} disabled /> : 
                <BooleanInput source="canEditUsers" label="Права администратора" validate={[required()]} />
            }
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props} title='Создание пользователя'>
        <SimpleForm toolbar={<CreateUserBottomToolbar {...props} />}>
            <TextInput source="id" label="Логин" validate={[required()]}/>
            <PasswordInput source="hashedPassword" label="Пароль" validate={[required()]}/>
            <BooleanInput source="canEditUsers" label="Права администратора"/>
        </SimpleForm>
    </Create>
);
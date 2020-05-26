import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, Filter, required } from 'react-admin';
import { CustomDeleteToolbar } from './customDeleteToolbar'
import { CustomBottomToolbar } from './customBottomToolbar'
import Empty from './empty'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { CreateNoRedirectBottomToolbar } from './createNoRedirectBottomToolbar'

const OfficeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
    </Filter>
);

export const OfficeList = props => (
    <List empty={<Empty displayName="Аудиторий" icon={MeetingRoomIcon}/>} filters={<OfficeFilter />} {...props} title='Аудитории' bulkActionButtons={<CustomDeleteToolbar />}>
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
            <TextInput disabled source="id" />
            <TextInput source="office" label="Аудитория" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const OfficeCreate = props => (
    <Create {...props} title='Создание аудитории'>
        <SimpleForm toolbar={<CreateNoRedirectBottomToolbar {...props} />} >
            <TextInput source="office" label="Аудитория" validate={[required()]} />
        </SimpleForm>
    </Create>
);
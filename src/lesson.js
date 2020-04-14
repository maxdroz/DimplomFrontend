import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, DateTimeInput, ReferenceInput, SelectInput, Create } from 'react-admin';

export const LessonList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="startTime" showTime/>
            <DateField source="endTime" showTime/>
            <ReferenceField source="discipline" reference="disciplines">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="teacher" reference="teachers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="office" reference="offices">
                <TextField source="office" />
            </ReferenceField>
            <ReferenceField source="group" reference="groups">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const LessonEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DateTimeInput source="startTime" />
            <DateTimeInput source="endTime" />
            <ReferenceInput source="discipline" reference="disciplines">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="teacher" reference="teachers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="office" reference="offices">
                <SelectInput optionText="office" />
            </ReferenceInput>
            <ReferenceInput source="group" reference="groups">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const LessonCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateTimeInput source="startTime" />
            <DateTimeInput source="endTime" />
            <ReferenceInput source="discipline" reference="disciplines">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="teacher" reference="teachers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="office" reference="offices" perPage={10}>
                <SelectInput optionText="office" />
            </ReferenceInput>
            <ReferenceInput source="group" reference="groups">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, EditButton, Edit, SimpleForm, DateTimeInput, ReferenceInput, SelectInput, Create, Filter, required, TextInput } from 'react-admin';
import CTextField from './customTextField.tsx'
import Empty from './empty'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { CreateNoRedirectBottomToolbar } from './createNoRedirectBottomToolbar'

const nameSurnamePatronymic = choice => `${choice.surname} ${choice.name} ${choice.patronymic}`

const LessonFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск по id" source="q" alwaysOn />
        <ReferenceInput label="Группа" source="group" reference="groups" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Преподаватель" source="teacher" reference="teachers" allowEmpty>
            <SelectInput optionText={nameSurnamePatronymic} />
        </ReferenceInput>
        <ReferenceInput label="Аудитория" source="office" reference="offices" allowEmpty>
            <SelectInput optionText="office" />
        </ReferenceInput>
        <ReferenceInput label="Предмет" source="discipline" reference="disciplines" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const LessonList = props => (
    <List empty={<Empty displayName="Пар" icon={DateRangeRoundedIcon}/>} filters={<LessonFilter />} {...props} title='Пары'>
        <Datagrid>
            <TextField source="id" label="Номер" />
            <DateField source="startTime" showTime label="Время начала"options={{hour12:false, day:'numeric',month:'numeric',year:'numeric',hour:'numeric',minute:'numeric'}}  />
            <DateField source="endTime" showTime label="Время конца" options={{hour12:false, day:'numeric',month:'numeric',year:'numeric',hour:'numeric',minute:'numeric'}} />
            <ReferenceField source="teacher" reference="teachers" label="Преподаватель" >
                <CTextField source="name" />
            </ReferenceField>
            <ReferenceField source="office" reference="offices" label="Аудитория" >
                <TextField source="office" />
            </ReferenceField>
            <ReferenceField source="group" reference="groups" label="Группа" >
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="discipline" reference="disciplines" label="Предмет" >
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const LessonEdit = props => (
    <Edit {...props} title={'Редактирование пары #' + props.id}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateTimeInput source="startTime" label="Время начала" validate={[required()]} />
            <DateTimeInput source="endTime" label="Время конца" validate={[required()]} />
            <ReferenceInput source="teacher" reference="teachers" label="Преподаватель" validate={[required()]} >
                <SelectInput optionText={nameSurnamePatronymic} />
            </ReferenceInput>
            <ReferenceInput source="office" reference="offices" label="Аудитория" validate={[required()]} >
                <SelectInput optionText="office"/>
            </ReferenceInput>
            <ReferenceInput source="group" reference="groups" label="Группа" validate={[required()]} >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="discipline" reference="disciplines" label="Предмет" validate={[required()]} >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const LessonCreate = props => (
    <Create {...props} title='Создание пары'>
        <SimpleForm toolbar={<CreateNoRedirectBottomToolbar {...props} />} >
            <DateTimeInput source="startTime" label="Время начала" validate={[required()]} />
            <DateTimeInput source="endTime" label="Время конца" validate={[required()]} />
            <ReferenceInput source="teacher" reference="teachers" label="Преподаватель" validate={[required()]} >
                <SelectInput optionText={nameSurnamePatronymic} />
            </ReferenceInput>
            <ReferenceInput source="office" reference="offices" label="Аудитория" validate={[required()]} >
                <SelectInput optionText="office" />
            </ReferenceInput>
            <ReferenceInput source="group" reference="groups" label="Группа" validate={[required()]} >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="discipline" reference="disciplines" label="Предмет" validate={[required()]} >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
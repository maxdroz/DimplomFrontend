import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { OfficeList, OfficeEdit, OfficeCreate } from './office'
import { DisciplineList, DisciplineEdit, DisciplineCreate } from './discipline'
import { TeacherList, TeacherEdit, TeacherCreate } from './teacher'
import { GroupList, GroupEdit, GroupCreate } from './group'
import { LessonList, LessonEdit, LessonCreate } from './lesson'
// import Dashboard from './dashboard'

const dataProvider = jsonServerProvider('http://192.168.0.16');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="lessons" list={LessonList} edit={LessonEdit} create={LessonCreate} />
        <Resource name="offices" list={OfficeList} edit={OfficeEdit} create={OfficeCreate} />
        <Resource name="disciplines" list={DisciplineList} edit={DisciplineEdit} create={DisciplineCreate} />
        <Resource name="teachers" list={TeacherList} edit={TeacherEdit} create={TeacherCreate} />
        <Resource name="groups" list={GroupList} edit={GroupEdit} create={GroupCreate} />
    </Admin>
);

export default App;
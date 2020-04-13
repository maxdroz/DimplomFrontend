import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { OfficeList } from './office'
import { DisciplineList } from './discipline'
import { TeacherList } from './teacher'

const dataProvider = jsonServerProvider('http://localhost');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="lessons" list={ListGuesser} />
        <Resource name="offices" list={OfficeList} />
        <Resource name="disciplines" list={DisciplineList} />
        <Resource name="teachers" list={TeacherList} />
        <Resource name="groups" list={ListGuesser} />
    </Admin>
);

export default App;
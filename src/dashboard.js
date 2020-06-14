import React, { useState } from 'react';
import { Title, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';
import Editor from './editor'

export default (props) => {
    const [idTeacher, setIdTeacher] = useState(-1)
    const [idDiscipline, setIdDiscipline] = useState(-1)
    const nameSurnamePatronymic = choice => `${choice.surname} ${choice.name} ${choice.patronymic}`
    const itemStyle = {
        marginRight:"10px",
        minWidth: "25vw"
    }
    const handleDisciplineChange = (res) => {
        setIdDiscipline(res.target.value)
    } 
    const handleTeacherChange = (res) => {
        setIdTeacher(res.target.value)
    }
    return <SimpleForm>
            <Title title="Welcome to the administration" />
            <div style={{display: "flex", flexDirection:"row"}}>
                <ReferenceInput source="discipline" reference="disciplines" label="Предмет" style={itemStyle} onChange={handleDisciplineChange}>
                    <SelectInput optionText="name"/>
                </ReferenceInput>
                <ReferenceInput source="teacher" reference="teachers" label="Преподаватель" style={itemStyle} onChange={handleTeacherChange}>
                    <SelectInput optionText={nameSurnamePatronymic} />
                </ReferenceInput>
            </div>
            <Editor idDiscipline={idDiscipline} idTeacher={idTeacher} />
        </SimpleForm>
}
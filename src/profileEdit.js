import React from 'react';
import { Edit, PasswordInput, SimpleForm, required } from 'react-admin';
import { ProfileBottomToolbar } from './bottomToolbarProfile'

const ProfileEdit = ({ staticContext, ...props }) => {

    const validateUserCreation = (values) => {
        const errors = {};
        if (values.password !== values.repeatPassword) {
            errors.repeatPassword = ['Пароли должны совпадать'];
        }
        return errors
    };

    return (
        <Edit
            id={1}
            resource="profile"
            basePath="/my-profile"
            title="Мой профиль"
            redirect={false}
            {...props}
        >
            <SimpleForm toolbar={<ProfileBottomToolbar {...props} />} validate={validateUserCreation}>
                <PasswordInput source="oldPassword" label="Введите старый пароль" validate={required()} />
                <PasswordInput source="password" label="Введите новый пароль" validate={required()} />
                <PasswordInput source="repeatPassword" label="Введите новый пароль" validate={required()} />
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;

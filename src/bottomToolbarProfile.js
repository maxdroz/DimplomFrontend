import React from 'react';
import { useDispatch } from 'react-redux'
import { SaveButton, Toolbar, showNotification } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import url from './url'

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export const ProfileBottomToolbar = props => {
    const dispatch = useDispatch()

    return <Toolbar {...props} classes={useStyles()}>
        <SaveButton
            undoable={false}
            label="СОХРАНИТЬ"
            redirect={false}
            submitOnEnter={true}
            onSave={(data) => {
                const token = localStorage.getItem('token');
                const request = new Request(url + '/changePassword', {
                    method: 'POST',
                    body: JSON.stringify({ oldPassword: data.oldPassword, password: data.password }),
                    headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': token }),
                });
                return new Promise((resolve, reject) => {    
                    fetch(request).then(resp => {
                        resp.json().then(data => {
                            if(data.success === true) {
                                dispatch(showNotification("Пароль успешно изменен"))
                                localStorage.setItem('token', data.token)
                                // resolve({data: {id: 1, password: "", oldPassword: ""}})
                            } else {
                                dispatch(showNotification("Текущий пароль введен неверно", "warning"))
                                // reject()
                            }
                        })
                    })
                });
            }}
        />
    </Toolbar>
};
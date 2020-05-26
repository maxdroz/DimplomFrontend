import React, { useCallback } from 'react';
import {
    SaveButton,
    useCreate,
    useRedirect,
    useNotify,
    showNotification,
} from 'react-admin';
import { useDispatch } from 'react-redux'
import url from './url'

export const CreateUserSaveButton = props => {
    const [create] = useCreate('users');
    const redirectTo = useRedirect();
    const notify = useNotify();
    const { basePath } = props;
    const dispatch = useDispatch()

    const save = useCallback(
        (values, redirect) => {
            const token = localStorage.getItem('token');
            const request = new Request(url + '/users/isUsernameTaken', {
                method: 'POST',
                body: values.id,
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': token }),
            });
            fetch(request).then(resp => {
                resp.text().then(body => {
                    if(body === "false"){
                        create(
                            {
                                payload: { data: { ...values } },
                            },
                            {
                                onSuccess: ({ data: newRecord }) => {
                                    notify('ra.notification.created', 'info', {
                                        smart_count: 1,
                                    });
                                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                                },
                            }
                        );
                    } else { 
                        dispatch(showNotification("Аккаунт с таким логином уже существует", "warning"))
                    }
                })
            })
            
        },
        [create, notify, redirectTo, basePath]
    )

    return <SaveButton {...props} onSave={save}/>
}
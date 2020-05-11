import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { CreateButton } from 'react-admin';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles(
    theme => ({
        message: {
            textAlign: 'center',
            opacity: theme.palette.type === 'light' ? 0.5 : 0.8,
            margin: '0 1em',
            color:
                theme.palette.type === 'light'
                    ? 'inherit'
                    : theme.palette.text.primary,
        },
        icon: {
            width: '9em',
            height: '9em',
        },
        toolbar: {
            textAlign: 'center',
            marginTop: '2em',
        },
    }),
    { name: 'RaEmpty' }
);

const Empty = props => {
    const { basePath, displayName, icon } = props;
    const classes = useStyles(props);

    return (
        <>
            <div className={classes.message}>
            <SvgIcon component={icon}  className={classes.icon} />
                <Typography variant="h4" paragraph>
                    {`${displayName} нет.`}
                </Typography>
                <Typography variant="body1">
                    {`Желаете создать?`}
                </Typography>
                <br/><br/>
                <Typography variant="body1">
                    {`Если вы уверены, что они должны быть, проверьте соединение с сервером`}
                </Typography>
            </div>
            <div className={classes.toolbar}>
                <CreateButton variant="contained" basePath={basePath} />
            </div>
        </>
    );
};

export default Empty;
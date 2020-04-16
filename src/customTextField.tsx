import React, { FunctionComponent } from 'react';
//@ts-ignore
import pure from 'recompose/pure';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

// import sanitizeRestProps from './sanitizeRestProps';

//@ts-ignore
import { FieldProps, InjectedFieldProps } from 'react-admin';

const TextField: FunctionComponent<
    FieldProps & InjectedFieldProps & TypographyProps
> = ({ className, source, record = {}, emptyText, ...rest }) => {
    const value = record.surname + ' ' + record.name + ' ' + record.patronymic;

    return (
        <Typography
            component="span"
            variant="body2"
            className={className}
        >
            {value != null && typeof value !== 'string'
                ? JSON.stringify(value)
                : value || emptyText}
        </Typography>
    );
};

// wat? TypeScript looses the displayName if we don't set it explicitly
TextField.displayName = 'TextField';

const EnhancedTextField = pure(TextField);

EnhancedTextField.defaultProps = {
    addLabel: true,
};

EnhancedTextField.propTypes = {
    // @ts-ignore
    ...Typography.propTypes,
};

EnhancedTextField.displayName = 'EnhancedTextField';

export default EnhancedTextField;
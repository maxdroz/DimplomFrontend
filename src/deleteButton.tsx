import React, { FC, ReactElement } from 'react';
//@ts-ignore
import { useDispatch } from 'react-redux'
//@ts-ignore
import { Button, ButtonProps, showNotification, fetchUtils } from 'react-admin';
import PropTypes from 'prop-types';
import ActionDelete from '@material-ui/icons/Delete';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import {
    useDeleteMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    CRUD_DELETE_MANY,
    Identifier,
} from 'ra-core';
import url from './url';

const useStyles = makeStyles(
    theme => ({
        deleteButton: {
            color: theme.palette.error.main,
            '&:hover': {
                backgroundColor: fade(theme.palette.error.main, 0.12),
                // Reset on mouse devices
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
        },
    }),
    { name: 'RaBulkDeleteWithUndoButton' }
);

const CustomBulkDeleteWithUndoButton: FC<CustomBulkDeleteWithUndoButtonProps> = props => {
    const {
        basePath,
        classes: classesOverride,
        icon,
        label,
        onClick,
        resource,
        selectedIds,
        ...rest
    } = props;
    const classes = useStyles(props);
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const refresh = useRefresh();
    const dispath = useDispatch(); 
    const [deleteMany, { loading }] = useDeleteMany(resource, selectedIds, {
        action: CRUD_DELETE_MANY,
        onSuccess: () => {
            notify(
                'ra.notification.deleted',
                'info',
                { smart_count: selectedIds.length },
                true
            );
            unselectAll(resource);
            refresh();
        },
        onFailure: (error: any) =>
            notify(
                typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error',
                'warning'
            ),
        undoable: true,
    });

    const handleClick = (e: any) => {
        fetchUtils.fetchJson(url + props.basePath + '/check', {
            method: "POST",
            body: JSON.stringify(
                props.selectedIds
            )
        }).then((a: any) => {
            if(a.json.result === "success") {        
                deleteMany();
                if (typeof onClick === 'function') {
                    onClick(e);
                }
            } else {
                let text
                if(props.selectedIds.length === 1) {
                    text = 'У данной записи есть связи, сначала удалите их'
                } else {
                    text = 'У данных записей есть связи, сначала удалите их'
                }
                dispath(showNotification(text, 'warning'))
            }
        })
    };

    return (
        <Button
            onClick={handleClick}
            label={label}
            className={classes.deleteButton}
            disabled={loading}
            {...sanitizeRestProps(rest)}
        >
            {icon}
        </Button>
    );
};

const sanitizeRestProps = ({
    basePath,
    classes,
    filterValues,
    label,
    ...rest
}: Omit<CustomBulkDeleteWithUndoButtonProps, 'resource' | 'selectedIds' | 'icon'>) =>
    rest;

interface Props {
    basePath?: string;
    filterValues?: any;
    icon: ReactElement;
    resource: string;
    selectedIds: Identifier[];
}

export type CustomBulkDeleteWithUndoButtonProps = Props & ButtonProps;

CustomBulkDeleteWithUndoButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    label: PropTypes.string,
    resource: PropTypes.string.isRequired,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
    icon: PropTypes.element,
};

CustomBulkDeleteWithUndoButton.defaultProps = {
    label: 'ra.action.delete',
    icon: <ActionDelete />,
};

export default CustomBulkDeleteWithUndoButton;
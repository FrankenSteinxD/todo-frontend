import React from 'react';
import MListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import TrashIcon from '@material-ui/icons/Delete';
import DeleteIcon from '@material-ui/icons/Cancel';
import RestoreIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { shape, string, bool, func } from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import { green, red, orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    textDecoration: (item) => (item.complete ? 'line-through' : 'none'),
  },
  checkIcon: {
    color: green[400],
  },
  trashIcon: {
    color: orange[400],
  },
  restoreIcon: {
    color: green[300],
  },
  deleteIcon: {
    color: red[300],
  },
}));

const ListItem = ({ item, onComplete, onTrash, onRestore, onDelete }) => {
  const classes = useStyles(item);

  const canComplete = !item.trashed && !item.complete;
  const canTrash = !item.trashed;
  const canDelete = item.trashed;
  const canRestore = item.trashed;

  return (
    <MListItem className={classes.item} dense>
      <ListItemText
        primary={item.title}
        secondary={
          <Typography color="textSecondary">{item.description}</Typography>
        }
        className={classes.text}
      />
      <ListItemSecondaryAction>
        {canComplete ? (
          <IconButton onClick={() => onComplete(item)}>
            <Tooltip title="Complete">
              <CheckIcon className={classes.checkIcon} />
            </Tooltip>
          </IconButton>
        ) : null}
        {canTrash ? (
          <IconButton onClick={() => onTrash(item)}>
            <Tooltip title="Trash">
              <TrashIcon className={classes.trashIcon} />
            </Tooltip>
          </IconButton>
        ) : null}
        {canRestore ? (
          <IconButton onClick={() => onRestore(item)}>
            <Tooltip title="Restore">
              <RestoreIcon className={classes.restoreIcon} />
            </Tooltip>
          </IconButton>
        ) : null}
        {canDelete ? (
          <IconButton onClick={() => onDelete(item)}>
            <Tooltip title="Delete Forever">
              <DeleteIcon className={classes.deleteIcon} />
            </Tooltip>
          </IconButton>
        ) : null}
      </ListItemSecondaryAction>
    </MListItem>
  );
};

ListItem.propTypes = {
  item: shape({
    _id: string.isRequired,
    title: string.isRequired,
    trashed: bool.isRequired,
    complete: bool.isRequired,
    description: string.isRequired,
    createdAt: string.isRequired,
  }).isRequired,
  onComplete: func.isRequired,
  onTrash: func.isRequired,
  onRestore: func.isRequired,
  onDelete: func.isRequired,
};

export default ListItem;

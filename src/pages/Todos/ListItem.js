import React from 'react';
import MListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Check from '@material-ui/icons/Check';
import Delete from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { shape, string, bool, func } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    textDecoration: (item) => (item.complete ? 'line-through' : 'none'),
  },
  icon: {
    color: (item) => (item.complete ? 'green' : 'unset'),
  },
}));

const ListItem = ({ item, onComplete, onDelete }) => {
  const classes = useStyles(item);

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
        <IconButton onClick={() => onComplete(item)}>
          <Check className={classes.icon} />
        </IconButton>
        <IconButton onClick={() => onDelete(item)}>
          <Delete className={classes.icon} />
        </IconButton>
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
  onDelete: func.isRequired,
};

export default ListItem;

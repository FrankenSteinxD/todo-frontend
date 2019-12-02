import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';

import * as TodoActions from 'actions/todos';
import { formatTodoError } from 'lib/util';
import Loader from 'components/Loader';
import Tabs from 'components/Tabs';
import { FullPage500Error } from 'components/FullPageErrors';
import CreateTodoForm from './Todos/CreateTodoForm';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from 'components/List';
import ListItem from './Todos/ListItem';

const EmptyPanel = () => (
  <Paper>
    <Box textAlign="center" p={5}>
      <Typography variant="body2">No todos here!</Typography>
    </Box>
  </Paper>
);

const Todos = ({
  todos,
  loading,
  failed,
  getTodos,
  createTodo,
  completeTodo,
  trashTodo,
  restoreTodo,
  deleteTodo,
}) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleCreateTodoFromSubmit = useCallback(
    (data, form) => {
      (async () => {
        try {
          await createTodo(data);
          form.resetForm();
        } catch (e) {
          const errors = formatTodoError(e);
          form.setErrors(errors);
        }
      })();
    },
    [createTodo],
  );

  const handleCompleteTodo = useCallback(
    (todo) => {
      completeTodo(todo._id);
    },
    [completeTodo],
  );

  const handleTrashTodo = useCallback(
    (todo) => {
      trashTodo(todo._id);
    },
    [trashTodo],
  );

  const handleRestoreTodo = useCallback(
    (todo) => {
      restoreTodo(todo._id);
    },
    [restoreTodo],
  );

  const handleDeleteTodo = useCallback(
    (todo) => {
      deleteTodo(todo._id);
    },
    [deleteTodo],
  );

  if (failed) {
    return <FullPage500Error />;
  }

  const renderTodoItem = (item) => (
    <ListItem
      item={item}
      onComplete={handleCompleteTodo}
      onTrash={handleTrashTodo}
      onRestore={handleRestoreTodo}
      onDelete={handleDeleteTodo}
      key={item._id}
    />
  );

  const activeTodos = todos.filter((todo) => !todo.trashed && !todo.complete);
  const completeTodos = todos.filter((todo) => !todo.trashed && todo.complete);
  const trashedTodos = todos.filter((todo) => todo.trashed);

  const tabs = [
    {
      label: 'Active',
      icon: <ListIcon />,
      component: activeTodos.length ? (
        <List data={activeTodos} renderItem={renderTodoItem} />
      ) : (
        <EmptyPanel />
      ),
    },
    {
      label: 'Completed',
      icon: <CheckIcon />,
      component: completeTodos.length ? (
        <List data={completeTodos} renderItem={renderTodoItem} />
      ) : (
        <EmptyPanel />
      ),
    },
    {
      label: 'Trashed',
      icon: <DeleteIcon />,
      component: trashedTodos.length ? (
        <List data={trashedTodos} renderItem={renderTodoItem} />
      ) : (
        <EmptyPanel />
      ),
    },
  ];

  return (
    <Loader loading={loading}>
      <Box mt={10}>
        <Grid container>
          <Grid item container>
            <Grid item md={3} />
            <Grid item xs={12} md={6}>
              <Paper p={3}>
                <Box p={3}>
                  <Typography color="primary" variant="h6">
                    Create New Todo
                  </Typography>
                  <CreateTodoForm onSubmit={handleCreateTodoFromSubmit} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box p={5} />
          </Grid>
          <Grid item container xs={12}>
            <Grid item md={3} />
            <Grid item md={6}>
              <Tabs tabs={tabs} variant="fullWidth" centered />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Loader>
  );
};

Todos.propTypes = {
  todos: arrayOf(
    shape({
      _id: string.isRequired,
      title: string.isRequired,
      trashed: bool.isRequired,
      complete: bool.isRequired,
      description: string.isRequired,
      createdAt: string.isRequired,
    }),
  ).isRequired,
  loading: bool.isRequired,
  failed: bool.isRequired,
  getTodos: func.isRequired,
  createTodo: func.isRequired,
  completeTodo: func.isRequired,
  trashTodo: func.isRequired,
  restoreTodo: func.isRequired,
  deleteTodo: func.isRequired,
};

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos,
  loading: todos.loading,
  failed: todos.failed,
});

export default connect(mapStateToProps, {
  getTodos: TodoActions.getTodos,
  createTodo: TodoActions.createTodo,
  completeTodo: TodoActions.completeTodo,
  trashTodo: TodoActions.trashTodo,
  restoreTodo: TodoActions.restoreTodo,
  deleteTodo: TodoActions.deleteTodo,
})(Todos);

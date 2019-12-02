import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from 'actions/todos';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import { arrayOf, bool, func, shape, string } from 'prop-types';

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

const Todos = ({ todos, loading, failed, getTodos, createTodo }) => {
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

  const handleCompleteTodo = useCallback(console.log);
  const handleDeleteTodo = useCallback(console.log);

  if (failed) {
    return <FullPage500Error />;
  }

  const items = [
    {
      label: 'Active',
      icon: <CheckIcon />,
      component: (
        <List
          data={todos.filter((todo) => !todo.complete)}
          renderItem={(item, i) => (
            <ListItem
              item={item}
              onComplete={handleCompleteTodo}
              onDelete={handleDeleteTodo}
              key={i}
            />
          )}
        />
      ),
    },
  ];

  return (
    <Loader loading={loading}>
      <Box mt={10}>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item md={3} />
            <Grid item md={6}>
              <Tabs items={items} variant="fullWidth" centered />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box p={5} />
          </Grid>
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
};

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos,
  loading: todos.loading,
  failed: todos.failed,
});

export default connect(mapStateToProps, {
  getTodos: TodoActions.getTodos,
  createTodo: TodoActions.createTodo,
})(Todos);

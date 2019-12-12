export function formatTodoError(e) {
  const errors = (e.response && e.response.data && e.response.data.errors) || {
    form: [e.message],
  };

  const ret = {};
  Object.keys(errors).forEach((key) => {
    [ret[key]] = errors[key];
  });

  return ret;
}

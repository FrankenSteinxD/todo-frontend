export function formatTodoError({
  response: {
    data: { errors },
  },
}) {
  const ret = {};
  Object.keys(errors).forEach((key) => {
    [ret[key]] = errors[key];
  });

  return ret;
}

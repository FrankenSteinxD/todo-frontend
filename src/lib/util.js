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

export function parseQuerytring(qs) {
  return qs
    .replace(/\?/g, '')
    .split('&')
    .map((entry) => entry.split('='))
    .reduce((prev, cur) => {
      // eslint-disable-next-line
      prev[cur[0]] = cur[1];
      return prev;
    }, {});
}

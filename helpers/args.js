const getArgs = (args) => {
  const result = {};
  const [executer, file, ...rest] = args;

  rest.forEach((value, idx, arr) => {
    if (value.charAt(0) == '-') {
      if (idx == arr.length - 1) {
        result[value.substring(1)] = true;
      } else if (arr[idx + 1].charAt(0) != '-') {
        result[value.substring(1)] = arr[idx + 1];
      } else {
        result[value.substring(1)] = true;
      }
    }
  });
  return result;
};

export { getArgs };

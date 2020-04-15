const emptyFunc = v => v;

const copyToClipboard = (value, success = emptyFunc, fail = emptyFunc) => {
  navigator.clipboard
    .writeText(value)
    .then(success)
    .catch(fail);
};

export default {
  emptyFunc,
  copyToClipboard,
};

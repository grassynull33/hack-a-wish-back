const get = () => async () => {
  // param validation
  const bool = true;

  if (bool) return 'OK';

  return 'OK';
};

module.exports = () => ({
  get: get(),
});

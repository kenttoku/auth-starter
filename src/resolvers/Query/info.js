module.exports = async (root, args, context) => {
  const decodedToken = context.isAuthorized();
  // eslint-disable-next-line no-console
  console.log(decodedToken);

  return 'INFO';
};

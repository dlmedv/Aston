const loginLoggerMiddleware = (store) => (next) => (action) => {
  if (action.type === "user/setLoggetIn") {
    console.log("Юзер зашел");
  }
  return next(action);
};

export default loginLoggerMiddleware;

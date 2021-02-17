exports.formatResponse = (status, message, data) => {
  let response = {
    status: status,
    message: message,
    data: data,
  };
  return response;
};

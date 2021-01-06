export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

export const removeUserSession = () => {
  sessionStorage.removeItem("user");
};

export const setUserSession = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

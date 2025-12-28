export const login = (username, password) => {
  if (username === "admin" && password === "admin123") {
    localStorage.setItem("token", "mock-admin-token");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const authMiddleware = () => {
  const authToken = localStorage.getItem("token");
  if (authToken == null) {
    window.location.href = "/login";
  }
};

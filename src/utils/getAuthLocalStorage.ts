export const getAuthCookie = () => {
  const accessTokenCookie = localStorage.getItem("access-token");

  const headers = {
    ...(accessTokenCookie && { Authorization: `Bearer ${accessTokenCookie}` })
  };
  return { accessTokenCookie, headers };
};

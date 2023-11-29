export const getAuthCookie = () => {
  const accessTokenCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("access-token"));

  const accessToken = accessTokenCookie
    ? accessTokenCookie.split("=")[1]
    : null;

  const headers = {
    ...(accessTokenCookie && { Authorization: `Bearer ${accessToken}` })
  };
  return { accessTokenCookie, headers };
};

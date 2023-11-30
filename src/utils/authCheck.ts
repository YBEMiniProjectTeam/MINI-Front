import { useNavigate } from "react-router-dom";

export const authCheck = () => {
  const navigate = useNavigate();

  const accessTokenCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="));

  if (!accessTokenCookie) {
    navigate("/notLogin");
  }

  const headers = {
    ...(accessTokenCookie && { Authorization: `Bearer ${accessTokenCookie}` })
  };
  return headers;
};

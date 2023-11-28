import Swal from "sweetalert2";

export const authCheck = () => {
  const accessTokenCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="));

  if (!accessTokenCookie) {
    Swal.fire({
      icon: "error",
      text: "로그인이 필요한 서비스입니다.",
      footer: '<a href="/login">로그인하러 가기</a>'
    });
    return false;
  }

  const headers = {
    ...(accessTokenCookie && { Authorization: `Bearer ${accessTokenCookie}` })
  };
  return headers;
};

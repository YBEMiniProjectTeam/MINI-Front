import type { Error } from "@components/AsyncWrapper/AsyncWrapper.types";

const getErrorMessage = (error: Error) => {
  const status = error?.response?.status;
  let title;
  let content;

  switch (status) {
    case 401:
    case 403:
      title = "로그인이 필요한 서비스입니다";
      content = "로그인 후 다시 시도해주세요.";
      break;
    case 500:
      title = "서버에 문제가 발생했습니다.";
      content = "잠시 후 다시 시도해주세요.";
      break;
    default:
      title = "문제가 발생했습니다.";
      content = "잠시 후 다시 시도해주세요.";
      break;
  }

  return { title, content };
};

export default getErrorMessage;

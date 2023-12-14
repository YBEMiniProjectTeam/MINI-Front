import { useEffect, useState } from "react";
import * as styles from "./Header.styles";
import { Link, useLocation } from "react-router-dom";
import { HeaderInput } from "./HeaderInput";
import { useRecoilState } from "recoil";
import { loginUrlState, loginUrlSearchState } from "@recoil/loginUrl";
import { useLogoutMutation } from "@hooks/login/useLoginMutation";
import { useCookies } from "react-cookie";
import { getMemberInfo } from "@api/getMemberInfo";

export const Header = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [isShowInput, setIsShowInput] = useState(true);
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [, setLoginUrl] = useRecoilState(loginUrlState);
  const [, setLoginSearchUrl] = useRecoilState(loginUrlSearchState);

  const location = useLocation();

  const [, removeCookie] = useCookies(["access-token"]);

  useEffect(() => {
    const currentPath = location.pathname;

    const displayInput = !currentPath.includes("searchResult");

    setIsShowInput(displayInput);
  }, [location.pathname, location.search]);

  useEffect(() => {
    // const CookiesAccessToken = cookies["access-token"];
    // 로컬스토리지 추가.
    const CookiesAccessToken = window.localStorage.getItem("access-token");

    // 토큰값 유효한지 검사
    if (!CookiesAccessToken) {
      return;
    } else {
      getMemberInfo(CookiesAccessToken).then((data) => {
        if (data.statusCode === 200) {
          setAccessToken(CookiesAccessToken);
        } else {
          // 로컬스토리지 삭제.
          window.localStorage.removeItem("access-token");

          // removeCookie("access-token", { path: "/" });
          removeCookie("access-token", {
            domain: ".anti-bias.kr",
            path: "/"
          });
        }
      });
    }
  }, [window.localStorage.getItem("access-token")]);

  const handleClickLogin = () => {
    setLoginUrl(location.pathname);
    setLoginSearchUrl(location.search);
  };

  const { mutate: logoutMutate } = useLogoutMutation();

  const handleClickLogoutButton = async (): Promise<void> => {
    if (!accessToken) {
      return;
    }

    await logoutMutate();

    // 로컬스토리지 삭제
    window.localStorage.removeItem("access-token");

    setAccessToken("");
  };

  return (
    <styles.Header>
      <styles.HeaderContainer>
        <Link to="/">
          <div className="header-title">NINE STAY</div>
        </Link>
        {isShowInput ? <HeaderInput /> : null}

        <div className="menu-container">
          {accessToken ? null : (
            <Link to={"/login"} onClick={handleClickLogin}>
              <div className="menu-wrap">로그인/회원가입</div>
            </Link>
          )}

          {accessToken ? (
            <>
              <Link to={"/reservations"}>
                <div className="menu-wrap">예약/구매 내역</div>
              </Link>

              <div
                className="user-menu"
                onMouseEnter={() => setSubMenuVisible(true)}
                onMouseLeave={() => setSubMenuVisible(false)}
              >
                <div className="relative">
                  <div className="menu-wrap">
                    <span>마이스테이</span>
                  </div>
                  <div
                    className={
                      isSubMenuVisible
                        ? "sub-menu sub-menu--visible"
                        : "sub-menu"
                    }
                  >
                    <nav>
                      <ul>
                        <Link to="/wishList">
                          <li>위시리스트</li>
                        </Link>
                        <Link to="/shoppingCart">
                          <li>장바구니</li>
                        </Link>
                        <Link to="/" onClick={handleClickLogoutButton}>
                          <li>로그아웃</li>
                        </Link>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </styles.HeaderContainer>
    </styles.Header>
  );
};

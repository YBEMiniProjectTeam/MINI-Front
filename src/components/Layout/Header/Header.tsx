import { useEffect, useState } from "react";
import * as S from "./Header.styles";
import { Link, useLocation } from "react-router-dom";

import { HeaderInput } from "./HeaderInput";
import { useRecoilState } from "recoil";
import { loginUrlState, loginUrlSearchState } from "@recoil/loginUrl";
import { useLogoutMutation } from "@hooks/login/useLoginMutation";

export const Header = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const [isShowInput, setIsShowInput] = useState(true);

  const location = useLocation();

  const [accessToken, setAccessToken] = useState<string | undefined>();

  const [, setLoginUrl] = useRecoilState(loginUrlState);

  const [, setLoginSearchUrl] = useRecoilState(loginUrlSearchState);

  useEffect(() => {
    const currentPath = location.pathname;

    const displayInput = !currentPath.includes("searchResult");
    setIsShowInput(displayInput);

    const accesstkoen = localStorage.getItem("access-token");
    if (accesstkoen) {
      setAccessToken(accesstkoen);
    }
  }, [location.pathname, location.search, accessToken]);

  const handleClickLogin = () => {
    setLoginUrl(location.pathname);
    setLoginSearchUrl(location.search);
  };
  const { mutate: logoutMutate } = useLogoutMutation();

  const handleClickLogoutButton = async (): Promise<void> => {
    if (!accessToken) {
      return;
    }

    await logoutMutate({
      accessToken
    });
    localStorage.removeItem("access-token");
    setAccessToken("");
  };

  return (
    <S.Header>
      <S.HeaderContainer>
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
      </S.HeaderContainer>
    </S.Header>
  );
};

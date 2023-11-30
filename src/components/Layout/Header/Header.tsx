import { useEffect, useState } from "react";
import * as S from "./Header.styles";
import { Link, useLocation } from "react-router-dom";

import { HeaderInput } from "./HeaderInput";
import { useRecoilState } from "recoil";
import { loginUrlState } from "@recoil/loginUrl";
import { useLogoutMutation } from "@hooks/login/useLoginMutation";

export const Header = (): JSX.Element => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const [isShowInput, setIsShowInput] = useState(true);

  const location = useLocation();

  const [accessToken, setAccessToken] = useState<string | undefined>();

  const [_, setLoginUrl] = useRecoilState(loginUrlState);

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.includes("searchResult")) {
      setIsShowInput(false);
    } else {
      setIsShowInput(true);
    }

    const accesstkoen = localStorage.getItem("access-token");
    if (accesstkoen) {
      setAccessToken(accesstkoen);
    }
  }, [location.pathname, accessToken]);

  const handleClickLogin = (): void => {
    setLoginUrl(location.pathname);
  };
  const { mutate: logoutMutate } = useLogoutMutation();

  const handleClickLogoutButton = async (): Promise<void> => {
    if (accessToken) {
      await logoutMutate({
        accessToken
      });
      localStorage.removeItem("access-token");
      setAccessToken("");
    }
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to="/">
          <div className="Title">Daily Hotel</div>
        </Link>
        {isShowInput ? <HeaderInput /> : null}

        <div className="menuContainer">
          {accessToken ? null : (
            <Link to={"/login"} onClick={handleClickLogin}>
              <div className="menuWrap">로그인/회원가입</div>
            </Link>
          )}

          {accessToken ? (
            <>
              <Link to={"/reservationDetails"}>
                <div className="menuWrap">예약/구매 내역</div>
              </Link>

              <div
                className="userMenu"
                onMouseEnter={() => setSubMenuVisible(true)}
                onMouseLeave={() => setSubMenuVisible(false)}
              >
                <div className="relative">
                  <div className="menuWrap">
                    <span>마이데일리</span>
                  </div>
                  <div
                    className={isSubMenuVisible ? "subMenu visible" : "subMenu"}
                  >
                    <ul>
                      <Link to="/wishList">
                        <li>위시리스트</li>
                      </Link>
                      <Link to="/shoppingCart">
                        <li>장바구니</li>
                      </Link>
                      <div onClick={handleClickLogoutButton}>
                        <li>로그아웃</li>
                      </div>
                      <Link to="/" onClick={handleClickLogoutButton}>
                        <li>로그아웃</li>
                      </Link>
                    </ul>
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

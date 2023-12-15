### 📌 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [추가 기능](#추가-기능)
3. [팀원 소개](#팀원-및-구현-기능)
4. [프로젝트 설명](#프로젝트-설명)
5. [트러블 슈팅](#트러블-슈팅)
6. [개인 회고](#개인-회고)  
<br/><br/>
  
# 프로젝트 개요
**9조의 숙박 예약 서비스, NINE STAY**  
<br/>

## 🔗 배포 링크
<a href="https://www.anti-bias.kr/" target="_blank">  
<img src="https://img.shields.io/badge/NINE STAY-d53f8c?style=for-the-badge&logo=houzz&logoColor=white"/></a><br>  

<a href="https://github.com/YBEMiniProjectTeam/MINI-Front" target="_blank">
<img src="https://img.shields.io/badge/원본 repository-111111?style=for-the-badge&logo=github&logoColor=white"/></a>
<a href="https://github.com/YBEMiniProjectTeam/MINI-Back" target="_blank">
<img src="https://img.shields.io/badge/BE repository-dfdfdf?style=for-the-badge&logo=github&logoColor=666666"/></a>  

### test user  
`ID`: test01@naver.com
<br>
`PW`: asdqwe123!@#
<br/><br/><br/>  

# 추가 기능
### 숙소 주변 맛집 추천
![맛집추천](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/ad847c87-947f-4b9b-a9c7-e37f1a2a254d)  
GPT API를 적용해 숙소 상세 페이지에서 자동으로 숙소 주변 맛집을 추천해주는 기능을 추가했습니다.  
<br/>

### Optimistic UI
![옵티미스틱 ](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/3ccb6369-28c7-4def-b803-72e276341a8b)  
특정 요청이 성공 할 것이라 가정을 하고 요청의 결과를 먼저 보여주는 Optimistic UI를 적용하여 UX를 개선했습니다.  
<br/>

### Skeleton UI
![스켈레톤](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/01bb5441-5440-4084-8794-e46b992655d1)  
데이터가 렌더링 되기 전에 페이지 레이아웃을 대략적으로 보여주는 Skeleton UI 로딩 애니메이션을 적용하여 UX를 개선했습니다.  
<br/>

### Drag & Drop
![Drag and Drop](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/70a8f3fa-9ddc-44ae-ab89-25f52d7d38f4)  
장바구니 페이지에서 개별 숙소를 장바구니에서 삭제할 때 Drag and Drop 방식을 적용하여 UX를 개선했습니다.  
<br/><br/><br/>   

### 예약 내역 취소
![ezgif com-video-to-gif-converted](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/90038848/3b14a43a-1a89-4143-966a-bb73791a3c31)

예약내역 페이지에서 해당 객실을 취소할 수 있게 개선했습니다.
<br/><br/><br/>   

# 팀원 및 구현 기능
<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/139189221?v=4"/>
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/90038848?v=4"/>
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/93538221?v=4"/>
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/63582234?v=4"/>
    </td>
    <td align="center" width="150px">
      <img src="https://avatars.githubusercontent.com/u/95364951?v=4"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/im-na0" target="_blank">
        FE 박나영
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/YongYong21" target="_blank">
        FE 박용희
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/seungsimdang" target="_blank">
        FE 이승현 (팀장)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JSH99" target="_blank">
        FE 정서현
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lilviolie" target="_blank">
        FE 한은지
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      - 결제<br>
      - 결제 완료<br>
      - 공통 설정(Suspense, playwright)<br>
      - Optimistic UI<br>
    </td>
    <td align="center">
      - 프로젝트 초기 설정<br>
      - 회원가입<br>
      - 로그인<br>
      - 장바구니<br>
			- 드래그 앤 드랍
    </td>
    <td align="center">
      - 검색 모달<br>
      - 검색 결과<br>
      - 위시 리스트<br>
      - 숙소 주변 맛집 추천 (GPT API)<br>
    </td>
    <td align="center">
      - 메인 페이지<br>
      - 404 페이지<br>
      - Skeleton UI<br>
      - README 작성<br>
    </td>
    <td align="center">
      - 숙소 상세<br>
			- 객실 상세 모달<br>
      - 예약 내역<br>
      - 예약 상세<br>
      - Skeleton UI<br>
    </td>
  </tr>
</table>  
<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/Dr-KoKo" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/97681286?v=4"/>
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/Jundev21" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/55421772?v=4"/>
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/DevKTak" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/68748397?v=4"/>
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/hyeond0" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/95916780?v=4"/>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      BE 고동훤 (팀장)
    </td>
    <td align="center">
      BE 김준래
    </td>
    <td align="center">
      BE 박경탁
    </td>
    <td align="center">
      BE 정현도
    </td>
  </tr>
</table>  
<br/><br/><br/>  

# 프로젝트 설명
## ✨ 구현 화면
<details>
  <summary><b>회원가입 / 로그인</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/002af724-e551-460e-a2f8-647f4640cc6a" /> 
  </div> 
</details>
<details>
  <summary><b>메인</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/0f6cec09-bf13-4362-b411-cfc656fff034" />  
  </div>
</details>
<details>
  <summary><b>검색 결과</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/a7fad949-a665-4bdf-8f7e-3c13e68183f8" />  
  </div>
</details>
<details>
  <summary><b>숙소 상세</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/b42070f2-148a-4d17-bc17-6fa5c8f5cb79" />  
  </div>
</details>
<details>
  <summary><b>장바구니</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/0c525956-8497-456f-b9d9-779ebb4ec4ce" />  
  </div>
</details>
<details>
  <summary><b>결제</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/efff7871-9bf0-4d19-9d20-650f213ae5fd" />  
  </div>
</details>
<details>
  <summary><b>예약 조회 / 위시 리스트</b></summary>
  <div>
    <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/5b1f33ce-ef54-420b-b7dc-279b766dd617" />  
  </div>
</details>  
<br><br>

## 🛠️ 기술 스택
### Environment 
<div>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</div>

### Front-End
<div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />
<img src="https://img.shields.io/badge/chakra ui-319795?style=for-the-badge&logo=chakraui&logoColor=white" />
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/react-111111?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" />
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=black" />
</div>

### Back-End
<div>
<img src="https://img.shields.io/badge/java-3766AB?style=for-the-badge&logo=java&logoColor=white" />
<img src="https://img.shields.io/badge/spring boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
<img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" />
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/amazon rds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white" />
<img src="https://img.shields.io/badge/amazon s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white" />
<img src="https://img.shields.io/badge/spring data jpa-F7DF1E?style=for-the-badge&&logoColor=black" />
</div>

### Communication
<div>
<img src="https://img.shields.io/badge/notion-9266CC?style=for-the-badge&logo=notion&logoColor=white" />
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
<img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />  
</div>
<br/><br/>  

## 🗓️ 개발 기간
**2023년 11월 20일 ~ 2023년 12월 15일**  
<br><br><br>  

# 트러블 슈팅
<details>
  <summary><b>박나영</b></summary>
  <div>

  ## 🚀 **에러바운더리를 이용한 에러 핸들링**
  ### Problem:
  - 초기 상황: 서버 통신 중 발생하는 에러를 각 컴포넌트에서 개별적으로 처리하고 있었습니다. 코드 중복 문제를 느꼈습니다.
  - 해결 전략: 공통적으로 발생하는 HTTP 상태 코드(401, 403, 500 등)를 효과적으로 관리하기 위해 에러바운더리 도입하기로 결정했습니다.
  - 구현: React-Query와 결합하여 선언적으로 에러 핸들링을 구현했습니다. 이를 통해 에러 발생 시 Fallback UI를 자동으로 표시할 수 있게 됐습니다.

  ### Try: React Query와 에러바운더리의 결합
  - React Query 설정: **`throwOnError: true`** 옵션을 설정하여 오류 발생 시 **`ErrorBoundary`** 컴포넌트가 에러를 감지하도록 합니다.
  - **`AsyncWrapper`** 컴포넌트 구현: **`useQueryErrorResetBoundary`**를 사용하여 에러 발생 시 Fallback UI 렌더링 및 쿼리 에러 초기화 구현했습니다.
  - **`ErrorFallback`** 컴포넌트: 에러 상황에 따라 적절한 UI(로그인 요구, 새로고침 버튼 등)를 제공. 사용자 행동에 따라 에러 상태를 초기화하거나 로그인 페이지로 이동 처리되도록 합니다.

  ### Result & Effect:
  - 중앙집중식 에러 관리: 공통적으로 발생하는 에러를 효율적으로 관리하고, 애플리케이션 전체에 일관된 에러 핸들링 방식 적용할 수 있었습니다.
  - 선언적 접근: React Query와 에러바운더리를 사용하여 에러 처리를 선언적이고 명시적으로 구현, 코드의 가독성 및 유지보수성이 향상되었습니다.

  ## 🚀 **컴포넌트 재사용 및 데이터 처리 최적화**
  ### Problem:
  - 초기 상황: UI 기준으로 컴포넌트 재사용하며, 다양한 타입의 데이터를 처리할 수 있도록 props 타입을 확장했습니다.
  - 문제 인식: 타입이 달라지면서 컴포넌트가 무거워지고 복잡해졌습니다. 그리고 데이터 가공이 컴포넌트 내부에서 이루어져, 가독성 및 유지보수성이 좋지 않았습니다.

  ### Try:
  - 데이터 처리 방식 개선: 데이터를 컴포넌트에 전달하기 전에 미리 가공하여 전달하는 방식으로 전환했습니다. 이때 React Query의 **`select`** 옵션을 활용하여 데이터 가공 로직을 쿼리 과정에 통합했습니다.
  - 컴포넌트 구조 변경: UI가 유사하더라도 데이터 구조가 다른 경우, 별도의 컴포넌트로 분리하여 재사용성과 유지보수성 향상에 초점을 맞추었습니다.

  ### Result & Effect:
  - **가독성 향상**: 컴포넌트가 수행하는 로직을 단순화하고, 데이터 가공을 외부로 분리하여 가독성 개선했습니다.
  - **유지보수성 증가**: 데이터 구조에 따라 별도의 컴포넌트를 사용함으로써, 변경에 대응하기 쉬워지고 각 컴포넌트의 목적이 명확해졌습니다.
  - **효율적인 데이터 관리**: React Query의 **`select`** 옵션을 통해 데이터 가공 과정을 쿼리 단계에서 처리하여, 데이터 관리의 일관성이 증대되었습니다.

  이번 리팩토링 과정을 통해 컴포넌트 설계의 중요성을 더 깊이 이해하게 되었습니다. 데이터 구조에 따라 적절히 컴포넌트를 분리하고, 데이터 가공을 쿼리 단계에서 처리함으로써, 애플리케이션의 가독성과 유지보수성을 크게 향상시킬 수 있었습니다! 또한 React Query를 Suspense, Optimistic updates, mutation, Errorboundary 등 다양하게 활용해봄으로써 프론트엔드 개발에서의 데이터 관리 전략에 대한 이해도가 크게 향상되었습니다. 앞으로의 프로젝트에도 이러한 지식을 적극적으로 활용할 계획입니다.
  </div>
</details>
<details>
  <summary><b>박용희</b></summary>
  <div>

  ### 프록시 설정
  ```jsx
  // host
  127.0.0.1 domain.com

  127.0.0.1 location.domain.com
  ```
  host 파일을 변경할 때, 도메인 주소 앞에 일부 주소를 작성해야 된다는 것을 알았다.
  `127.0.0.1 [domain.com](http://domain.com)` 으로 작성할 시, 기존에 있던 api 사이트 [domain.com/index/swagger](http://domain.com/index/swagger로) 으로 접속할 경우, 127.0.0.1/index/swagger 로 접속이 되는 것과 같기때문에 네트워크 오류( 존재하지 않는 사이트 )가 뜨게 된다.  

  ### CSS
  <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/1e7f2591-d1f8-4bbb-8d5d-e0675100fb9e">  
  
  Header 메뉴와 서브메뉴 사이의 간격이 있기때문에 Header Menu → Hover → Submenu 커서를 옮기는 과정에서 계속 닫히게 되었다.  
  이 부분을 해결하기 위해서 각 메뉴마다 `div` 태그를 2번 작성을 해서 마우스의 커서 범위를 늘려주는 방식으로 구현하게 되었다.

  ### Z-index
  드래그앤 드롭을 사용해서 `Drop` 컴포넌트의 위치에 대한 에러
  css 코드에서 `position:fixed` `z-index:100` 을 적용했지만 `Drop` 컴포넌트가 일부 컴포넌트 보다 아래에 위치해 있는 경우가 있었다.  
  `Stacking contexts` 때문에 아무리 Z-index값을 주더라도 해당 컴포넌트는 무조건 아래에 위치하게 된다. 그래서, 해당 컴포넌트를 부모 컴포넌트에 작성을 해서 해결을 했다.
  </div>
</details>
<details>
  <summary><b>이승현</b></summary>
  <div>
    
  ### 무한스크롤 에러 핸들링

  ```jsx
  useEffect(() => {
      setSearchList((prevSearchList) => [
        ...prevSearchList,
        ...data.accommodations
      ]);
      setTotalPage(data.total_pages);
      setIsLoadingMore(false);
    }, [page]);

  ...

  const handleScroll = debounce(() => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        if (page < totalPage) {
          setPage((prevPage) => prevPage + 1);
          setIsLoadingMore(true);
          refetch();
        }
      }
    }, 200);
  ```

  처음 구성한 무한스크롤 로직은 위와 같았다. scroll값이 조건을 만족하면 `page`값이 변화하게 되고, data의 `refetch`가 일어난다. 이후, `useEffect` hook의 의존성 배열에 `page` 값을 넣어주었기 때문에 `searchList` 가 이전 리스트 요소들 + 새로 받아온 data들로 업데이트되는 로직이었다.  
  위 로직은 겉보기에는 문제없이 작동하는것처럼 보였지만, 페이지가 넘어갔을 때 넘어간 페이지뿐만 아니라 이미 한번 요청을 보낸 이전 페이지에 대한 데이터도 fetching이 일어났다. 

  ```jsx
  return useSuspenseQuery({
      queryKey: ["searchList", pageNum, pageSize, headers, isRefetched],
      queryFn: () =>
        getSearchList(
          accomodationName,
          endDate,
          category,
          pageNum,
          pageSize,
          headers
          pageSize
        )
    });
  ```

  그 이유를 한참 찾다가 `useSearchList` hook의 `queryKey` 에 `pageNum` 을 넣어줬었는데, 해당 값에 변화가 생기면 `refetch` 가 일어난다는 사실을 간과하고 있었다. 

  ```jsx
  if (page < totalPage) {
    setPage((prevPage) => prevPage + 1);
    setIsLoadingMore(true);
    refetch();
  }
  ```

  그래서 `setPage` 가 완료되기 전에 기존 페이지에 대해 `refetch`가 한번 더 일어나고, `setPage` 가 완료된 후에 다시 한 번 다음 페이지에 대해 `refetch` 가 일어났던 것이다.

  ```jsx
  useEffect(() => {
      setSearchList((prevSearchList) => [
        ...prevSearchList,
        ...data.accommodations
      ]);
      setTotalPage(data.total_pages);
      setIsLoadingMore(false);
    }, [data]);

  ...

  useEffect(() => {
    if (page > 1) {
      refetch();
    }
  }, [page]);

  ...

  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      if (page < totalPage) {
        setPage((prevPage) => prevPage + 1);
        setIsLoadingMore(true);
      }
    }
  }, 200);
  ```
  원인을 찾고 나니,`queryKey` 에서 `pageNum` 을 삭제하고, `searchList` 컴포넌트도 `setPage`가 일어난 후에 refetch가 될 수 있도록 수정을 거쳐 간단하게 해결할 수 있었다.

  ### **검색하기 버튼 두번 눌러야 검색되는 에러 핸들링**
  기존 `search` 컴포넌트는 `keyword`, `category`, `district` 값들은 querystring에서 값을 가져와 각각 state의 초깃값으로 설정해줬고, `start_date` 와 `end_date` 는 모달에 setter를 넘겨서 state 관리를 하는 약간 기형적인 구조를 띄고 있었다. 심지어 `start_date`, `end_date`, `district`, `category` 값들은 동시에 전역으로 관리해주고있어서 더욱 복잡한 로직이었다.  
  위와 같이 복잡한 로직이 탄생하게 된 배경은 `searchList` 컴포넌트에서 사용하는 `useSearchList` hook을 `search` 컴포넌트에서도 재사용하여 검색하기 버튼 클릭 시 `refetch` 를 해주기 위함이었다. 그런데, `useSearchList` hook의 parameter로 전달해줄 값들이 많다 보니까 컴포넌트간 상태의 공유가 필요했고, 기존에 querystring 지정이 되어 있던 것들을 가져오는 로직과 전역으로 상태를 관리하는 로직이 섞여서 복잡한 로직이 탄생하였다.  
  안그래도 복잡한 로직이라 리팩토링 대상이었는데, state의 업데이트가 비동기적으로 처리되기때문에 `refetch` 시에 이전 state값을 가지고 동일한 get요청을 보내는 이슈가 있었다. 그래서 검색하기 버튼을 처음에 누르면 화면에 변화가 없고, 다시 클릭해서 다음 리렌더링이 발생하는 시점이 되어서야 검색 결과가 업데이트되는 현상이 발생하였다.  
  그래서 복잡한 로직을 모두 querystring으로 통일하기로 마음먹었다.

  ```jsx
  const Search = ({
    keyword,
    district,
    start_date,
    end_date,
    category
  }: SearchProps) => {
  ```

  상위 컴포넌트에서 querystring을 가져와 `search` 컴포넌트에 props로 전달하고, 해당 값들은`search` 컴포넌트의 내부 state로 관리하였다.

  ```jsx
  const handleSearchClick = () => {
    const queryParams = new URLSearchParams({
      ...(accommodationName && { keyword: accommodationName }),
      ...(selectedDistrict && { district: selectedDistrict }),
      ...(startDate && { start_date: startDate }),
      ...(endDate && { end_date: endDate }),
      ...(selectedCategory && { category: selectedCategory }),
      page_num: "1",
      page_size: "10"
    });

    window.location.href = `/searchResult?${queryParams.toString()}`;
  };
  ```

  이후, 검색하기 버튼을 클릭했을 때, `refetch` 를 하는 것이 아니라 queryParams를 설정해주고 페이지의 새로고침을 유발하는 로직으로 수정하여 해결하였다.

  ### locale 설정에 따른 date parse과정에서의 에러 핸들링

  ```tsx
  useEffect(() => {
    if (selectedDate && selectedDate[0] && selectedDate[1]) {
      const newStartDate = selectedDate[0].replace(/\s+/g, "");
      const newEndDate = selectedDate[1].replace(/\s+/g, "");

      const parsedStartDate = parse(newStartDate, "yyyy.MM.dd.", new Date());
      const parsedEndDate = parse(newEndDate, "yyyy.MM.dd.", new Date());

      const formattedStartDate = format(parsedStartDate, "yyyy-MM-dd");
      const formattedEndDate = format(parsedEndDate, "yyyy-MM-dd");

      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);
    }
  }, [selectedDate]);
  ```

  `search` 컴포넌트에서는 `selectedDate` 값이 변경될 때마다 그 값을 parse 후 formatting하는 작업을 해주었다. 로컬에서 테스트할때는 parse과정에서 에러가 없었는데, 테스팅을 하다보니 parse 에러가 발생했다. 날짜 형식이 맞지 않는다는 내용의 에러였는데, 처음에는 null 값이 들어와서 parse가 안되는줄 알았다. 하지만, console에 로그를 찍어보니 날짜 값은 정상적으로 설정되고 있었다.

  ```jsx
  useEffect(() => {
    const formattedDates = dateRange.map((date) =>
      date ? date.toLocaleDateString() : ""
    );

    setSelectedDate(formattedDates);
  }, [dateRange]);
  ```

  parse시에 날짜 형식도 바꿔보고 여러 시도를 해도 해결되지 않다가 “`dateRange` 값도 이상이 없고, `selectedDate` 값도 이상이 없으면 `formattedDates` 로 변환하는 과정에서의 문제인가?” 라는 생각이 들어서 console에 `formattedDates` 값을 찍어보니 그 로그가 조금 달랐다.   
![image](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/8c2fe814-3fba-4fe5-81fb-ccafebbf0e15)  
![image](https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/71a2e6cd-9d8c-4b38-a655-c19b2ff9ff04)  
  위 사진은 locale을 적용하지 않았을 때의 `formattedDate` , `selectedDate` 값이고 아래 사진은 locale을 적용했을 때의 값이다. 크롬 브라우저에서는 toLocaleDateString 함수의 default값이 "ko-KR” 이어서 로컬에서 동작했을 때는 parse과정에서 에러가 발생하지 않았지만, chromium 브라우저에서는 default값이 달라서 `selectedDate` 값이 다르게 불러와진 것이었다. 

  ```jsx
  useEffect(() => {
    const formattedDates = dateRange.map((date) =>
      date ? date.toLocaleDateString("ko-KR") : ""
    );

    setSelectedDate(formattedDates);
  }, [dateRange]);
  ```

  그래서 `tolocaleDateString` 함수 호출 시 "ko-KR" 옵션을 주어서 다른 브라우저에서 date 변환을 할때도 통일된 값으로 변환될 수 있도록 하여 에러를 해결하였다.
  </div>
</details>
<details>
  <summary><b>정서현</b></summary>
  <div>

   ### 배포 시 CSS 적용 안 되는 오류
  개발 환경에서는 문제 없이 잘 적용되었던 css가 배포를 했더니 깨지는 현상이 발생했습니다. css가 제대로 적용되지 않았던 컴포넌트는 모두 `react-slick` 캐러셀 라이브러리를 사용한 컴포넌트였습니다. 캐러셀의 크기가 비정상적으로 크게 나타나 이미지가 제대로 나타나지 않았고, 버튼으로 넘어가는 방식이 아닌 세로로 모든 이미지가 펼쳐지는 오류가 나타났습니다. 구글링을 통해 여러 조사를 해보았고, 배포 시 일부 css가 제대로 나타나지 않는 오류가 발생한다는 레퍼런스를 찾아 여러 방법을 시도했습니다.

  **Try 1 - 브라우저 캐시 삭제**  
  브라우저의 캐시가 남아있게 되면 css 파일의 변경을 추적하지 못해 이전 css를 적용한다는 레퍼런스를 참고하여 크롬 브라우저의 캐시를 삭제해보았지만, 변화가 없었습니다. 크롬 브라우저가 아닌 이전에 접속한 적 없던 safari 브라우저에서도 동일하게 캐러셀이 깨져보였습니다.

  **Try 2 - CSS 파일명 수정**  
  스타일 파일을 불러올 때 최신 버전에 맞는 파일을 불러올 수 있도록 버전 정보를 추가해주는 방식을 적용해보았지만, 변화가 없었습니다. 추후 더 레퍼런스를 찾아봤을 때, `CRA` 환경에서는 캐시 쿼리 스트링이 적용이 되지 않아 수동적으로 적용해줘야 하지만, `Vite` 환경에서는 파일에 해싱이 자동 적용된다는 사실을 알게 되었습니다. 따라서 파일 캐시 문제 또한 아니었습니다.  
  ```css
  <link rel="styleshhet" href="/css/reset.css?v=1120" />
  ```

  **Try 3 - Nginx 캐시 무효화**  
  배포 환경이 nginx였고, css 적용이 제대로 안 되는 문제는 대부분 캐시 문제라는 이야기가 많아 nginx의 캐시를 무효화하는 방법을 고려해보았습니다. 백엔드분과 cloudfront를 통해 캐시 설정을 변경해보고, 논의한 결과 nginx 상의 문제는 아니었습니다. 

  **Try 4 - Vercel 배포**  
  Nginx로 배포하는 과정에서 css가 적용이 안 되는 것인지를 정확하게 확인하기 위해 nginx가 아닌 vercel로 배포를 해보았습니다. vercel로 배포했을 때도 이전과 동일하게 캐러셀 이미지가 제대로 나타나지 않았고, 세로로 모든 이미지가 펼쳐져 나타났습니다. nginx의 문제가 아닌 것을 깨닫고 처음으로 돌아가, 스타일 적용이 안 되는 시점부터 다시 고민해보았습니다. 문제의 시발점은 `react-slick` 라이브러리였기에 캐러셀 요소를 천천히 들여다보았습니다.

  **Try 5 - 절댓값으로 고정**  
  캐러셀의 크기가 비정상적으로 크게 나타나는 것을 보아 혹시 크기가 고정되지 않아 그런 것인가 싶어 캐러셀과 내부 요소들의 크기를 절대값으로 고정해보았습니다. 크기는 고정되어 비정상적으로 크게 나타나는 상황은 벗어났지만, 여전히 캐러셀이 정상 작동하지 않았습니다.

  **Try 6 - slick CSS 비교 → 해결 ✅**  
  css가 어디서 적용이 안 되는 것이 찾기 위해 개발 환경과 배포 사이트의 캐러셀 css를 하나씩 비교해보았습니다. 가장 상위 요소인 `slick-slider`부터 css를 비교해보았고, 그 결과 `slick-slide` 요소에서 일부 css가 다르다는 것을 발견했습니다. 개발 환경에서는 잘 적용되어 있던 **float: left**가 배포 사이트에서는 적용되지 않은 상태였고, 해당 css를 적용해주니 캐러셀이 정상 작동했습니다. 

  ```css
  .slick-slide {
      float: left;
    }
  ```

  캐러셀 이미지가 화면에 정상적으로 나타나지 않았던 것에 초점을 맞추고 float 속성에 대해 더 고민해보았다면 초기에 발견할 수 있었던 문제였을 텐데 생각보다 오랜 시간 헤맸던 것이 아쉬웠습니다. 문제가 발생했을 때 문제의 원인, 근본에 대해 더 탐구해야 한다는 것을 배울 수 있었고, 이후 `react-slick` 라이브러리를 조사하며 배포 환경에서만 float 속성이 적용되지 않았던 정확한 이유를 알아보려 했으나 알아내지 못했습니다. 이후에도 다른 문서 및 탐구를 통해 정확한 원인을 알기 위해 공부할 것이고, 같은 문제를 겪지 않기 위해 트러블 슈팅 통해 기록을 상세하게 남깁니다.
  </div>
</details>
<details>
  <summary><b>한은지</b></summary>
  <div>
   
   ### 날짜 / 인원별 객실 리스트 렌더링 시 발생하는 버그 수정
  <img width="600px" src="https://github.com/YBEMiniProjectTeam/MINI-Front/assets/63582234/acb9acdf-26df-40f5-b37d-5320076b35a2"/>  
  
  숙소 상세 페이지에서 날짜 또는 인원을 변경했을 때, '설정하기' 버튼을 눌렀을 때가 아닌 날짜와 인원을 재선택한 시점에 바로 새로운 객실 리스트가 렌더링되는 버그가 발생했습니다.
  초기 코드는 다음과 같습니다.

  ```tsx
  import { useSuspenseQuery } from "@tanstack/react-query";
  import getRoomList from "@api/accomodation/getRoomList";
  import { RoomListProps } from "@components/ProductDetail/ChooseDetail/ChooseDetail.types";

  const useRoomListQuery = ({
    id,
    checkInDate,
    checkOutDate,
    guestCnt
  }: RoomListProps) => {
    return useSuspenseQuery({
      queryKey: ["roomList", checkInDate, checkOutDate, guestCnt],
      queryFn: () => getRoomList({ id, checkInDate, checkOutDate, guestCnt })
    });
  };

  export default useRoomListQuery;
  ```

  `useRoomListQuery`에 `id`, `checkInDate`, `checkOutDate`, `guestCnt`를 통해 객실 리스트를 불러올 수 있는 `getRoomList API`를 연동하였고, `queryKey`에도 `checkInDate`, `checkOutDate`, `guestCnt`를 저장하여 해당 값들이 변경될때마다 `useRoomListQuery`가 `refetch`되도록 코드를 작성했습니다.  
  처음에는 리액트 쿼리의 작동 방식을 제대로 이해하지 못했고, 단순히 '`queryFn`에서 사용되는 변수가 있다면 이 변수는 `queryKey`에도 포함되어야 한다'라는 단편적인 지식으로 `getRoomList`의 변수인 `checkInDate`, `checkOutDate`, `guestCnt`를 `queryKey`에 저장해두었습니다.  
  하지만 `queryFn`에 사용된 변수를 `queryKey`에 저장하는 이유는 `queryKey`의 값이 변경되었을 때 내부적으로 다시 `queryFn`을 `refetch`하기 위함이고, 위의 경우에는 해당 쿼리가 값이 변경된 시점이 아닌 특정 행동이 실행되었을 때 `refetch`되어야 하기 때문에 `queryFn`의 변수들을 `queryKey`에 저장할 필요가 없었습니다. 따라서 `queryKey`에서 해당 변수들을 삭제하고, '설정하기' 버튼을 클릭했을 때 해당 쿼리가 `refetch`되도록 코드를 다시 작성했습니다.

  ```tsx
  import { useSuspenseQuery } from "@tanstack/react-query";
  import getRoomList from "@api/accomodation/getRoomList";
  import { RoomListProps } from "@components/ProductDetail/ChooseDetail/ChooseDetail.types";

  const useRoomListQuery = ({
    id,
    checkInDate,
    checkOutDate,
    guestCnt
  }: RoomListProps) => {
    return useSuspenseQuery({
      queryKey: ["roomList"],
      queryFn: () => getRoomList({ id, checkInDate, checkOutDate, guestCnt })
    });
  };

  export default useRoomListQuery;
  ```

  ```tsx
  ...
  const handleClick = () => {
      if (refetch) {
        refetch();
      }
      onClose();
    };
  ...
  ```
  </div>
</details>
<br><br>

# 개인 회고
<details>
  <summary><b>박나영</b></summary>
  <div>

  ### KEEP 🎯
  - `react query`& `Errorboundary`, `Suspense` 사용으로 선언적 프로그래밍 경험  
  - `tanstack query v5` 같은 새로운 기술 도입 시도  
  - `playwright` 로 테스트 코드 작성을 통해 가독성과 유지보수성에 대한 고민  
  - 컴포넌트 설계에 대한 고민  
  - PR과 코드리뷰에 신경썼음
  ### PROBLEM 🥊
  - 2가지의 스타일 라이브러리 사용으로 팀원들 간 코드 통일성이 떨어졌음.  
  - 웹 접근성에 대한 고려가 없었음   
  - MSW를 초기에 활용하지 못해서 아쉬움  
  - 새로운 기술 도입을 시도할 때 근거가 불충분 했던 점이 아쉬움  
  - 테마를 정의하지 않고 색상코드를 파편화해서 사용했던 점이 아쉬움  
  ### TRY 🚀
  - 스타일 라이브러리는 1가지로 통일 할 것. 스타일드 컴포넌트 네이밍 컨벤션 도입하기.  
  - 웹 접근성과 관련한 다양한 옵션들 스터디  
  - 백엔드와 논의 후 대략적인 API 명세가 나오면 MSW 바로 도입해보기!  
  - 통일성 있는 코드를 작성하기 위해서 컨벤션을 꼼꼼히 챙겨야겠음  
  </div>
</details>
<details>
  <summary><b>박용희</b></summary>
  <div>
   
  ### KEEP 🎯
  - 다양한 라이브러리 사용 및 시도  
  - 맡은 부분에 대한 플로우 이해 후, 코드 작성  
  ### PROBLEM 🥊
  - React query의 전체적인 흐름 이해 및 코드 작성.  
  - Typescript Generic 문법  
  ### TRY 🚀
  - 함수 및 컴포넌트 분리  
  - 타입을 작성할 시, Generic을 사용해서 확장성 좋게 하기.  
  - htrml, css 태그 속성(option) 이해  
  </div>
</details>
<details>
  <summary><b>이승현</b></summary>
  <div>
    
  ### KEEP 🎯
  - `react query` 를 이용한 api 호출 로직 통일 및 `onSuccess` , `onError` 시 동작 관리  
  - `Errorboundary` 와 `Suspense` 를 이용한 fallback 처리  
  - `playwright` 를 이용한 테스트코드 작성, gpt api 연동 등 새로운 시도  
  ### PROBLEM 🥊
  - `react query` 에 대한 숙지 부족  
  - 비동기 상태 변화 관리를 명목으로 무분별한 `useEffect` 사용  
  - 코드 작성 시 가독성을 고려하지 못함  
  ### TRY 🚀
  - 중복되는 코드에 대한 모듈화  
  - 클린 코드 작성 방법 고민   
  </div>
</details>
<details>
  <summary><b>정서현</b></summary>
  <div>

  ### KEEP 🎯
  - `react query`, `ErrorBoundary`, `Suspense`, `Skeleton UI` 등 새로운 라이브러리 및 기능 시도  
  - 컴포넌트 및 함수의 적절한 분리 통한 클린 코드에 대한 고민  
  ### PROBLEM 🥊
  - 모바일 반응형 고려
  - 효율적인 코드 리뷰
  ### TRY 🚀
  - css 속성 및 활용에 대한 학습  
    → `Chakra UI`를 얼마나 더 효율적으로 사용할 수 있는지, 
    → 반응형을 구현할 때 어떤 상대 단위를 사용하면 좋은지,  
  - 좋은 코드 리뷰를 할 수 있는 방법 고민  
    → 멘토님이 제공해주신 코드 리뷰 가이드 숙지  
  </div>
</details>
<details>
  <summary><b>한은지</b></summary>
  <div>
     
  ### KEEP 🎯
  - `React Query`, `Chakra UI`, `Playwright` 등 새로운 라이브러리 시도  
  - `TypeScript`, `axios` 등의 다양한 활용  
  ### PROBLEM 🥊
  - 팀원들간의 코드의 통일성을 유지하기 위해 `Chakra UI`를 제대로 활용하지 못함  
  - `React Query`, `Playwright` 등 새로 접한 라이브러리에 대한 숙지가 미흡하여 제대로 활용하지 못함  
  ### TRY 🚀
  - 모듈화, 클린 코드에 대한 고민
  - 새로 접한 라이브러리에 대한 추가적인 학습
  </div>
</details>

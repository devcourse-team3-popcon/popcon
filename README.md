# 🎧 POPcon. 해외 팝송 팬들을 위한 커뮤니티
<div align="center">
<img alt="image" width="100%"  src="https://github.com/user-attachments/assets/95af0811-0d0b-4561-b0d4-ef4944991910">
</div>

# [POPcon] : WEB FRONTEND

> **프로그래머스 데브코스 프론트엔드.** 

## 👋 배포 주소

> https://devcourse-popcon.netlify.app

## 🎵 프로젝트 소개
<mark>POPcon은 해외 음악 팬들을 위한 커뮤니티 기반 음악 플랫폼입니다.<br>
사용자 간의 음악 추천과 감성 공유, 콘서트 정보 제공을 통해 더 풍부한 음악 경험을 제공합니다.</mark>

- POPcon은 해외 팝송을 사랑하는 유저들이 음악으로 소통할 수 있는 커뮤니티 기반 플랫폼입니다.
- 사용자들은 직접 숨겨진 명곡(숨듣명)을 추천하거나, 콘서트 후기 및 음악 이야기를 자유롭게 공유할 수 있습니다.
- 음악 검색과 실시간 재생 기능을 통해, 마음에 드는 노래를 나만의 플레이리스트에 저장하고 감상할 수 있습니다.
- 검색 과정에는 자동완성 기능을 적용해 더 빠르고 정확한 검색 경험을 제공합니다.
- 사용자가 만든 플레이리스트를 분석하여 감성 맞춤형 음악을 추천받을 수 있습니다.
- 해외 아티스트의 내한 공연 정보도 함께 제공되며, 예매처와 연동되어 실질적인 음악 감상 경험이 현실로 확장됩니다.
- POPcon은 단순한 스트리밍을 넘어 음악을 중심으로 한 진짜 연결을 추구합니다.
                                                                                                         |

## 💻 Stacks

| 구분                 | 기술                                                                                                                                                                                                             |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Core**             | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Build Tool**       | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)                                                                                                                    |
| **Style**            | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)                                                                                              |
| **State Management** | ![Zustand](https://img.shields.io/badge/Zustand-FF9640?style=flat-square&logo=Zustand&logoColor=white)                                                                                                           |
| **Version & Issues** | ![Notion](https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)         |
| **Collaboration**    | ![Notion](https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white)             |
| **Design**           | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)                                                                                                                  |
| **Deployment**       | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)                                                                                                           |
```
src
├── App.tsx
├── apis
│   ├── alert
│   ├── axiosInstance.ts
│   ├── login
│   ├── mypage
│   ├── openai
│   ├── playlist
│   ├── spotify
│   ├── upcoming_concerts
│   └── youtube
├── assets
│   ├── fonts
│   └── images
├── components
│   ├── aboutus
│   ├── common
│   └── login
├── features
│   ├── chat
│   ├── community
│   ├── home
│   ├── mypage
│   ├── notification
│   ├── playlist
│   └── upcoming_concerts
├── hooks
│   ├── useChannelId.ts
│   └── usePostsByChannel.ts
├── layout
│   ├── Layout.tsx
│   └── header
├── lib
│   └── utils.ts
├── main.tsx
├── pages
│   ├── AboutUs.tsx
│   ├── Chat.tsx
│   ├── Community.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Playlist.tsx
│   └── UpcomingConcerts.tsx
├── stores
│   ├── authStore.ts
│   └── playlistStore.ts
├── styles
│   ├── index.css
│   └── tailwind.css
├── utils
│   ├── auth.ts
│   ├── comment.ts
│   ├── groupMessages.ts
│   ├── notification.ts
│   ├── parseBopTitle.ts
│   ├── parseTitle.ts
│   ├── parseUserName.ts
│   ├── post.ts
│   ├── stringUtils.ts
│   ├── theme.ts
│   └── userParser.ts
└── vite-env.d.ts
```
---

## 🎉 FRONTEND 팀 소개

|                                      박준규                                      |                                      현혜주                                      |                                      이민지                                      |                                      권유정                                       |                                      조정우                                      | 
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img width="160px" src="https://github.com/user-attachments/assets/2703f711-dbcd-42e5-a28b-cec6d3e24fea" /> | <img width="160px" src="https://github.com/user-attachments/assets/321cea84-19d2-4cb8-891b-34b0a1e80b8d" /> | <img width="160px" src="https://github.com/user-attachments/assets/a5ef1f76-9320-42c1-a386-32203f4c05b4" /> | <img width="160px" src="https://github.com/user-attachments/assets/8b9e6acf-5abd-4319-bc29-5a3a856fb1d6" /> | <img width="160px" src="https://github.com/user-attachments/assets/764a753d-f339-447b-9e9e-8064622d6fe7" /> 
|                [@parkjungyuxx](https://github.com/parkjungyuxx)                  |                  [@hxe_zu](https://github.com/hxezu)                  |                    [@mjlee](https://github.com/mjlee38)                    |                     [@YooJung_K](https://github.com/best106yj)                     |                        [@mafornp](https://github.com/mafornp)

<br>

## 🧑‍💻 팀원별 역할

🎸 박준규
- 프로젝트 구조 설계 및 초기 세팅
- 프로젝트 배포 Netlify
- 전체 코드 리팩토링
- 플레이리스트 페이지 구현
- Spotify API 연동 및 검색 기능 구현
- Debounce를 이용한 자동완성 기능 구현
- GPT API를 이용한 추천 시스템 구축
- 음악 데이터 상태 관리 (Zustand 활용)
- 페이지네이션 기능 구현 (URL 기반 쿼리 파싱)
- 사이드 메뉴 UI/UX 구현
- 다크모드/라이트모드 구현
- 반응형 스타일 및 Skeleton UI 적용을 통한 사용자 경험 향상
- 404 페이지 구현 및 Axiosinstance 에러 핸들링 정책

🎨 현혜주
- 전체 프로젝트 UI/UX 설계
- 브랜드 아이덴티티 구축 (로고 및 브랜드 톤앤매너 등)
- 디자인 시스템 설계 (색상, 타이포그래피, 버튼, 컴포넌트 등)
- 홈 화면 구현 (GSAP + ScrollTrigger를 활용한 스크롤 애니메이션 적용)
- 숨듣명 게시판 페이지 (CRUD) 구현
- Youtube API 연동 및 노래 재생 기능 구현
- 플레이리스트에 숨듣명 노래 추가할 수 있도록 연결
- 콘서트/자유 게시판 (CRUD) 구현
- 게시물 검색 기능 추가
- 게시물 상세 페이지 내 댓글 기능 및 알림 전송 기능 구현
- 반응형 스타일링 및 Skeleton UI 를 적용하여 UX 개선
- 인터랙션 개선을 위한 마이크로 애니메이션 적용
- 전체 프로젝트 디자인 QA (컴포넌트 여백, 반응형 레이아웃 등 불일치 요소 일관성 있게 수정)

🎵 이민지
> Upcoming Concerts 페이지 개발
- 내한 공연 정보를 제공하는 콘서트 페이지 전체 구현
- 날짜 기준 정렬, 예매 사이트 외부 링크 연결
- 반응형 카드 UI 및 Skeleton UI 적용으로 사용자 경험 향상
- useConcerts, usePaginatedConcerts 커스텀 훅을 통해 데이터 로딩 및 페이지네이션 최적화
> 알림(Notification) 기능 구현
- 댓글, 좋아요, 팔로우 알림 수신 및 읽음 처리 로직 구현
- 알림 클릭 시 해당 게시글 또는 채팅 페이지로 이동 처리
- 사용자 프로필 이미지 렌더링 및 외부 클릭 시 자동 닫힘 처리로 UX 구현
> 핵심 개발 포인트
- 직관적인 공연 탐색 흐름과 인터랙션 중심 알림 UX 제공
- 커스텀 훅 기반 상태 관리 및 컴포넌트 분리로 유지보수 용이
- 로딩 중 UI 처리, 외부 클릭 감지 등 UX 세부 요소 반영
- 디자인 QA (마이페이지, 로그인, 회원가입, 약관동의 페이지)

🧭 권유정<br>
> 채팅 페이지
- 메시지 목록
- 상대별 대화 목록 구분 및 선택 가능
- 대화 상대 선택 시 해당 메시지 내역 출력
- 새로고침 버튼으로 메시지 목록 실시간 업데이트
- Debounce를 적용한 사용자 검색 기능
- 사용자 검색 시 기존 목록 대신 검색 결과 출력
- 각 사용자별 로그인 상태 실시간 표시
- 최근 대화 상대를 상단에 우선 배치
> 메시지 내역
- 날짜 기준의 메시지 구분선 제공
- 보낸 사람과 받은 사람의 메시지 위치 시각적으로 구분
- 연속된 메시지를 구분하여 라운딩 처리된 UI 적용
- 메시지 전송 기능 (전송 아이콘 클릭 / Enter 키)
- 전송 즉시 실시간 반영되는 채팅 내역
- 스크롤 자동 이동 처리로 최신 메시지 확인 용이
- 로딩 중에는 Skeleton UI 표시로 사용자 경험 향상

🛠️ 조정우
> 회원 인증 및 계정 관리
- POPcon 자체 회원가입 및 로그인 기능 제공
- 카카오 소셜 로그인 연동
> 마이페이지
- 회원 프로필 정보 수정 및 업데이트
- 비밀번호 변경 기능
- 로그아웃 및 계정 탈퇴 처리
- 다른 회원의 프로필 정보 조회
- 내가 작성한 게시글/ 타 유저의 게시글 열람 가능
<br>

## ✨ 페이지별 기능
### 1. 메인페이지
<mark>메인 페이지는 POPcon을 처음 접하는 유저도 흥미를 가질 수 있도록 구성된 랜딩 페이지입니다.<br>
GSAP 애니메이션을 활용해 콘텐츠에 동적인 요소를 더함으로써, 시각적인 재미와 몰입감을 주며, 사용자로 하여금 서비스에 대한 관심을 자연스럽게 유도합니다.</mark>
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/2207234d-8589-4851-a4ed-a50ab9be9dbf">
> 라이트모드
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/6e4b01c1-2b6e-4365-8b3a-db8f8df692ab">
<br><br><br>

### 2. 음악 커뮤니티
<mark> 사람들의 숨듣명과 콘서트와 음악 이야기를 나누는 음악 커뮤니티를 만들었어요.</mark><br><br>
사용자들이 공유한 숨듣명(숨겨진 듣기 명곡)이 카드 형태로 나열됩니다.
각 카드에서는 다음과 같은 기능을 제공합니다:
- 노래를 직접 재생하여 감상할 수 있습니다.
- 좋아요를 눌러 공감할 수 있습니다.
- 내 플레이리스트에 곡을 추가할 수 있습니다.
- 카드에 마우스를 올리면, 해당 곡을 추천한 이유가 표시됩니다.
- 유저 이름 또는 닉네임을 클릭하면 해당 유저의 프로필 페이지로 이동합니다.
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/2be68370-54a2-4288-9f02-41f50143ee66">
<br>

사용자는 공유하고 싶은 숨듣명(숨겨진 듣기 명곡)을 직접 등록할 수 있습니다.
- 자동완성 기능을 통해 원하는 곡을 빠르게 검색할 수 있습니다.
- 셀렉트 박스를 이용해 장르를 손쉽게 선택할 수 있습니다.
- 곡을 추천하는 이유를 코멘트로 작성할 수 있습니다.
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/23b06969-124f-4b9a-b2d0-462de190e0fc">

- 게시판에서는 다양한 게시물을 확인할 수 있으며,
- 게시물을 클릭하면 해당 게시물의 상세 페이지로 이동합니다.
- 좋아요를 통해 공감을 표현할 수 있고, 댓글 작성도 가능합니다.
- 페이지네이션 기능을 통해 게시글 목록을 앞뒤로 탐색할 수 있습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/4fef4bcd-d5f0-4d69-bb13-400a423b3a7c">

- 전체 / 게시물 / 작성자 필터를 통해 게시물을 원하는 기준으로 검색할 수 있습니다.
- 게시물 상세 페이지에서 작성자의 프로필을 클릭하면 해당 유저의 프로필 페이지로 이동할 수 있으며,
- 그곳에서 ‘작성글 보기’ 버튼을 통해 해당 유저가 작성한 게시글 목록을 확인할 수 있습니다.
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/0400e192-0363-406a-ae03-4fb33b35bf1c">

> 라이트모드

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/2711d2d9-fede-48f4-8ffd-8578a9666ecf">

<br><br><br>

### 3. 나만의 플레이리스트 
  <mark>내 취향의 노래를 플레이리스트에 저장하고, 재생까지 가능해요.</mark>
  
  - 사용자는 나만의 플레이리스트에서 곡을 재생할 수 있습니다.
  - 곡을 검색하여 미리 재생해보고, 마음에 드는 곡은 플레이리스트에 추가할 수 있습니다.
  - 이미 추가된 곡은 중복 안내 메시지와 함께 등록이 제한됩니다.
  - 추가한 곡은 삭제 기능을 통해 언제든지 제거할 수 있습니다.
  <img width="100%" src="https://github.com/user-attachments/assets/896c6d93-28de-4c4d-b672-c9dfbcf0a840">
  <mark>내 취향의 노래를 플레이리스트에 저장하고, 재생까지 가능해요.</mark>

  - 사용자의 플레이리스트를 기반으로 AI가 맞춤형 노래를 추천해줍니다.
  - 플레이리스트가 비어 있을 경우, 회원가입 시 선택한 선호 장르를 기준으로 곡을 추천합니다.
  - 추천된 곡은 미리 들어본 뒤 플레이리스트에 추가할 수 있습니다.

  <img width="100%"  src="https://github.com/user-attachments/assets/18cb246f-443f-42ad-8951-31f85ae235cf">
  <mark>다른 사용자의 플레이리스트도 자유롭게 둘러볼 수 있어요.</mark>

  - 검색어가 없을 경우, 모든 유저의 정보가 기본으로 표시됩니다.
  - 이름 또는 닉네임으로 유저를 검색할 수 있으며,
  - 각 유저의 플레이리스트를 조회하고,
  - 그 안의 트랙을 미리 들어본 뒤 내 플레이리스트에 추가할 수 있습니다.

  <img width="100%"  src="https://github.com/user-attachments/assets/7ff9233d-3269-4902-9958-82f38cb1361d">
  
> 라이트모드

<img width="100%"  src="https://github.com/user-attachments/assets/411fc219-7819-497e-8e0a-02538b84a92c">
<br><br><br>

### 4. 내한 공연 정보 확인

<mark>놓치기 쉬운 콘서트 정보도 함께 제공하여, 음악의 즐거움을 현실로 확장합니다. </mark> <br>
- 내한 공연 정보가 카드 형태로 제공되어 한눈에 보기 쉽습니다.
- 각 카드를 클릭하면 외부 예매 사이트로 바로 이동할 수 있어 편리하게 예매할 수 있습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/d4f1f791-3fbc-4b7b-8e10-b461dec6b6ff">

> 라이트모드

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/7b3dc693-f672-4547-88fb-7c5c2ed56e22">
<br><br><br>

### 5. 1:1 대화

<mark>유저들과 개별적으로 대화를 나눠보세요.</mark> <br>

- 채팅 목록에서는 대화한 유저들을 확인할 수 있습니다
- 각 유저별로 마지막 메시지 내용과 시간이 표시됩니다.
- 목록에서 유저를 클릭하면 해당 유저와의 채팅창으로 이동합니다.
- 메시지를 입력해 전송할 수 있습니다.
- 날짜 구분선을 통해 메시지의 날짜와 시간을 명확하게 확인할 수 있습니다.
- 검색 기능을 통해 유저를 찾아 새로운 대화를 시작할 수도 있습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/c1818144-f850-4661-8c82-abbb5578008c">

> 라이트모드

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/7ea8dbfb-1a01-41c6-832f-cb87c0946089">
<br><br><br>

### 6. 알림창

- 내게 온 알림을 한눈에 확인할 수 있습니다.
- 좋아요, 댓글, 메시지 알림이 제공됩니다.
- 각 알림을 클릭하면 관련된 페이지로 바로 이동할 수 있습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/d5186dc8-e52c-4a39-8ec8-778f61750b77">

> 라이트모드

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/3fa26259-cf7e-423d-a131-13fc6744f698">

### 7. 유저 액션

- 프로필을 클릭하면 마이페이지로 이동할 수 있습니다.
- 로그아웃, 다크모드/라이트모드 전환, 테마 변경 등의 기능도 이용할 수 있습니다.
  
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/3fa26259-cf7e-423d-a131-13fc6744f698">

### 8. 마이페이지
- 사용자 정보 수정이 가능하며,
- 이메일을 제외한 이름, 좋아하는 가수, 좋아하는 장르, 프로필 이미지를 변경할 수 있습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/e88e7c1d-1250-47fe-a4f2-8d0c29066f6d">

- 내가 작성한 글 목록을 확인할 수 있으며,
- 각 항목을 클릭하면 해당 게시글의 상세 페이지로 이동할 수 있습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/3fec1b99-f79c-483e-a914-88a51078edf4">

- 비밀번호 변경이 가능합니다.
  - 현재 비밀번호를 입력해 인증한 후, 새로운 비밀번호로 변경할 수 있습니다.
- 로그아웃 및 회원탈퇴 기능도 제공합니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/dbdcb2a9-a9e2-4e92-a535-02402c900e3a">

### 9. 반응형 디자인

- 모든 페이지는 반응형으로 구현되어 있습니다.
- 데스크탑부터 모바일 화면까지 다양한 해상도에 최적화되어 있습니다.
- 모바일 환경에서는 상단 메뉴바가 사이드 메뉴로 전환되어 사용자 편의성을 높였습니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/aeb0becb-7e8e-4a3c-831d-e54f3ed6d9e2">

### 10. 404 Not Found

- 잘못된 경로로 접근할 경우,
- 사용자에게 404 Not Found 페이지를 표시하여 안내합니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/3228bc9e-faed-447d-87b9-e97469a2b64e">

### 11. 회원가입

- 사용자는 회원가입 전 모든 필수 약관 항목에 동의해야 다음 단계로 진행할 수 있습니다.
- 약관 동의 후, 회원가입 입력 폼이 나타납니다.
- 입력 폼에는 다음 항목이 포함됩니다:
  - 이름 또는 닉네임 (필수)
  - 이메일 (필수)
    - 이메일은 유효한 형식 및 도메인 여부를 검사합니다.
  - 비밀번호 (필수)
    - 비밀번호는 유효성 검사를 거칩니다.
  - 좋아하는 가수 (선택)
    - Spotify API를 이용해 검색 기능을 통해 가수 목록을 불러올 수 있습니다.
  - 좋아하는 음악 장르 (필수)
  - 필수 항목을 모두 입력해야 회원가입을 완료할 수 있습니다.
- 회원가입에 성공하면 로그인 페이지로 이동합니다.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/0f73df4b-01cd-4bf7-8c16-cf6355d0450a">
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/a232197c-eb6f-433c-b30f-b5c682b811c4">

<br>




---

## 🚀 Trouble Shooting

> Spotify API의 추천 기능 사용 제약

문제 상황
- 음악 검색은 로그인 없이 가능하지만, 추천 기능은 유저의 Spotify 계정 로그인이 필수
- 모든 유저에게 별도 로그인 절차를 요구하는 것은 사용자 경험(UX)에 부정적 영향을 끼친다고 판단

해결 전략
- GPT 기반 음악 추천 시스템으로 방향 전환.
- Spotify API를 통해 얻은 곡 제목과 아티스트 정보를 전역 상태로 저장.
- 저장된 정보를 OpenAI GPT API에 프롬프트로 전달하여, 플레이리스트 기반 추천 시스템 구축.

결과
- 별도의 Spotify 로그인 없이도 사용자 맞춤형 음악 추천 제공 가능.
- Spotify 계정이 없는 사용자는 추천 기능을 사용할 수 없는 제약을 OpenAI GPT API 도입을 통해 해결, 모든 사용자에게 열린 추천 경험을 제공

<br>
> Spotify API의 재생 기능 사용 제약

문제 상황
- Spotify API를 통해 노래 검색은 로그인 없이 가능하지만, 재생 기능은 사용자의 Spotify 계정 로그인과 Premium 멤버십이 필수
- 우리 서비스 사용자 대부분이 Spotify Premium 유저가 아닐 가능성이 높았고, 모든 유저에게 별도 로그인 절차를 요구하는 것은 사용자 경험(UX)에 큰 저해 요소로
판단 됨

대안 탐색
- SoundCloud API: 스트리밍 기능 불안정, 공식 API 중단으로 부적합.
- Apple Music, Deezer: 한국 사용자 대상 인증 절차 복잡 및 접근성 낮음.
  
해결 전략
- YouTube Data API를 도입.
- 노래 제목 + 아티스트명 기반으로 YouTube Data API를 통해 영상 검색 후 최상위 영상 자동 선택
- 별도의 로그인 없이도 누구나 음악을 감상할 수 있도록 재생 기능 구현
- 플레이 버튼 클릭 시 해당 영상의 iframe을 통해 직접 재생/정지 가능

결과
- Spotify Premium 계정 없이도 모든 사용자가 숨듣명 음악을 자유롭게 감상할 수 있게 됨
- YouTube 기반 재생으로 플랫폼 접근성을 높이고 UX 개선 효과 달성
- 사용자의 노출 빈도가 높은 플랫폼(YouTube)을 활용함으로써, 기술 구현과 사용자 친숙도 간의 균형 확보

<br>
> 소셜 로그인 구현 제약
문제 상황
- sdk v2는 로그인 성공 시 redirectUri로 access token이 URL에 노출되어 날아옴
- 카카오 비즈앱이 아니면 사용자 이메일을 제공받을 수 없음

해결 전략
- v1은 로그인 성공 시 카카오 SDK 내부에서 access token을 자동으로 저장하고 관리, 구조 단순화 v2에서 v1으로 다운그레이드
  - v1은 deprecated 상태 추후 v2 업그레이드
- nickname과 id를 조합해 아래와 같은 형식으로 가입용 이메일을 생성
  - fakeEmail = ${ nickname }_${ id }@kakao.com ;


## 😎 프로젝트 회고

### 박준규
- 이번 프로젝트를 통해 팀원 모두가 책임감을 갖고 끝까지 최선을 다해줘서 정말 고마웠습니다.
외부 API 활용과 디테일한 기능 구현을 경험하며 개인적으로도 많은 성장을 느꼈고,
목표했던 바를 어느 정도 이룬 것 같아 뿌듯합니다.
팀장으로서 부족했던 점도 있었지만, 함께한 팀원 덕분에 많은 걸 배울 수 있었던 값진 시간이었습니다.

### 현혜주
- 리액트가 처음이라 걱정이 많이 됐지만 실제로 적용을 해보면서 재미를 느끼게
되었습니다. 디자인에서도 부족한 점이 많았는데 팀원분들이 많이 이해해주시고격려해주셔서 해낼 수 있었습니다.
이번 팀프로젝트 하면서 많이 배워갈 수 있어 좋았습니다

### 이민지
- 아직 개발을 시작한지 얼마 되지 않아 걱정스러운 마음이 앞섰는데 이번 프로젝트를 통해 많은 것을 배웠습니다!
좋은 팀원들과 협업하게 되어 너무 감사했고, 배운 점도, 느낀 점도 많았습니다. 아직 배워야할 점이 많고 부족하지만
그럼에도 무사히 끝낼 수 있어서 감사했습니다! 다들 수고하셨어요 !!

### 권유정
- 프로젝트 진행하면서 배운걸 직접 적용하고 활용하면서 어려운 부분도 많았지만,
재미도 있었고 막히는 부분 해결하면서 실력 향상에도 도움이 많이 된 것 같습니다.
팀원분들 그동안 너무 고생많으셨습니다!

### 조정우
- 배운 지 얼마 안 된 리액트로 프로젝트를 진행하다 보니 어색하고 어려운 부분이 많았지만,
이번 기회를 통해 프론트엔드와 리액트에 대해 조금 더 이해할 수 있었고, 부족한 점도 느끼며 더 열심히 공부해야겠다는 동기부여가 되었습니다.
팀원분들 고생 많으셨습니다!

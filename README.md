## 배포 링크

[vercel 배포](https://quiz-manage-reservations-dcvd2vdj7-haegnim.vercel.app)

## 기술 스택

- svelte kit
- tailwind css

## 구현 페이지

- 메인 페이지
- 예약 페이지

## 요구조건
- [x] New Reservation 을 누르면 예약 생성 페이지
- [x] back 버튼을 누르면 홈으로 돌아감
- [x] 사용자 입력값 : {Customer Name, Phone Number, Reservation Date, Guest Count, Tables }
- [x] select table을 누르면 1개 이상의 테이블을 고를 수 있음.
- [x] select date를 누르면 예약 날짜를 고를 수 있음
- [x] 수정할 땐 기존 예약 카드에 담겨져있던 내용으로 이미 내용이 채워져 있음.
- [x] 휴지통 버튼을 누르면 예약 삭제
- [x] seated 누를 경우 삭제는 되지 않지만 리스트에서 사라짐
- [x] 예약 카드를 누를 경우 수정 페이지로 이동

### 임의적 해석
- select date 창에서 time 입력창을 누르면 시간을 date 입력창을 누르면 날짜를 선택할 수 있도록 구현
- 수정 페이지에 수정 버튼이 없으므로 입력값이 바뀔 때 예약 정보 업데이트
- 필수 입력란은 이름, 전화번호, 인원수, 예약 날짜로 설정

## 폴더 구조

```
node_modules/
src/
    components/
        common/                       : 공통 UI 요소 컴포넌트 폴더
        layout/                       : layout UI 컴포넌트 폴더
    lib/
    routes/                           : 메인 페이지
        edit/                         : 예약 생성 페이지
            [id]/                     : 예약 수정 페이지
    store/                            : svelte/store
    utils/                            : 재사용되는 함수 폴더
    static/                           : 이미지 파일 등 리소스 파일
    app.html
    styles.css
```

## 배포 링크

[vercel 배포](https://quiz-manage-reservations-dcvd2vdj7-haegnim.vercel.app/edit/051af6ef-5dcd-4f0b-ade5-517e246d3370)

## 기술 스택

- svelte kit
- tailwind css

## 구현 페이지

- 메인 페이지
- 예약 페이지

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

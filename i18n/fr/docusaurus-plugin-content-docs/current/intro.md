---
sidebar_position: 1
---
# 튜토리얼 소개 프랑스어

**5분 안에 Docusaurus를 알아봅시다**.

## 시작하기

**새 사이트를 만들어** 시작하세요.

또는 **[docusaurus.new](https://docusaurus.new)**로 **Docusaurus를 바로 사용해 보세요**.

### 필요한 것

- [Node.js](https://nodejs.org/en/download/) 버전 18.0 이상:
  - Node.js를 설치할 때 종속성과 관련된 모든 체크박스를 선택하는 것이 좋습니다.

## 새 사이트 생성하기

**클래식 템플릿**을 사용하여 새 Docusaurus 사이트를 생성하세요.

다음 명령어를 실행하면 클래식 템플릿이 자동으로 프로젝트에 추가됩니다:

```bash
npm init docusaurus@latest my-website classic
```

이 명령어는 명령 프롬프트, 파워쉘, 터미널 또는 코드 편집기의 통합 터미널에 입력할 수 있습니다.

이 명령어는 Docusaurus를 실행하는 데 필요한 모든 종속성도 설치합니다.

## 사이트 시작하기

개발 서버를 실행하세요:

```bash
cd my-website
npm run start
```

`cd` 명령어는 작업 중인 디렉토리를 변경합니다. 새로 만든 Docusaurus 사이트로 작업하려면 터미널에서 해당 위치로 이동해야 합니다.

`npm run start` 명령어는 로컬에서 웹사이트를 빌드하고 개발 서버를 통해 제공하여 http://localhost:3000/에서 볼 수 있게 합니다.

`docs/intro.md` (이 페이지)를 열고 몇 줄을 수정해보세요: 사이트가 **자동으로 새로고침**되어 변경 사항을 표시합니다.

## 리액트 개발 환경

### 사용 모듈

- 리액트 라이브러리
    - "react": "^16.2.0"
    - "react-dom": "^16.2.0"

- 모듈 번들링 및 트렌스파일
    - "babel-core": "^6.26.0"
    - "babel-loader": "^7.1.2"
    - "babel-preset-env": "^1.6.1"
    - "babel-preset-react": "^6.24.1"
    - "webpack": "^3.10.0"

- 개발서버 및 HMR
    - "react-hot-loader": "^3.1.3"
    - "webpack-dev-server": "^2.9.6"

- 문법 검사
    - "eslint": "^4.12.1"
    - "eslint-config-airbnb": "^16.1.0"
    - "eslint-plugin-import": "^2.8.0"
    - "eslint-plugin-jsx-a11y": "^6.0.2"
    - "eslint-plugin-react": "^7.5.1"

- git hook
    - "husky": "^0.14.3"

### npm run script

- "build": 빌드 산출물 내기 위해
- "watch": 자동 빌드를 위해
- "devserver": webpack-dev-server를 이용해서 개발 서버를 실행하기 위히
- "eslint": 개발 소스의 문법을 검사하기 위해
- "precommit": 커밋이 이뤄지기 직전에 eslint를 실행하기 위해

### 기타
- .editorconfig: 해당 파일이 인식되는 IDE에서는 소스 파일 포멧을 자동 변환
- .gitignore: 깃 추적 무시
- yarn.lock: 원하면 yarn 이용 가능

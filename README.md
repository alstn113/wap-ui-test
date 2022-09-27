<h1 align="center">🌟 wap-ui 🌟</h1>

<h2 align="center">Awesome React Component Libraray</h2>

---

## Installing Wap UI

```sh
yarn add wap-ui @emotion/react @emotion/styled framer-motion
# or
npm i wap-ui @emotion/react @emotion/styled framer-motion
```

## Usage

```jsx
import React from 'react';
import { Button } from 'wap-ui';

const App = () => {
  return <Button>버튼</Button>;
};

export default App;
```

pull request 후 다시 git push origin <branch name>하면
자동으로 pull_request에 refresh가 생기게 됨

// local에 pull 받는 방법
git checkout master
git fetch upstream
git rebase upstream/master
git push -f origin master

git push upstream <branch-name>
// 원격에 저장소 생성

test

1. git checkout -b feature/#11/button-components
2. git add . && git commit -m "Issue #11 Feat : add button size style"
3. git push upstream feature/#11/button-components
4. github에서 pull_request하기
5. git checkout main
6. git pull upstream main
7. git push origin main

// project
project는 issue에서만 todo, progress, done을 바꿔주고
pull_request에서는 설정하지 말기

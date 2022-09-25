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

git checkout master
git fetch upstream
git rebase upstream/master
git push -f origin master

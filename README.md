# React-Hook

# 2주차 스터디!

# 😃 React Hook

함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 하는 기능이다.

훅을 통해 함수형 컴포넌트에서도 컴포넌트 상태 값을 관리할 수 있고, 컴포넌트의 생명주기 함수를 이용할 수있다.

- 생명주기 = 라이프 사이클이라고도 하는데 컴포넌트가 실행되거나, 업데이트 또는 제거될 때 특정한 이벤트들을 호출하는 것을 말합니다

## 💫리액트 훅의 장점!

1. 재사용 가능한 로직을 쉽게 만든다 ( 훅이 단순한 함수이므로 함수 안에서 다른 함수를 호출하는 것으로 새로운 훅을 만들 수 있기 때문.)
2. 리액트 내장 훅과 다른 사람들이 만든 여러 커스텀 훅을 조립해서 새로운 훅을 만들 수 있다.
3. 같은 로직을 한곳으로 모을 수 있어 가독성이 좋다.

## 기본 Hook

- useState
- useEffect
- useContext

> useState

**`useState`** Hook은 함수형 컴포넌트에서 간편하게 상태를 관리하고, 상태값의 변경에 따른 자동 리렌더링을 처리할 수 있는 기능을 제공합니다. 따라서 컴포넌트의 상태 관리와 UI 업데이트에 유용하게 사용할 수 있습니다.

```jsx
import React, { useState } from "react";

function MyComponent() {
  // count라는 상태값과 setCount라는 상태를 갱신하는 함수를 가져옴
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

useState Hook 코드별 해석

- **`import React, { useState } from 'react';`**: React와 useState Hook을 옴.
- **`function MyComponent() { ... }`**: MyComponent라는 함수형 컴포넌트를 정의합니다.
- **`const [count, setCount] = useState(0);`**: count라는 상태값과 count를 갱신할 수 있는 setCount 함수를 선언하고, useState Hook을 호출하여 초기 상태값을 0으로 설정합니다.
- **`<p>Count: {count}</p>`**: 현재 count 값을 화면에 표시하는 p 요소입니다.
- **`<button onClick={() => setCount(count + 1)}>Increase</button>`**: 버튼을 클릭하면 setCount 함수를 호출하여 count 값을 1씩 증가시키는 이벤트 핸들러입니다.

> useEffect

컴포넌트의 생명주기(lifecycle)와 관련하여 특정 작업을 수행하고자 할 때 사용됩니다. 함수형 컴포넌트에서 **`useEffect`**를 사용하여 부수 효과(side effect)를 수행하거나 컴포넌트의 업데이트 사이클 이벤트에 대한 작업을 정의할 수 있습니다.

```jsx
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // 컴포넌트가 마운트되거나 업데이트될 때마다 실행됨
    console.log("Component updated");
  });

  return <div>Hello, World!</div>;
}
```

useEffect 코드별 해석

- **`import React, { useEffect } from 'react';`**: React와 **`useEffect`** Hook을 가져옵니다.
- **`function MyComponent() { ... }`**: MyComponent라는 함수형 컴포넌트를 정의합니다.
- **`useEffect(() => { ... });`**: **`useEffect`** Hook을 사용하여 콜백 함수를 등록합니다. 이 콜백 함수는 컴포넌트가 마운트되거나 업데이트될 때마다 실행됩니다. (마운트는 컴포넌트가 화면에 처음으로 나타내는 것)
- **`console.log('Component updated');`**: 컴포넌트가 업데이트될 때마다 콘솔에 "Component updated"라는 메시지를 출력합니다.
- **`return <div>Hello, World!</div>;`**: 간단한 화면 요소를 반환합니다.

> useContext

React의 Hook 중 하나로, React 컨텍스트(Context)를 사용할 때 사용됩니다. 컨텍스트를 통해 컴포넌트 간에 전역적으로 상태를 공유하고 데이터를 전달할 수 있습니다.

```jsx
import React, { useContext } from "react";

// 컨텍스트 생성
const MyContext = React.createContext();

function MyComponent() {
  // 컨텍스트 사용
  const value = useContext(MyContext);

  return <div>{value}</div>;
}
```

- **`import React, { useContext } from 'react';`**: React와 **`useContext`** Hook을 가져옵니다.
- **`const MyContext = React.createContext();`**: **`createContext`** 함수를 사용하여 새로운 컨텍스트인 **`MyContext`**를 생성합니다.
- **`function MyComponent() { ... }`**: MyComponent라는 함수형 컴포넌트를 정의합니다.
- **`const value = useContext(MyContext);`**: **`useContext`** Hook을 사용하여 **`MyContext`** 컨텍스트에 저장된 값을 가져옵니다. 이 값을 **`value`** 변수에 할당합니다.
- **`return <div>{value}</div>;`**: 화면에 **`value`** 변수에 저장된 값을 표시하는 간단한 JSX를 반환합니다.

**`useContext`**는 주로 컴포넌트 계층 구조를 따라 상태를 전파하고 여러 컴포넌트에서 동일한 값을 공유해야 할 때 사용됩니다. 예를 들어, 사용자 인증 정보, 애플리케이션 설정 또는 테마와 같은 전역적으로 공유되어야 하는 데이터를 처리하는 데에 유용합니다.

---

# 😁 Hook 연결 방법정리 ex

> app.js 파일

```jsx
import React from "react"; //리액트 사용 선언
import Counter from "./Counter"; //Counter컴포넌트 가져옴

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Counter /> //Counter 컴포넌트를 App컴포넌트에 렌더링
    </div>
  );
}

export default App;
```

hook useReducer

> counter.js파일

```jsx
import React, { useReducer } from "react";
//리액트 패키지에서 hook을 사용할수 있도록 선언

// 리듀서 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default Counter;
//컴포넌트를 외부에서 사용할 수 있도록 내보냄
```

🐥  **`Counter.js`** 파일에서는 **`Counter`** 컴포넌트를 내보내고(**`export default Counter;`**), **`App.js`** 파일에서는 **`Counter`** 컴포넌트를 가져와서(**`import Counter from './Counter';`**) 사용하는 방식으로 두 파일을 연결해서 훅을 사용!

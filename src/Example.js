import React, { useState } from 'react';

function Example() {
  // Khai báo 1 biến số đếm, gọi là "count"
  const [count, setCount] = useState(0);

  // Khai báo nhiều biến trạng thái!
  // const [age, setAge] = useState(42);
  // const [fruit, setFruit] = useState('chuối');
  // const [todos, setTodos] = useState([{ text: 'Học Hooks' }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;

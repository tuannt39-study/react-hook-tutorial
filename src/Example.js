import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Giống componentDidMount và componentDidUpdate:
  useEffect(() => {
    // Cập nhật tiêu đề trang web sử dụng API trình duyệt
    document.title = `Bạn đã bấm ${count} lần`;
  });

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

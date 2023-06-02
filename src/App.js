import React from 'react';

function App() {
  const [stack, setStack] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handlePush = () => {
    if (inputValue) {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const updatedStack = [...stack];
      updatedStack.pop();
      setStack(updatedStack);
    }
  };

  return (
    <div>
      <h1>Stack Example</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div>
        <h2>Stack:</h2>
        {stack.length > 0 ? (
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Stack is empty</p>
        )}
      </div>
    </div>
  );
}

export default App;
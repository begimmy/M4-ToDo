import { useState } from "react";

const Form = ({data, setData, setStatus}) => {
  const [text, setText] = useState('');
  const addTodo = (text) =>{
  
  if (text.trim() === "") {
    alert("The name cannot be empty!"); 
    return; 
  }

    setData([
      {
        text,
        deleted: false,
        important: false,
        correct: false,
        completed: false,
        id: data.length > 0 ? data[0].id + 1 : 1
      },
      ...data
    ]);
    setText('');
    setStatus('all');
  }

  const KeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo(text); // Вызываем функцию добавления задачи
    }
  };
  return (
    <div className="form">
      <button onClick={()=>{
        addTodo(text)
      }}>+</button>
      <input type="text"
      placeholder="Create a new todo..."
      onChange={(e)=>{
        setText(e.target.value)
      }}
      value={text}
      onKeyDown={KeyDown}
      />
    </div>
  );
};

export default Form;

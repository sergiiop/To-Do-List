import { useState } from "react";

const useTodo = (inicial) => {
  const [todo, setTodo] = useState(inicial);

  const handleChange = ({ target }) => {
    setTodo((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const reset = () => {
    setTodo(inicial);
  };

  return [todo, handleChange, reset];
};

export default useTodo;
